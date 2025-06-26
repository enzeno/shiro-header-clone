'use client'

import { useEffect } from 'react'
import { Header } from '@/components/layout/header/Header'
import { useSetHeaderMetaInfo } from '@/components/layout/header/hooks'

export default function About() {
  const setHeaderMetaInfo = useSetHeaderMetaInfo()

  useEffect(() => {
    setHeaderMetaInfo({
      title: 'About Me',
      description: 'Personal introduction and background',
      slug: '/about'
    })
  }, [setHeaderMetaInfo])

  return (
    <main>
      <Header />
      <div style={{ minHeight: "300vh", padding: "120px 20px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem" }}>
            🧑‍💻 About Me
          </h1>
          
          <div style={{ marginTop: "2rem", padding: "2rem", background: "#f8fafc", borderRadius: "12px" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>👋 Hello!</h2>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem" }}>
              Welcome to my personal blog and digital garden. I'm a developer passionate about creating beautiful and functional web experiences.
            </p>
            <p style={{ lineHeight: "1.8" }}>
              This header demo shows how the Shiro header component transforms as you scroll, displaying contextual page information.
            </p>
          </div>

          {/* Add scrollable content */}
          {[1, 2, 3, 4].map(i => (
            <div key={i} style={{ 
              marginTop: "3rem", 
              padding: "2rem", 
              background: "#fff", 
              borderRadius: "12px",
              border: "1px solid #e2e8f0"
            }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: "1rem" }}>
                Section {i}
              </h3>
              <p style={{ lineHeight: "1.8", color: "#4a5568" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scroll to see the header show "About Me" in the meta area.
                The description will show "Personal introduction and background" and the slug "/about".
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 