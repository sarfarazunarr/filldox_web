import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "FillDox - Streamline Your Document Workflow",
  description: "The smart way to manage and fill Word templates. Automate your document creation with FillDox.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={clsx(inter.variable, "font-sans bg-background text-foreground antialiased")}>
        {children}
      </body>
    </html>
  );
}
