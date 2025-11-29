"use client";

// Providers.tsx
import { useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { useThemeStore } from "@/store";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface ProvidersProps {
  children: React.ReactNode;
}

// Font and radius utilities hook
export const useFontClasses = () => {
  const { radius } = useThemeStore();
  
  return {
    className: `${geistSans.variable} ${geistMono.variable} antialiased`,
    style: { "--radius": `${radius}rem` } as React.CSSProperties
  };
};

const Providers = ({
  children,
}: ProvidersProps) => {
  return (
      <ThemeProvider
        attribute="class"
        enableSystem={true}
        defaultTheme="system"
        disableTransitionOnChange={false}
      >
        <div className={cn("h-full")}>{children}</div>
        <Toaster />
    </ThemeProvider>
  );
};

export default Providers;
