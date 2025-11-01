// src/app/deep-cycle/page.tsx
import { redirect } from 'next/navigation';

// Redirect to the main segmented listing page for consolidation and SEO
export default function DeepCycleRedirectPage() {
  redirect('/products/type/deep-cycle');
}