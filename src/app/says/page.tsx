'use client'

import { useEffect } from 'react'
import { Header } from '@/components/layout/header/Header'
import { useSetHeaderMetaInfo } from '@/components/layout/header/hooks'

export default function Says() {
  const setHeaderMetaInfo = useSetHeaderMetaInfo()

  useEffect(() => {
    setHeaderMetaInfo({
      title: 'Random Thoughts',
      description: 'Quick thoughts and micro-posts',
      slug: '/says'
    })
  }, [setHeaderMetaInfo])

  return (
    <main>
      <Header />
      <div style={{ minHeight: "300vh", padding: "120px 20px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem" }}>
            💬 Random Thoughts
          </h1>
          
          <div style={{ marginTop: "2rem", padding: "2rem", background: "#fefce8", borderRadius: "12px", border: "1px solid #fde047" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#a16207" }}>✨ Micro-Posts</h2>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: "#a16207" }}>
              Short thoughts, quotes, and random musings that don't warrant a full blog post.
            </p>
            <p style={{ lineHeight: "1.8", color: "#a16207" }}>
              The header displays "Random Thoughts" and "Quick thoughts and micro-posts" on scroll.
            </p>
          </div>

          {/* Says/micro-posts */}
          <div style={{ marginTop: "3rem" }}>
            {[
              {
                text: "Sometimes the best debugging technique is to explain your code to a rubber duck. Today, my cat served as an excellent rubber duck. 🐱",
                time: "2 hours ago",
                mood: "😄"
              },
              {
                text: "The more I learn about web development, the more I appreciate the elegance of simple, well-structured HTML.",
                time: "5 hours ago",
                mood: "🤔"
              },
              {
                text: "Coffee count today: 4. Lines of code written: 127. Bugs fixed: 3. Bugs created: 2. Net progress: +1 bug. 📈",
                time: "8 hours ago",
                mood: "☕"
              },
              {
                text: "Spent an hour perfecting a CSS animation that nobody will probably notice. Totally worth it.",
                time: "1 day ago",
                mood: "✨"
              },
              {
                text: "Reading other people's code is like reading poetry in a foreign language. Sometimes beautiful, often confusing.",
                time: "2 days ago",
                mood: "📚"
              },
              {
                text: "That moment when your code works on the first try and you're not sure if you should be happy or suspicious.",
                time: "3 days ago",
                mood: "🤨"
              },
              {
                text: "Documentation is love. Documentation is life. Write documentation for your future self.",
                time: "4 days ago",
                mood: "📝"
              },
              {
                text: "Naming things is hard. Naming things well is an art form.",
                time: "5 days ago",
                mood: "🎨"
              }
            ].map((say, i) => (
              <div key={i} style={{ 
                marginBottom: "1.5rem", 
                padding: "1.5rem", 
                background: "#fff", 
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                borderLeft: "4px solid #3b82f6",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                position: "relative"
              }}>
                <div style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  fontSize: "1.2rem"
                }}>
                  {say.mood}
                </div>
                
                <p style={{ 
                  lineHeight: "1.7", 
                  color: "#374151", 
                  marginBottom: "0.75rem",
                  paddingRight: "2rem",
                  fontSize: "1.05rem"
                }}>
                  {say.text}
                </p>
                
                <div style={{ fontSize: "0.8rem", color: "#9ca3af" }}>
                  {say.time}
                </div>
              </div>
            ))}
          </div>

          <div style={{ 
            marginTop: "4rem", 
            padding: "3rem", 
            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)", 
            borderRadius: "12px",
            textAlign: "center",
            color: "white"
          }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>💭 Keep Thinking</h3>
            <p style={{ fontSize: "1.1rem", opacity: 0.9 }}>
              Random thoughts happen at random times. That's what makes them interesting!
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 