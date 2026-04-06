import { siteData } from "@/content/siteData";
import ContactPageClient from "@/app/contact/ContactPageClient";
import StructuredData from "@/components/StructuredData";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createPageMetadata,
} from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact Navi Logistics",
  description:
    "Contact Navi Logistics for freight quotes, warehousing support, transportation planning, and supply chain solutions across India.",
  path: "/contact",
  keywords: [
    "contact Navi Logistics",
    "logistics quote",
    "freight quote India",
    "warehousing contact",
  ],
});

export default function ContactPage() {
  const faqSchema = createFaqSchema(siteData.contactPage.faqs);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />
      <ContactPageClient />
    </>
  );
}
