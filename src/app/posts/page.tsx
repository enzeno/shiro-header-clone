'use client'

import { useEffect } from 'react'
import { useSetHeaderMetaInfo } from '@/components/layout/header/hooks'

// This component is responsible for setting the header meta information
// It's extracted to match the pattern in the original repo
const HeaderMetaInfoSetting = () => {
  const setHeaderMetaInfo = useSetHeaderMetaInfo()
  
  useEffect(() => {
    setHeaderMetaInfo({
      title: 'Posts & Articles',
      description: 'Technical writing and thoughts',
      slug: '/posts'
    })
  }, [setHeaderMetaInfo])
  
  return null
}

export default function Posts() {
  return (
    <main>
      <HeaderMetaInfoSetting />
      <div style={{ minHeight: "300vh", padding: "120px 20px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem" }}>
            📝 Posts & Articles
          </h1>
          
          <div style={{ marginTop: "2rem", padding: "2rem", background: "#fef5e7", borderRadius: "12px" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>📚 Welcome to my blog</h2>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem" }}>
              Here you'll find my technical writing, tutorials, and thoughts on web development, programming, and technology.
            </p>
            <p style={{ lineHeight: "1.8" }}>
              As you scroll, notice how the header displays "Posts & Articles" and "Technical writing and thoughts".
            </p>
          </div>

          {/* Mock post previews */}
          {[
            { title: "Building Modern React Applications", desc: "A comprehensive guide to React best practices" },
            { title: "Understanding JavaScript Closures", desc: "Deep dive into one of JS's most important concepts" },
            { title: "CSS Grid vs Flexbox", desc: "When to use each layout method" },
            { title: "TypeScript for Beginners", desc: "Getting started with type-safe JavaScript" }
          ].map((post, i) => (
            <article key={i} style={{ 
              marginTop: "3rem", 
              padding: "2rem", 
              background: "#fff", 
              borderRadius: "12px",
              border: "1px solid #e2e8f0",
              cursor: "pointer",
              transition: "transform 0.2s",
            }}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "600", marginBottom: "1rem", color: "#2d3748" }}>
                {post.title}
              </h3>
              <p style={{ lineHeight: "1.8", color: "#4a5568", marginBottom: "1rem" }}>
                {post.desc}
              </p>
              <div style={{ fontSize: "0.9rem", color: "#9ca3af" }}>
                Published on {new Date().toLocaleDateString()} • 5 min read
              </div>
            </article>
          ))}

          <div style={{ 
            marginTop: "4rem", 
            padding: "2rem", 
            background: "#e6fffa", 
            borderRadius: "12px",
            textAlign: "center"
          }}>
            <p style={{ fontSize: "1.1rem", color: "#065f46" }}>
              Keep scrolling to see more posts and experience the header transformation!
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 