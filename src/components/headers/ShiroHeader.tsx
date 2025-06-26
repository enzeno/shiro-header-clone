import React from 'react'
import { ErrorBoundary } from '@/components/common/ErrorBoundary'
import { Header } from '@/components/layout/header/Header'
import { PageScrollProvider } from '@/providers/root/page-scroll-info-provider'
import { AggregationDataProvider } from '@/providers/root/aggregation-data-provider'

const ShiroHeader: React.FC = () => {
  return (
    <ErrorBoundary>
      <PageScrollProvider>
        <AggregationDataProvider>
          <Header />
        </AggregationDataProvider>
      </PageScrollProvider>
    </ErrorBoundary>
  )
}

export default ShiroHeader 