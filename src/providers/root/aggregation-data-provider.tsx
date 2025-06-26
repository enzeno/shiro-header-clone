'use client'
import React, { createContext, useContext } from 'react'

// Simplified data structures
interface AppConfig {
  module: {
    activity?: {
      enable: boolean
      endpoint: string
    }
    bilibili?: {
      liveId: string
    }
  }
}

interface AggregationData {
  user: {
    name: string
    avatar: string
  }
  seo: {
    title: string
    description: string
  }
}

const defaultAppConfig: AppConfig = {
  module: {
    activity: {
      enable: false,
      endpoint: '/api/activity',
    },
    bilibili: {
      liveId: '',
    },
  },
}

const defaultAggregationData: AggregationData = {
  user: {
    name: 'Shiro',
    avatar: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjNjM2NmYxIi8+Cjx0ZXh0IHg9IjIwIiB5PSIyNiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5TPC90ZXh0Pgo8L3N2Zz4K',
  },
  seo: {
    title: 'Shiro',
    description: 'A personal blog',
  },
}

const AppConfigContext = createContext<AppConfig>(defaultAppConfig)
const AggregationDataContext = createContext<AggregationData>(defaultAggregationData)

export const AggregationDataProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  return (
    <AppConfigContext.Provider value={defaultAppConfig}>
      <AggregationDataContext.Provider value={defaultAggregationData}>
        {children}
      </AggregationDataContext.Provider>
    </AppConfigContext.Provider>
  )
}

export const useAppConfigSelector = <T,>(selector: (config: AppConfig) => T): T => {
  const config = useContext(AppConfigContext)
  return selector(config)
}

export const useAggregationSelector = <T,>(selector: (data: AggregationData) => T): T => {
  const data = useContext(AggregationDataContext)
  return selector(data)
} 