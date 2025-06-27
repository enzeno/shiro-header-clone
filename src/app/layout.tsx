import type { Metadata } from "next";
import "./globals.css";
import { sansFont, serifFont } from '@/lib/fonts'
import { BfcacheOptimizer } from '@/components/common/BfcacheOptimizer'
import ShiroHeader from '@/components/headers/ShiroHeader'
import { AccentColorStyleInjector } from '@/components/modules/shared/AccentColorStyleInjector'
import { WebAppProviders } from '@/providers/root'

export const metadata: Metadata = {
  title: "Shiro Header NextJS",
  description: "1:1 clone of Shiro header in NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${sansFont.variable} ${serifFont.variable} ${sansFont.className} m-0 h-full p-0 font-sans`}>
        <WebAppProviders>
          <AccentColorStyleInjector />
          <BfcacheOptimizer />
          <ShiroHeader />
          {children}
        </WebAppProviders>
      </body>
    </html>
  );
}
