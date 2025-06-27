'use client'

import { useEffect } from 'react'
import { useSetHeaderMetaInfo } from '@/components/layout/header/hooks'

export default function About() {
  const setHeaderMetaInfo = useSetHeaderMetaInfo()
  
  useEffect(() => {
    setHeaderMetaInfo({
      title: 'About Me',
      description: 'Personal • Introduction',
      slug: '/about'
    })
  }, [setHeaderMetaInfo])
  
  return (
    <div className="min-h-[300vh] px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">About Me</h1>
        <p className="mb-4 text-lg">
          Scroll down to see the header title animation.
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        {/* Make page scrollable */}
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i} className="mb-4">
            More content to enable scrolling...
          </p>
        ))}
      </div>
    </div>
  )
} 