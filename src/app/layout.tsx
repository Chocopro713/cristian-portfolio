import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Script from "next/script";
import { getLocale } from "@/i18n/actions";
import "./globals.css";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cristian Barbosa | Diseño y Desarrollo Web para tu Negocio",
  description: "Diseño y desarrollo sitios web a la medida para negocios de todo tipo: páginas corporativas, tiendas en línea y landing pages rápidas, seguras y responsive.",
  keywords: ["Diseño Web", "Desarrollo Web", "Páginas Web para Negocios", "Tiendas en Línea", "Sitios Web Responsive", "Desarrollador Web", "Colombia"],
  authors: [{ name: "Cristian Barbosa" }],
  creator: "Cristian Barbosa",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://cbarbosa.org",
    siteName: "Cristian Barbosa | Diseño y Desarrollo Web",
    title: "Cristian Barbosa | Diseño y Desarrollo Web para tu Negocio",
    description: "Diseño y desarrollo sitios web a la medida para negocios de todo tipo: rápidos, modernos y pensados para convertir visitantes en clientes.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cristian Barbosa - Diseño y Desarrollo Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristian Barbosa | Diseño y Desarrollo Web para tu Negocio",
    description: "Diseño y desarrollo sitios web a la medida para negocios de todo tipo: rápidos, modernos y pensados para convertir visitantes en clientes.",
    images: ["/og-image.png"],
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
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Google Analytics */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f172a] text-slate-200`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
