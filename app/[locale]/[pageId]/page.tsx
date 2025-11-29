"use client";

import { useParams } from "next/navigation";

export default function Page() {
  const { pageId } = useParams();
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading Page {pageId}</p>
        </div>
      </div>
    </>
  );
}
