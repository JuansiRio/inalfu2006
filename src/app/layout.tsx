import type { Metadata, Viewport } from "next";
import { Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { absolutePublicAsset, withBasePath } from "@/lib/basePath";
import { siteUrl } from "@/lib/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const base = new URL(siteUrl);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "The Last INALFU",
      url: `${siteUrl}/`,
      inLanguage: "es-CO",
      description:
        "Encuentro de egresados INALFU — 20 años después. Información del evento y grupo de WhatsApp.",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: `${siteUrl}/`,
      name: "The Last INALFU — 20 años después | Encuentro de egresados",
      description:
        "Encuentro de egresados The Last INALFU — 20 años después. Convocatoria, información del evento y grupo oficial de WhatsApp.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#event` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: absolutePublicAsset("/assets/images/thelast.png"),
      },
    },
    {
      "@type": "Event",
      "@id": `${siteUrl}/#event`,
      name: "The Last INALFU — 20 años después",
      description:
        "Reencuentro de egresados de la última promoción del INALFU. Misa, desfile, cena y fiesta el 26 de diciembre de 2026. Lugar y horarios finales por confirmar.",
      startDate: "2026-12-26",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Lugar por confirmar",
        address: { "@type": "PostalAddress", addressCountry: "CO" },
      },
      organizer: {
        "@type": "Organization",
        name: "Comunidad The Last INALFU",
      },
      image: absolutePublicAsset("/assets/images/thelast.png"),
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: base,
  title: "The Last INALFU — 20 años después | Encuentro de egresados",
  description:
    "Encuentro de egresados The Last INALFU — 20 años después. Convocatoria, información del evento y grupo oficial de WhatsApp. Si hiciste parte de esa época, este encuentro es para ti.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  icons: { icon: absolutePublicAsset("/assets/images/thelast.png") },
  openGraph: {
    locale: "es_CO",
    type: "website",
    title: "The Last INALFU — 20 años después | Encuentro de egresados",
    description:
      "Encuentro de egresados The Last INALFU — 20 años después. Convocatoria, información del evento y grupo oficial de WhatsApp.",
    url: siteUrl,
    images: [
      {
        url: absolutePublicAsset("/assets/images/thelast.png"),
        width: 1200,
        height: 240,
        alt: "The Last INALFU — 20 años después",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Last INALFU — 20 años después | Encuentro de egresados",
    description:
      "Encuentro de egresados The Last INALFU — 20 años después. Convocatoria, información del evento y grupo oficial de WhatsApp.",
    images: [absolutePublicAsset("/assets/images/thelast.png")],
  },
};

export const viewport: Viewport = {
  themeColor: "#1B7C41",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={playfair.variable}>
      <body className="bg-inalfu-fondo text-inalfu-texto antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <Script
          src={withBasePath("/data/promocion.js")}
          strategy="afterInteractive"
        />
        <Script src={withBasePath("/js/crush.js")} strategy="afterInteractive" />
      </body>
    </html>
  );
}
