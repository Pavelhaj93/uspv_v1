import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { locales } from "@/i18n";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import localFont from "next/font/local";

// Import Segoe UI with multiple weights
const segoeUI = localFont({
  src: [
    { path: "../../public/fonts/bold.ttf", weight: "700", style: "normal" }, // Bold
    {
      path: "../../public/fonts/semibold.ttf",
      weight: "600",
      style: "normal",
    }, // SemiBold
    { path: "../../public/fonts/normal.ttf", weight: "400", style: "normal" }, // Normal
    { path: "../../public/fonts/light.ttf", weight: "300", style: "light" }, // Light
  ],
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={segoeUI.className}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
