'use client'

import { useEffect } from 'react'
import { Header } from '@/components/layout/header/Header'
import { useSetHeaderMetaInfo } from '@/components/layout/header/hooks'

export default function Notes() {
  const setHeaderMetaInfo = useSetHeaderMetaInfo()

  useEffect(() => {
    setHeaderMetaInfo({
      title: 'Personal Notes',
      description: 'Quick thoughts and daily reflections',
      slug: '/notes'
    })
  }, [setHeaderMetaInfo])

  return (
    <main>
      <Header />
      <div style={{ minHeight: "300vh", padding: "120px 20px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem" }}>
            ✏️ Personal Notes
          </h1>
          
          <div style={{ marginTop: "2rem", padding: "2rem", background: "#f0fdf4", borderRadius: "12px", border: "1px solid #bbf7d0" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#166534" }}>🌱 Digital Garden</h2>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: "#166534" }}>
              This is my personal note-taking space where I jot down quick thoughts, daily reflections, and work-in-progress ideas.
            </p>
            <p style={{ lineHeight: "1.8", color: "#166534" }}>
              The header will show "Personal Notes" and "Quick thoughts and daily reflections" as you scroll.
            </p>
          </div>

          {/* Mock notes */}
          {[
            { date: "Today", content: "Discovered an interesting pattern in React state management. Need to explore this further..." },
            { date: "Yesterday", content: "Working on improving the header scroll behavior. The transition feels much smoother now." },
            { date: "2 days ago", content: "Reading about Jotai's approach to atomic state management. Really elegant solution!" },
            { date: "3 days ago", content: "CSS has come such a long way. Container queries are going to change everything." },
            { date: "4 days ago", content: "Sometimes the simplest solutions are the best. Spent hours overengineering something trivial." }
          ].map((note, i) => (
            <div key={i} style={{ 
              marginTop: "2rem", 
              padding: "1.5rem", 
              background: "#fff", 
              borderRadius: "8px",
              borderLeft: "4px solid #22d3ee",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
            }}>
              <div style={{ fontSize: "0.8rem", color: "#9ca3af", marginBottom: "0.5rem" }}>
                {note.date}
              </div>
              <p style={{ lineHeight: "1.7", color: "#374151" }}>
                {note.content}
              </p>
            </div>
          ))}

          <div style={{ 
            marginTop: "4rem", 
            padding: "2rem", 
            background: "#fef3c7", 
            borderRadius: "12px",
            textAlign: "center"
          }}>
            <p style={{ fontSize: "1.1rem", color: "#92400e" }}>
              💭 More thoughts and notes as I continue my learning journey...
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 