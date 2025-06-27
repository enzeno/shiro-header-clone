'use client'
import React from 'react'
import { ErrorBoundary } from '@/components/common/ErrorBoundary'
import { Header } from '@/components/layout/header/Header'
import { PageScrollInfoProvider } from '@/providers/root/page-scroll-info-provider'
import { AggregationDataProvider } from '@/providers/root/aggregation-data-provider'
import { ReactQueryProvider } from '@/providers/query-provider'

const ShiroHeader: React.FC = () => {
  return (
    <ErrorBoundary>
      <ReactQueryProvider>
        <PageScrollInfoProvider>
          <AggregationDataProvider>
            <Header />
          </AggregationDataProvider>
        </PageScrollInfoProvider>
      </ReactQueryProvider>
    </ErrorBoundary>
  )
}

export default ShiroHeader 