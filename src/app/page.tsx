'use client'

import { useEffect } from 'react'
import { Header } from '@/components/layout/header/Header'
import { useSetHeaderMetaInfo } from '@/components/layout/header/internal/hooks'

// This component is responsible for setting the header meta information
const HeaderMetaInfoSetting = () => {
  const setHeaderMetaInfo = useSetHeaderMetaInfo()
  
  useEffect(() => {
    setHeaderMetaInfo({
      title: 'Shiro Blog',
      description: 'A personal blog and digital garden',
      slug: '/'
    })
  }, [setHeaderMetaInfo])
  
  return null
}

export default function Home() {
  return (
    <main>
      <HeaderMetaInfoSetting />
      <Header />
      <div style={{ minHeight: "400vh", padding: "120px 20px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Welcome to Shiro Blog</h1>
          <p style={{ fontSize: "1.2rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
            This is a demo of the Shiro header component. Scroll down to see the header transform
            and display the page title.
          </p>
          <p style={{ fontSize: "1.2rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget
            ultricies ultrices, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl.
            Nullam euismod, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae aliquam
            nisl nunc vitae nisl.
          </p>
          <p style={{ fontSize: "1.2rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget
            ultricies ultrices, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl.
            Nullam euismod, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae aliquam
            nisl nunc vitae nisl.
          </p>
        </div>
      </div>
    </main>
  )
}
