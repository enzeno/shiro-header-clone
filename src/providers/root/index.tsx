'use client'

import { LazyMotion } from 'motion/react'
import type { JSX, PropsWithChildren } from 'react'

import { ProviderComposer } from '@/components/common/ProviderComposer'
import { ReactQueryProvider } from '../query-provider'
import { JotaiStoreProvider } from './jotai-provider'
import { ViewportProvider } from './viewport-provider'
import { PageScrollInfoProvider } from './page-scroll-info-provider'
import { AggregationDataProvider } from './aggregation-data-provider'

const loadFeatures = () =>
  import('./framer-lazy-feature').then((res) => res.default)

const baseContexts: JSX.Element[] = [
  <JotaiStoreProvider key="jotaiStoreProvider" />,
  <LazyMotion features={loadFeatures} strict key="framer" />,
]

const webappContexts: JSX.Element[] = [
  <ReactQueryProvider key="reactQueryProvider" />,
  ...baseContexts,
]

export function WebAppProviders({ children }: PropsWithChildren) {
  return (
    <ProviderComposer contexts={webappContexts}>
      <ViewportProvider>
        <PageScrollInfoProvider>
          <AggregationDataProvider>
            {children}
          </AggregationDataProvider>
        </PageScrollInfoProvider>
      </ViewportProvider>
    </ProviderComposer>
  )
}