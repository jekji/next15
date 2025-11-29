import type { ReactNode } from "react";

export default function SupportLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <main className="mx-auto pt-14 md:pt-18">{children}</main>
    </div>
  );
}
