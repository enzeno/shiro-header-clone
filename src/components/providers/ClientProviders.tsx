'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/request'
import { AggregationDataProvider } from '@/providers/root/aggregation-data-provider'
import { PageScrollInfoProvider } from '@/providers/root/page-scroll-info-provider'
import { ViewportProvider } from '@/providers/root/viewport-provider'
import { Header } from '@/components/layout/header/Header'

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ViewportProvider>
        <AggregationDataProvider>
          <PageScrollInfoProvider>
            <Header />
            <main className="pt-[4.5rem]">
              {children}
            </main>
          </PageScrollInfoProvider>
        </AggregationDataProvider>
      </ViewportProvider>
    </QueryClientProvider>
  )
}