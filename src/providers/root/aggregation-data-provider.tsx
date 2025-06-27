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
    introduce?: string
    url?: string
    socialIds?: {
      github?: string
      google?: string
    }
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
    name: '静かな森',
    avatar: '', // No avatar - will show clean user icon fallback
    introduce: 'A Node.JS Full Stack Developer',
    url: 'https://shiro.com',
    socialIds: {
      github: 'innei',
      google: 'innei@shiro.com',
    },
  },
  seo: {
    title: 'Shiro',
    description: 'A personal blog',
  },
}

// Create contexts with default values
const AppConfigContext = createContext<AppConfig>(defaultAppConfig)
const AggregationDataContext = createContext<AggregationData>(defaultAggregationData)

// Provider component
export const AggregationDataProvider = ({ 
  children 
}: { 
  children: React.ReactNode 
}) => {
  return (
    <AppConfigContext.Provider value={defaultAppConfig}>
      <AggregationDataContext.Provider value={defaultAggregationData}>
        {children}
      </AggregationDataContext.Provider>
    </AppConfigContext.Provider>
  )
}

// Selector hooks
export const useAppConfigSelector = <T,>(selector: (config: AppConfig) => T): T => {
  const config = useContext(AppConfigContext)
  return selector(config)
}

export const useAggregationSelector = <T,>(selector: (data: AggregationData) => T): T => {
  const data = useContext(AggregationDataContext)
  return selector(data)
} 