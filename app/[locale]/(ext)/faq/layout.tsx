"use client";

import type { ReactNode } from "react";

export default function FaqLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-24">{children}</main>
    </div>
  );
}
