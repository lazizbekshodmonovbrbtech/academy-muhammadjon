import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elevate | Learn Skills That Change Your Life",
  description:
    "A premium educational platform blending mentorship, career outcomes, and world-class learning experiences."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-[#fffaf7] text-[#1f1712] antialiased">{children}</body>
    </html>
  );
}
