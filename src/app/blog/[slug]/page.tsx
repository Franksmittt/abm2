// src/app/blog/[slug]/page.tsx
import { ALL_POSTS, BlogPost } from "@/data/blog-posts";
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- Helper to find the post ---
const getPostBySlug = (slug: string): BlogPost | undefined => {
  return ALL_POSTS.find(p => p.slug === slug);
};

// --- Dynamic SEO Metadata (Perfect for Google) with Open Graph ---
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return { title: "Post Not Found" };
  }

  const url = `https://www.albertonbatterymart.co.za/blog/${post.slug}`;

  return {
    title: `${post.title} | Alberton Battery Mart`,
    description: post.description,
    keywords: [
      'battery blog Alberton',
      'car battery advice',
      'battery tips',
      post.category.toLowerCase(),
      ...(post.description.match(/\b\w+\b/g) || []).slice(0, 5) // Extract keywords from description
    ],
    openGraph: {
      title: `${post.title} | Alberton Battery Mart`,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.date,
      authors: ['Alberton Battery Mart'],
      tags: [post.category],
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: ['/images/og-image.jpg'],
    },
    alternates: {
      canonical: url,
    },
  };
}

// --- Static Page Generation (Builds all posts at once for max speed) ---
export async function generateStaticParams() {
  return ALL_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

// --- The Page Component ---
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound(); // 404
  }

  const EMERGENCY_PHONE_DISPLAY = "010 109 6211";
  const EMERGENCY_PHONE_LINK = "0101096211";

  // --- Article Schema for Blog Posts ---
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "image": `https://www.albertonbatterymart.co.za/images/og-image.jpg`,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": "Alberton Battery Mart",
      "url": "https://www.albertonbatterymart.co.za"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Alberton Battery Mart",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.albertonbatterymart.co.za/images/logo-schema.jpg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.albertonbatterymart.co.za/blog/${post.slug}`
    },
    "articleSection": post.category
  };

  // --- BreadcrumbList Schema ---
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.albertonbatterymart.co.za"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.albertonbatterymart.co.za/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://www.albertonbatterymart.co.za/blog/${post.slug}`
      }
    ]
  };

  return (
    <div className="container py-16">
      {/* --- Add Article and Breadcrumb Schema --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="grid lg:grid-cols-12 gap-12">

        {/* --- Main Content (Left Column) --- */}
        <article className="lg:col-span-8">
          {/* Article Header */}
          <div className="space-y-4 border-b border-border pb-6 mb-6">
            <span className="text-battery font-semibold">{post.category}</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">
              {post.title}
            </h1>
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>

          {/* --- This 'prose' class auto-styles your article from Tailwind Typography --- */}
          <div className="prose prose-invert prose-lg max-w-none prose-h2:text-battery prose-h2:font-bold prose-a:text-battery prose-strong:text-foreground">
            {post.content}
          </div>
        </article>

        {/* --- Sidebar (Right Column) --- */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-card border border-border p-6 rounded-lg shadow-lg text-center space-y-4 lg:sticky lg:top-24">
            <h3 className="text-2xl font-bold text-foreground">
              Need Help <span className="text-battery">Now?</span>
            </h3>
            <p className="text-muted-foreground">
              Get an instant quote or book a mobile callout.
            </p>
            <Button asChild size="lg" variant="battery" className="w-full text-lg">
              <a href={`tel:${EMERGENCY_PHONE_LINK}`} className="flex items-center space-x-3">
                <Phone className="h-6 w-6" />
                <span>Call: {EMERGENCY_PHONE_DISPLAY}</span>
              </a>
            </Button>
          </div>
        </aside>

      </div>
    </div>
  );
}