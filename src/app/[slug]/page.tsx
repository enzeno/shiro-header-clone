'use client'

import { useEffect } from 'react'
import { useSetHeaderMetaInfo } from '@/components/layout/header/hooks'

// This component is responsible for setting the header meta information
// It's extracted to match the pattern in the original repo
const HeaderMetaInfoSetting = ({ title, description, slug }: { title: string, description: string, slug: string }) => {
  const setHeaderMetaInfo = useSetHeaderMetaInfo()
  
  useEffect(() => {
    setHeaderMetaInfo({
      title,
      description,
      slug
    })
  }, [setHeaderMetaInfo, title, description, slug])
  
  return null
}

export default function DynamicPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  // Format the slug for display (replace hyphens with spaces and capitalize)
  const formattedTitle = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <main>
      <HeaderMetaInfoSetting 
        title={formattedTitle}
        description={`Details about ${formattedTitle}`}
        slug={`/${slug}`}
      />
      <div style={{ minHeight: "300vh", padding: "120px 20px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem" }}>
            {formattedTitle}
          </h1>
          
          <div style={{ marginTop: "2rem", padding: "2rem", background: "#f3f4f6", borderRadius: "12px", border: "1px solid #e5e7eb" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Dynamic Page Example</h2>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem" }}>
              This is a dynamic page that demonstrates how the header can incorporate the page title when scrolling.
            </p>
            <p style={{ lineHeight: "1.8" }}>
              As you scroll down, the header will display "{formattedTitle}" and "Details about {formattedTitle}".
            </p>
          </div>

          <div style={{ 
            marginTop: "3rem", 
            padding: "2rem", 
            background: "#fff", 
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
          }}>
            <h3 style={{ fontSize: "1.4rem", fontWeight: "600", marginBottom: "1rem" }}>
              How It Works
            </h3>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem" }}>
              The header has three states:
            </p>
            <ol style={{ listStyleType: "decimal", paddingLeft: "1.5rem", lineHeight: "1.8" }}>
              <li style={{ marginBottom: "0.5rem" }}>Initial state: Transparent header with navigation links</li>
              <li style={{ marginBottom: "0.5rem" }}>Scrolled state: Header with blurred background</li>
              <li>Title state: Header incorporates the page title and description</li>
            </ol>
          </div>

          <div style={{ 
            marginTop: "3rem", 
            padding: "2rem", 
            background: "#fff", 
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
          }}>
            <h3 style={{ fontSize: "1.4rem", fontWeight: "600", marginBottom: "1rem" }}>
              Implementation Details
            </h3>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem" }}>
              The header title transition is implemented using:
            </p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", lineHeight: "1.8" }}>
              <li style={{ marginBottom: "0.5rem" }}>Framer Motion for animations</li>
              <li style={{ marginBottom: "0.5rem" }}>Jotai for state management</li>
              <li style={{ marginBottom: "0.5rem" }}>Scroll position tracking</li>
              <li>Dynamic meta information setting</li>
            </ul>
          </div>

          <div style={{ 
            marginTop: "4rem", 
            padding: "2rem", 
            background: "#eef2ff", 
            borderRadius: "12px",
            textAlign: "center"
          }}>
            <p style={{ fontSize: "1.1rem", color: "#4f46e5" }}>
              Keep scrolling to see the header transformation in action!
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 