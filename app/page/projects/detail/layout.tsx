import "../../../globals.css";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Preformance Builders",
  description: "Quality commercial construction. Honest service. Great value.",
};


export default function projectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <Suspense>
          <main>{children}</main>
        </Suspense>
  );
}
