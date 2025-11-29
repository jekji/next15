"use client";

import { useState, useEffect, useMemo } from "react";
import {
  ArrowUpRight,
  ChevronRight,
  LineChart,
  Shield,
  Zap,
  BarChart3,
  Globe,
  ArrowRight,
  ArrowDownRight,
  TrendingUp,
  Users,
  Award,
  Star,
  CheckCircle,
  Sparkles,
  Target,
  DollarSign,
  HelpCircle,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { getCryptoImageUrl } from "@/utils/image-fallback";

// Type definition for page content
interface PageContent {
  id: string;
  pageId: string;
  pageSource: string;
  type: string;
  title: string;
  variables: Record<string, any>;
  content: string;
  meta: string;
  status: string;
  lastModified: string;
}

// Helper function to get text from database variables only (no translation fallback)
const getContent = (pageContent: PageContent | null, path: string, defaultValue: string = "") => {
  if (!pageContent?.variables) return defaultValue;
  
  const pathParts = path.split('.');
  let value = pageContent.variables;
  
  for (const part of pathParts) {
    if (value && typeof value === 'object' && part in value) {
      value = value[part];
    } else {
      return defaultValue;
    }
  }
  
  // Return the direct value or default, ensuring it's always a string
  const result = value || defaultValue;
  return result != null ? String(result) : defaultValue;
};

export default function DefaultHomePage() {
  const t = useTranslations("home");
  const [isSpotEnabled, setIsSpotEnabled] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pageContent, setPageContent] = useState<PageContent | null>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div className="w-full bg-background text-foreground overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20 dark:from-blue-500/30 dark:via-purple-500/30 dark:to-indigo-500/30" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-2000" />
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
          <div className={cn(
            "flex flex-col lg:flex-row items-center gap-8 lg:gap-12",
            isSpotEnabled ? "justify-between" : "justify-center"
          )}>
            {/* Left Content */}
            <div className={cn(
              "text-center",
              isSpotEnabled ? "lg:w-3/5 lg:text-left" : "lg:text-center max-w-4xl"
            )}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-950/50 dark:to-purple-950/50 border border-blue-200 dark:border-blue-800/50 rounded-full px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 mb-6 md:mb-8"
              >
                <Sparkles className="w-4 h-4" />
                {getContent(pageContent, "hero.badge", "#1 Crypto Trading Platform")}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight"
              >
                <div className="-mb-1 md:-mb-2">
                  {getContent(pageContent, "hero.title", "Trade Crypto")}
                </div>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  {getContent(pageContent, "hero.subtitle", "Like a Pro")}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className={cn(
                  "text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0",
                  isDark ? "text-zinc-300" : "text-gray-600"
                )}
              >
                {getContent(pageContent, "hero.description", "Advanced trading tools with lightning-fast execution")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className={cn(
                  "flex flex-col sm:flex-row gap-4 mb-8 md:mb-12",
                  isSpotEnabled ? "justify-center lg:justify-start" : "justify-center"
                )}
              >
                <Link
                  href={isSpotEnabled ? "/market" : "/register"}
                  className="group relative inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl md:rounded-2xl font-semibold transition-all duration-300 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 w-fit mx-auto sm:mx-0"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSpotEnabled ? "Start Trading" : getContent(pageContent, "hero.cta", "Start Trading Free")}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className={cn(
                  "flex flex-wrap gap-4 md:gap-6",
                  isSpotEnabled ? "justify-center lg:justify-start" : "justify-center"
                )}
              >
                {(pageContent?.variables?.hero?.features || ["Secure Trading", "Real-time Data", "24/7 Support"]).map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span
                    className={cn(isDark ? "text-zinc-300" : "text-gray-700")}
                  >
                      {feature}
                  </span>
                </div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
