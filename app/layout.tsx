import type { Metadata, Viewport } from "next";
import { portfolio } from "@/data/portfolio";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Devesh Kumar Choubey | Backend Systems & Practical AI",
    template: "%s | Devesh Kumar Choubey",
  },
  description: "Software Engineer building dependable Java and Python backend systems, enterprise automation, semantic retrieval workflows, and practical AI applications.",
  keywords: ["Devesh Kumar Choubey", "Software Engineer", "Java", "Spring Boot", "Python", "Backend Engineer", "Applied AI", "Pinecone", "Ollama"],
  authors: [{ name: "Devesh Kumar Choubey" }],
  creator: "Devesh Kumar Choubey",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Devesh Kumar Choubey — Backend Systems & Practical AI",
    description: "An engineering control center for dependable backend systems and practical AI workflows.",
    url: "/",
    siteName: "Devesh Kumar Choubey — Engineering Control Center",
    locale: "en_IN",
    images: [{ url: "/og.png", width: 1792, height: 924, alt: "Devesh Kumar Choubey — Backend Systems and Practical AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devesh Kumar Choubey — Backend Systems & Practical AI",
    description: "Dependable Java/Python backend systems and practical AI workflows.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050914",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolio.identity.name,
    jobTitle: portfolio.identity.role,
    email: `mailto:${portfolio.identity.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
    sameAs: [portfolio.identity.github, portfolio.identity.linkedin, portfolio.identity.leetcode],
    alumniOf: { "@type": "CollegeOrUniversity", name: portfolio.education.institution },
    knowsAbout: ["Java", "Spring Boot", "Python", "Backend Engineering", "Generative AI", "Vector Search"],
  };

  return (
    <html lang="en" className="dark">
      <head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></head>
      <body>{children}</body>
    </html>
  );
}
