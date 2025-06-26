'use client'

import { useEffect } from 'react'
import { Header } from '@/components/layout/header/Header'
import { useSetHeaderMetaInfo } from '@/components/layout/header/hooks'

export default function Thinking() {
  const setHeaderMetaInfo = useSetHeaderMetaInfo()

  useEffect(() => {
    setHeaderMetaInfo({
      title: 'Deep Thinking',
      description: 'Philosophical thoughts and reflections',
      slug: '/thinking'
    })
  }, [setHeaderMetaInfo])

  return (
    <main>
      <Header />
      <div style={{ minHeight: "300vh", padding: "120px 20px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem" }}>
            💭 Deep Thinking
          </h1>
          
          <div style={{ marginTop: "2rem", padding: "2rem", background: "#f8fafc", borderRadius: "12px", border: "1px solid #cbd5e1" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#475569" }}>🧠 Philosophical Thoughts</h2>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: "#475569" }}>
              This is where I explore deeper questions about technology, life, and the nature of creativity.
            </p>
            <p style={{ lineHeight: "1.8", color: "#475569" }}>
              The header will display "Deep Thinking" and "Philosophical thoughts and reflections".
            </p>
          </div>

          {/* Thinking posts */}
          {[
            {
              title: "The Art of Slow Programming",
              excerpt: "In our rush to ship features, we often forget the beauty of thoughtful, deliberate code craftsmanship.",
              readTime: "8 min read"
            },
            {
              title: "Digital Minimalism in Development",
              excerpt: "How reducing complexity in our tools and workflows can lead to more meaningful and sustainable work.",
              readTime: "6 min read"
            },
            {
              title: "The Philosophy of Open Source",
              excerpt: "What open source development teaches us about collaboration, generosity, and the nature of knowledge sharing.",
              readTime: "12 min read"
            },
            {
              title: "Code as Poetry",
              excerpt: "Exploring the aesthetic dimensions of programming and how beautiful code can be a form of artistic expression.",
              readTime: "10 min read"
            }
          ].map((post, i) => (
            <article key={i} style={{ 
              marginTop: "3rem", 
              padding: "2rem", 
              background: "#fff", 
              borderRadius: "12px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
            }}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "600", marginBottom: "1rem", color: "#1e293b" }}>
                {post.title}
              </h3>
              <p style={{ lineHeight: "1.8", color: "#64748b", marginBottom: "1rem" }}>
                {post.excerpt}
              </p>
              <div style={{ fontSize: "0.9rem", color: "#94a3b8" }}>
                {post.readTime}
              </div>
            </article>
          ))}

          <div style={{ 
            marginTop: "4rem", 
            padding: "3rem", 
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", 
            borderRadius: "12px",
            textAlign: "center",
            color: "white"
          }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>💡 Thinking Deeper</h3>
            <p style={{ fontSize: "1.1rem", opacity: 0.9 }}>
              Sometimes the most important insights come when we slow down and really think.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 