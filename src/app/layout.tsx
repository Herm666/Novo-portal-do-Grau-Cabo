import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "900"] })

export const metadata: Metadata = {
  title: "Grau Técnico portal",
  description: "Developed By Douglas Rodrigues",
  icons: '/logo.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}

      </body>
    </html>
  );
}
