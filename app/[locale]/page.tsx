"use client";

import { useEffect, useState } from "react";
import DefaultHomePage from "./home";

export default function Home(): React.JSX.Element {
  const [isClient, setIsClient] = useState(false);
  const [isSettingsLoaded, setIsSettingsLoaded] = useState(false);

  // Handle hydration mismatch by only rendering conditional content on the client
  useEffect(() => {
    setIsClient(true);
    // Give a small delay to ensure settings are hydrated
    const timer = setTimeout(() => {
      setIsSettingsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Show loading state until settings are loaded
  if (!isClient || !isSettingsLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <main>
      <DefaultHomePage />
    </main>
  );
}
