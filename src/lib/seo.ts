import { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
}

export function generateSEO({
  title = "Gabriel Castro - Frontend Engineer",
  description = "Portfolio of Gabriel Castro, Frontend Engineer focused on React, TypeScript, and modern web development.",
  image = "/og-image.png",
  url,
  type = "website",
}: SEOProps = {}): Metadata {
  const siteName = "Gabriel Castro";
  const fullTitle = title.includes(siteName) ? title : `${title} - ${siteName}`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: [
      "Gabriel Castro",
      "Frontend Engineer",
      "React Developer",
      "TypeScript",
      "Next.js",
      "JavaScript",
      "Web Development",
      "Portfolio",
      "Brazil",
      "Remote",
    ],
    authors: [
      { name: "Gabriel Castro", url: "https://github.com/gabriel1997castro" },
    ],
    creator: "Gabriel Castro",
    openGraph: {
      type,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName,
      ...(url && { url }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@gabriel1997castro",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
    },
  };

  return metadata;
}

export const defaultSEO = generateSEO();
