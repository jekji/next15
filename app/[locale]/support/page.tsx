import type { Metadata } from "next";
import Client from "./client";

export const metadata: Metadata = {
  title: "Support Center",
  description: "Find answers to common questions about our platform.",
};

export default function SupportPage() {
  return (
    <Client />
  );
}
