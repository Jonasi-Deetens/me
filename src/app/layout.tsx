"use client";

import { TRPCProvider } from "@/utils/trpcProvider";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import ClientThemeProvider from "./providers/ClientThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <TRPCProvider>
            <ClientThemeProvider>{children}</ClientThemeProvider>
          </TRPCProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
