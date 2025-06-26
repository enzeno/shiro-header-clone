'use client'

import { useEffect } from 'react'
import { Header } from '@/components/layout/header/Header'
import { useSetHeaderMetaInfo } from '@/components/layout/header/hooks'

export default function Home() {
  const setHeaderMetaInfo = useSetHeaderMetaInfo()

  // Set header meta info for this page
  useEffect(() => {
    setHeaderMetaInfo({
      title: 'Shiro Blog',
      description: 'A personal blog and digital garden',
      slug: '/'
    })
  }, [setHeaderMetaInfo])

  return (
    <main>
      <Header />
      <div style={{ minHeight: "400vh", padding: "120px 20px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "2rem", textAlign: "center" }}>
            🌸 Shiro Header Demo
          </h1>
          <p style={{ color: "#666", marginBottom: "3rem", textAlign: "center", fontSize: "1.2rem" }}>
            Scroll down to see the header transform and show page meta information!
          </p>
          
          <div style={{ marginTop: "3rem", padding: "2rem", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: "12px", color: "white" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "1rem" }}>✨ What you'll see:</h2>
            <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.8", fontSize: "1.1rem" }}>
              <li>🎯 Header background becomes opaque as you scroll</li>
              <li>🌙 Navigation menu gradually fades out</li>
              <li>📋 Page title and description appear in the header</li>
              <li>🎨 Smooth animations and transitions</li>
            </ul>
          </div>

          <div style={{ marginTop: "4rem", padding: "2rem", background: "#f8fafc", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: "600", marginBottom: "1.5rem", color: "#2d3748" }}>🔧 How it works:</h2>
            <ol style={{ paddingLeft: "1.5rem", lineHeight: "1.8", color: "#4a5568", fontSize: "1.1rem" }}>
              <li><strong>Page Meta Setup:</strong> Each page calls <code style={{ background: "#e2e8f0", padding: "2px 6px", borderRadius: "4px" }}>useSetHeaderMetaInfo</code> to set title and description</li>
              <li><strong>Scroll Detection:</strong> The header monitors scroll position using <code style={{ background: "#e2e8f0", padding: "2px 6px", borderRadius: "4px" }}>usePageScrollLocationSelector</code></li>
              <li><strong>Opacity Calculation:</strong> Header background opacity is calculated based on scroll threshold (197px)</li>
              <li><strong>Menu Transition:</strong> Menu opacity is inversely related to header background opacity</li>
              <li><strong>Meta Display:</strong> HeaderMeta component shows when menu is hidden and meta info exists</li>
        </ol>
          </div>

          <div style={{ marginTop: "4rem", padding: "2rem", background: "#fef5e7", borderRadius: "12px", border: "1px solid #f6e05e" }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: "600", marginBottom: "1.5rem", color: "#744210" }}>⚙️ Technical Details:</h2>
            <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.8", color: "#975a16", fontSize: "1.1rem" }}>
              <li><strong>Scroll Threshold:</strong> 197px (84 + 63 + 50)</li>
              <li><strong>Transition Distance:</strong> 50px for smooth fade</li>
              <li><strong>State Management:</strong> Jotai atoms for header meta information</li>
              <li><strong>Animation:</strong> Motion (Framer Motion) for smooth transitions</li>
              <li><strong>Responsive:</strong> Different behavior on mobile vs desktop</li>
            </ul>
          </div>

          <div style={{ marginTop: "4rem", padding: "2rem", background: "#e6fffa", borderRadius: "12px", border: "1px solid #38d9a9" }}>
            <h3 style={{ fontSize: "1.6rem", fontWeight: "500", marginBottom: "1.5rem", color: "#065f46" }}>🧪 Try These Actions:</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
              <div style={{ padding: "1rem", background: "white", borderRadius: "8px", border: "1px solid #a7f3d0" }}>
                <h4 style={{ fontWeight: "600", color: "#047857", marginBottom: "0.5rem" }}>Scroll Down</h4>
                <p style={{ color: "#065f46", fontSize: "0.9rem" }}>Watch the header transform smoothly</p>
              </div>
              <div style={{ padding: "1rem", background: "white", borderRadius: "8px", border: "1px solid #a7f3d0" }}>
                <h4 style={{ fontWeight: "600", color: "#047857", marginBottom: "0.5rem" }}>Scroll Up</h4>
                <p style={{ color: "#065f46", fontSize: "0.9rem" }}>See the menu fade back in</p>
              </div>
              <div style={{ padding: "1rem", background: "white", borderRadius: "8px", border: "1px solid #a7f3d0" }}>
                <h4 style={{ fontWeight: "600", color: "#047857", marginBottom: "0.5rem" }}>Click Menu Items</h4>
                <p style={{ color: "#065f46", fontSize: "0.9rem" }}>Navigate to different demo pages</p>
              </div>
            </div>
          </div>

          {/* Large content sections for scrolling */}
          <div style={{ marginTop: "6rem" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "2rem", textAlign: "center" }}>📚 More Content to Scroll Through</h2>
            
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} style={{ 
                marginTop: "3rem", 
                padding: "2rem", 
                background: i % 2 === 0 ? "#f7fafc" : "#fff", 
                borderRadius: "12px",
                border: "1px solid #e2e8f0"
              }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#2d3748" }}>
                  Section {i}: Lorem Ipsum Content
                </h3>
                <p style={{ lineHeight: "1.8", color: "#4a5568", marginBottom: "1rem" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p style={{ lineHeight: "1.8", color: "#4a5568", marginBottom: "1rem" }}>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p style={{ lineHeight: "1.8", color: "#4a5568" }}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
            ))}
          </div>

          <div style={{ 
            marginTop: "6rem", 
            padding: "3rem", 
            background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)", 
            borderRadius: "12px",
            textAlign: "center"
          }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "1rem", color: "#742a2a" }}>🎉 You've reached the end!</h2>
            <p style={{ fontSize: "1.2rem", color: "#9c4221" }}>Now try clicking on the header menu items to see different pages with their own meta information.</p>
          </div>
        </div>
        </div>
      </main>
  )
}
