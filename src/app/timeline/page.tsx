'use client'

import { useEffect } from 'react'
import { Header } from '@/components/layout/header/Header'
import { useSetHeaderMetaInfo } from '@/components/layout/header/hooks'

export default function Timeline() {
  const setHeaderMetaInfo = useSetHeaderMetaInfo()

  useEffect(() => {
    setHeaderMetaInfo({
      title: 'Timeline & History',
      description: 'Chronological view of posts and notes',
      slug: '/timeline'
    })
  }, [setHeaderMetaInfo])

  return (
    <main>
      <Header />
      <div style={{ minHeight: "300vh", padding: "120px 20px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem" }}>
            ⏰ Timeline & History
          </h1>
          
          <div style={{ marginTop: "2rem", padding: "2rem", background: "#fdf4ff", borderRadius: "12px", border: "1px solid #e9d5ff" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#7c3aed" }}>📅 Journey Through Time</h2>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: "#7c3aed" }}>
              A chronological view of all my posts, notes, and memories arranged by time.
            </p>
            <p style={{ lineHeight: "1.8", color: "#7c3aed" }}>
              Watch the header display "Timeline & History" and "Chronological view of posts and notes".
            </p>
          </div>

          {/* Timeline entries */}
          <div style={{ marginTop: "3rem", position: "relative", paddingLeft: "2rem" }}>
            {/* Timeline line */}
            <div style={{ 
              position: "absolute", 
              left: "0.75rem", 
              top: "0", 
              bottom: "0", 
              width: "2px", 
              background: "linear-gradient(to bottom, #3b82f6, #8b5cf6, #ec4899)"
            }} />
            
            {[
              { date: "2024-01-15", type: "post", title: "React Best Practices", content: "Published a comprehensive guide on React development" },
              { date: "2024-01-12", type: "note", title: "Quick Thought", content: "Interesting observation about CSS Grid behavior" },
              { date: "2024-01-10", type: "post", title: "TypeScript Guide", content: "Deep dive into advanced TypeScript patterns" },
              { date: "2024-01-08", type: "memory", title: "Learning Milestone", content: "Completed the advanced React course" },
              { date: "2024-01-05", type: "note", title: "Daily Reflection", content: "Thoughts on modern web development trends" }
            ].map((entry, i) => (
              <div key={i} style={{ 
                marginBottom: "2rem", 
                position: "relative",
                background: "#fff",
                borderRadius: "8px",
                padding: "1.5rem",
                border: "1px solid #e5e7eb",
                marginLeft: "1rem"
              }}>
                {/* Timeline dot */}
                <div style={{
                  position: "absolute",
                  left: "-2.25rem",
                  top: "1.5rem",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: entry.type === 'post' ? '#3b82f6' : entry.type === 'note' ? '#8b5cf6' : '#ec4899',
                  border: "2px solid white"
                }} />
                
                <div style={{ fontSize: "0.8rem", color: "#9ca3af", marginBottom: "0.5rem" }}>
                  {entry.date} • {entry.type}
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "0.5rem", color: "#1f2937" }}>
                  {entry.title}
                </h3>
                <p style={{ lineHeight: "1.6", color: "#4b5563" }}>
                  {entry.content}
                </p>
              </div>
            ))}
          </div>

          <div style={{ 
            marginTop: "4rem", 
            padding: "2rem", 
            background: "#ecfdf5", 
            borderRadius: "12px",
            textAlign: "center"
          }}>
            <p style={{ fontSize: "1.1rem", color: "#047857" }}>
              🔍 Scroll through the timeline and watch the header adapt to the page context!
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 