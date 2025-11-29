"use client";
import React, { useEffect, PropsWithChildren } from "react";
import { useThemeStore } from "@/store";
import { DirectionProvider as RadixDirectionProvider } from "@radix-ui/react-direction";

interface DirectionProviderProps {
  locale: string;
}

const DirectionProvider = ({
  children,
  locale,
}: PropsWithChildren<DirectionProviderProps>) => {
  const { isRtl } = useThemeStore();

  const direction = locale === "ar" || isRtl ? "rtl" : "ltr";

  return (
    <div dir={direction}>
      <RadixDirectionProvider dir={direction}>
        {children}
      </RadixDirectionProvider>
    </div>
  );
};

export default DirectionProvider;
