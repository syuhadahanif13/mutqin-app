import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mutqin App",
  description: "Modern app built with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
