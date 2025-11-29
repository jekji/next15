// RootLayout.tsx
import React from "react";
import "../globals.css";
import "simplebar-react/dist/simplebar.min.css";
import Providers from "@/provider/providers";
import DirectionProvider from "@/provider/direction.provider";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: process.env.NEXT_PUBLIC_SITE_NAME || "My App",
    template: `%s - ${process.env.NEXT_PUBLIC_SITE_NAME || "My App"}`,
  },
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "My App Description",
};

async function loadTranslations(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Error loading translations for locale: ${locale}`, error);
    return null;
  }
}

// Type for settings result with fallback flag
type SettingsResult = {
  settings: Record<string, any>;
  extensions: any[];
  _fallback?: boolean;
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout(
  props: RootLayoutProps
): Promise<React.JSX.Element> {
  try {
    const params = await props.params;
    const { children } = props;
    const { locale } = params;

    // Validate locale first
    if (!routing.locales.includes(locale)) {
      console.warn(
        `Invalid locale: ${locale}. Available locales: ${routing.locales.join(", ")}`
      );
      notFound();
    }

    // Load translations with better error handling
    const messages = await loadTranslations(locale);
    if (!messages) {
      console.error(`Failed to load translations for locale: ${locale}`);
      // Provide fallback with empty messages instead of failing
    }

    // Always return a valid layout, even if some data is missing
    return (
      <html lang={locale} suppressHydrationWarning>
        <head>
        </head>
        <body 
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          style={{ "--radius": "0.5rem" } as React.CSSProperties}
          suppressHydrationWarning
        >
          <NextIntlClientProvider locale={locale} messages={messages || {}}>
            <Providers>
              <DirectionProvider locale={locale}>
                  {children}
              </DirectionProvider>
            </Providers>
          </NextIntlClientProvider>
        </body>
      </html>
    );
  } catch (error) {
    // Return a minimal fallback layout that won't cause additional errors
    return (
      <html lang="en" suppressHydrationWarning>
        <body className="min-h-screen bg-background font-sans antialiased">
          <div className="flex h-screen w-full flex-col items-center justify-center space-y-4">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Application Error</h1>
              <p className="text-muted-foreground mt-2">
                Failed to initialize the application. Please try refreshing the
                page.
              </p>
              <p className="text-xs text-muted-foreground mt-4">
                Error:{" "}
                {error instanceof Error ? error.message : "Unknown error"}
              </p>
            </div>
          </div>
        </body>
      </html>
    );
  }
}
