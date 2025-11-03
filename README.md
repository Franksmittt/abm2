# Alberton Battery Mart (abm2)

## 🏆 Project Status: 100% Front-End Complete & Production Verified

This repository contains the final, verified codebase for the Alberton Battery Mart informational and lead-generation website. The entire front-end structure is complete, responsive, and adheres to strict factual accuracy regarding service claims and operating hours.

### Key Deployment Status

| Check | Status | Note |
| :--- | :--- | :--- |
| **Build Status** | **PASSED** | Passes `pnpm run build` and all ESLint/TypeScript checks. |
| **Architecture** | Next.js 14 (App Router) | Optimized for performance and static hosting (Vercel). |
| **Data Solution** | **Static Content Utility** | Database dependencies (Drizzle/Postgres) were removed for simplicity. Product data is managed via local TypeScript objects. |
| **Responsiveness** | Flawless | Verified across all devices (Mobile-first Tailwind design). |

---

## 📞 FINAL VERIFIED OPERATIONAL DETAILS (Mandatory Accuracy)

The following information has been finalized and implemented consistently across all 18 pages (Header, Footer, Services, Contact, etc.).

| Detail | Value | Use |
| :--- | :--- | :--- |
| **Primary Phone** | **010 109 6211** | Clean, standardized format. |
| **WhatsApp Link** | `https://wa.me/27823046926` | Used for *messaging only* CTAs. |
| **Weekday Hours (M-F)** | **08:00 AM – 5:00 PM** | FINAL CORRECT OPERATING HOURS. |
| **Saturday Hours** | **08:00 AM – 12:00 PM** | FINAL CORRECT OPERATING HOURS. |
| **Callout Service** | **Convenient Callout** | *Accurate Claim:* No "Emergency" or "Free Callout" claims are made. |
| **Physical Address** | 28 St Columb Rd, New Redruth, Alberton, 1450 | Used for Storefront CTA and Footer. |

---

## 💻 Tech Stack & Architecture

| Category | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | Next.js 14 (App Router) | Server-first for performance. |
| **Design System** | shadcn/ui | "Copy, don't install" for full branding control. |
| **Styling** | Tailwind CSS (Dark/Red/White) | Utility-first, optimized for minimal CSS footprint. |
| **Language** | TypeScript | Mandatory for type safety. |

---

## 🗺️ Complete Routing Structure (18 Pages)

All internal links are fulfilled and map to the following routes:

| Route Segment | Purpose | Status |
| :--- | :--- | :--- |
| **`/`** | Homepage Funnel (Core Conversion) | **Complete** |
| **`/services`** | SEO Service Authority Page (Free Diagnostics, Fitment) | **Complete** |
| **`/contact`** | Lead Form, Dual CTA, & Map Embed | **Complete** |
| **`/about`** | Company Trust Page | **Complete** |
| **`/quote`** | Dedicated Solar/B2B Quote Capture Page | **Complete** |
| **`/faq`** | Dedicated SEO FAQ Resource Page | **Complete** |
| **`/products`** | Full Product Catalog Index | **Complete** |
| **`/products/type/*`** | Type-Based Filtering (e.g., `/products/type/automotive`) | **Complete** |
| **`/products/brand/[brandName]`** | Dynamic Brand Filtering (e.g., `/products/brand/willard`) | **Complete** |

---

## 🚀 Getting Started (Local Development)

### Prerequisites

* **Node.js LTS** (v18.x or newer)
* **pnpm** (Used for all dependency management)

### Installation

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/Franksmittt/abm2.git](https://github.com/Franksmittt/abm2.git)
    cd abm2
    ```

2.  **Install Dependencies:**
    ```bash
    pnpm install
    ```

3.  **Start Development Server:**
    ```bash
    pnpm run dev
    ```
    The application will be available at `http://localhost:3000`.

### Content Management Notes

* **Product Data:** All battery specifications are located in **`src/lib/product-mock-data.ts`**. To change the products shown on the site, edit this file.
* **Form Submission:** The form in `/contact` is a **Client Component** and currently only logs data to the browser console. To make it functional, it needs to be connected to a submission endpoint (e.g., a Vercel Serverless Function or a Formspree link).

---

<div align="center">
  <h3>Project Designed, Developed & Maintained by Endpoint Media</h3>
  <p>For support or deployment assistance, please contact the development team.</p>
</div>