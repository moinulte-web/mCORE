import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "mCORE",
  description: "Intelligent Operating System for Fashion Businesses",
};

/**
 * Root layout.
 * Intentionally minimal — this is project scaffolding, not a feature.
 * Providers (Supabase session, theme, etc.) will be added in a future
 * approved task and composed here.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
