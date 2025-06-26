import type { Metadata } from "next";
import "./globals.css";
import { sansFont, serifFont } from '@/lib/fonts'
import { ViewportProvider } from '@/providers/root/viewport-provider'
import { PageScrollInfoProvider } from '@/providers/root/page-scroll-info-provider'
import { AggregationDataProvider } from '@/providers/root/aggregation-data-provider'
import { ReactQueryProvider } from '@/providers/query-provider'
import { BfcacheOptimizer } from '@/components/common/BfcacheOptimizer'

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
      <body className={`${sansFont.variable} ${serifFont.variable} m-0 h-full p-0 font-sans`}>
        <ReactQueryProvider>
          <ViewportProvider>
            <PageScrollInfoProvider>
              <AggregationDataProvider>
                <BfcacheOptimizer />
        {children}
              </AggregationDataProvider>
            </PageScrollInfoProvider>
          </ViewportProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
