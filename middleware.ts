import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const productIdPattern = /^\/products\/(\d+)$/;
const isDev = process.env.NODE_ENV === "development";

const GEO_TARGETS: Record<string, { rewriteTo: string }> = {
  ZA: { rewriteTo: "/services/mobile-battery-replacement/alberton" },
};

const LOCAL_SUBURB_TARGETS = [
  {
    suburb: "Meyersdal",
    matchers: [/meyersdal/i],
    destination: "/services/battery-fitment/meyersdal",
  },
  {
    suburb: "Alrode",
    matchers: [/alrode/i],
    destination: "/services/truck-battery-fitment/alrode",
  },
];

const AB_TEST_PATHS = ["/", "/services"];
const AB_COOKIE = "cta-test-bucket";

const isBot = (userAgent = "") =>
  /bot|crawler|spider|crawling|google|bing|yahoo/i.test(userAgent);

function maybeRewriteForSuburb(request: NextRequest) {
  const city = request.geo?.city;
  if (!city) return null;

  for (const target of LOCAL_SUBURB_TARGETS) {
    if (target.matchers.some((regex) => regex.test(city))) {
      const url = request.nextUrl.clone();
      url.pathname = target.destination;
      if (isDev) {
        console.info("[middleware] suburb-rewrite", {
          city,
          destination: target.destination,
        });
      }
      return NextResponse.rewrite(url);
    }
  }
  return null;
}

function maybeRewriteForCountry(request: NextRequest) {
  const country = request.geo?.country;
  if (!country) return null;

  const target = GEO_TARGETS[country];
  if (!target) return null;

  const url = request.nextUrl.clone();
  url.pathname = target.rewriteTo;
  if (isDev) {
    console.info("[middleware] geo-rewrite", {
      country,
      destination: target.rewriteTo,
    });
  }
  return NextResponse.rewrite(url);
}

function handleAbTesting(request: NextRequest) {
  if (!AB_TEST_PATHS.includes(request.nextUrl.pathname)) return null;

  const existingBucket = request.cookies.get(AB_COOKIE)?.value;
  let bucket = existingBucket;

  if (!bucket) {
    bucket = Math.random() < 0.5 ? "control" : "variant";
  }

  const response = NextResponse.next();

  if (!existingBucket) {
    response.cookies.set(AB_COOKIE, bucket, {
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });
  }

  response.headers.set("x-ab-bucket", bucket);
  if (isDev) {
    console.info("[middleware] ab-bucket", {
      path: request.nextUrl.pathname,
      bucket,
      existingBucket,
    });
  }
  return response;
}

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";
  const pathname = request.nextUrl.pathname;

  // Protect admin API routes (except login and check)
  if (pathname.startsWith("/api/admin/") && !pathname.includes("/login") && !pathname.includes("/check") && !pathname.includes("/logout")) {
    const session = request.cookies.get("admin_session");
    if (!session || session.value !== "authenticated") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  const legacyProductMatch = request.nextUrl.pathname.match(productIdPattern);
  if (legacyProductMatch) {
    const url = request.nextUrl.clone();
    url.pathname = `/products/id/${legacyProductMatch[1]}`;
    if (isDev) {
      console.info("[middleware] legacy-product-rewrite", {
        from: request.nextUrl.pathname,
        to: url.pathname,
      });
    }
    return NextResponse.rewrite(url);
  }

  if (isBot(userAgent)) {
    return NextResponse.next();
  }

  const suburbRewrite = maybeRewriteForSuburb(request);
  if (suburbRewrite) return suburbRewrite;

  const geoRewrite = maybeRewriteForCountry(request);
  if (geoRewrite) return geoRewrite;

  const abResponse = handleAbTesting(request);
  if (abResponse) return abResponse;

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

