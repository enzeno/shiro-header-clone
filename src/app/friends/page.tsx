'use client'

import { useEffect } from 'react'
import { Header } from '@/components/layout/header/Header'
import { useSetHeaderMetaInfo } from '@/components/layout/header/hooks'

export default function Friends() {
  const setHeaderMetaInfo = useSetHeaderMetaInfo()

  useEffect(() => {
    setHeaderMetaInfo({
      title: 'Friends & Links',
      description: 'Amazing people and their blogs',
      slug: '/friends'
    })
  }, [setHeaderMetaInfo])

  return (
    <main>
      <Header />
      <div style={{ minHeight: "300vh", padding: "120px 20px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem" }}>
            👥 Friends & Links
          </h1>
          
          <div style={{ marginTop: "2rem", padding: "2rem", background: "#fef2f2", borderRadius: "12px", border: "1px solid #fecaca" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#dc2626" }}>❤️ Amazing People</h2>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: "#dc2626" }}>
              Here are some wonderful people I've met in the developer community and their fantastic blogs.
            </p>
            <p style={{ lineHeight: "1.8", color: "#dc2626" }}>
              The header shows "Friends & Links" and "Amazing people and their blogs" when you scroll.
            </p>
          </div>

          {/* Friend cards */}
          <div style={{ marginTop: "3rem", display: "grid", gap: "2rem" }}>
            {[
              { 
                name: "Alex Chen", 
                site: "alexdev.blog", 
                desc: "Full-stack developer passionate about React and Node.js",
                avatar: "🧑‍💻"
              },
              { 
                name: "Sarah Kim", 
                site: "sarahcodes.dev", 
                desc: "Frontend architect specializing in design systems",
                avatar: "👩‍🎨"
              },
              { 
                name: "Mike Johnson", 
                site: "mikethinks.com", 
                desc: "DevOps engineer and open source contributor",
                avatar: "👨‍🔧"
              },
              { 
                name: "Luna Rodriguez", 
                site: "lunalabs.io", 
                desc: "AI/ML researcher and tech writer",
                avatar: "🧬"
              },
              { 
                name: "David Park", 
                site: "davidcodes.net", 
                desc: "Mobile developer and startup founder",
                avatar: "📱"
              }
            ].map((friend, i) => (
              <div key={i} style={{ 
                padding: "2rem", 
                background: "#fff", 
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "pointer"
              }}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                  <div style={{ fontSize: "3rem", marginRight: "1rem" }}>
                    {friend.avatar}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: "0.25rem", color: "#1f2937" }}>
                      {friend.name}
                    </h3>
                    <div style={{ fontSize: "0.9rem", color: "#3b82f6" }}>
                      {friend.site}
                    </div>
                  </div>
                </div>
                <p style={{ lineHeight: "1.6", color: "#6b7280" }}>
                  {friend.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ 
            marginTop: "4rem", 
            padding: "2rem", 
            background: "#f0f9ff", 
            borderRadius: "12px",
            textAlign: "center"
          }}>
            <p style={{ fontSize: "1.1rem", color: "#0369a1" }}>
              🌐 Want to be featured here? Reach out and let's connect!
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 