import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Velocity UI",
  description: "Landing page interativa de alta performance em Next.js"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT">
      <body>{children}</body>
    </html>
  );
}
