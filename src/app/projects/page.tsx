'use client'

import { useEffect } from 'react'
import { Header } from '@/components/layout/header/Header'
import { useSetHeaderMetaInfo } from '@/components/layout/header/hooks'

export default function Projects() {
  const setHeaderMetaInfo = useSetHeaderMetaInfo()

  useEffect(() => {
    setHeaderMetaInfo({
      title: 'Projects & Work',
      description: 'Things I have built and created',
      slug: '/projects'
    })
  }, [setHeaderMetaInfo])

  return (
    <main>
      <Header />
      <div style={{ minHeight: "300vh", padding: "120px 20px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem" }}>
            🚀 Projects & Work
          </h1>
          
          <div style={{ marginTop: "2rem", padding: "2rem", background: "#f0fdf4", borderRadius: "12px", border: "1px solid #bbf7d0" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#166534" }}>⚡ What I've Built</h2>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: "#166534" }}>
              A showcase of my development projects, experiments, and creative work.
            </p>
            <p style={{ lineHeight: "1.8", color: "#166534" }}>
              The header shows "Projects & Work" and "Things I have built and created" when scrolling.
            </p>
          </div>

          {/* Project cards */}
          <div style={{ marginTop: "3rem", display: "grid", gap: "2.5rem" }}>
            {[
              {
                title: "Shiro Header Clone",
                description: "A 1:1 recreation of the beautiful Shiro blog header component with scroll transformations.",
                tech: ["Next.js", "TypeScript", "Motion", "Jotai"],
                status: "Active",
                color: "#3b82f6"
              },
              {
                title: "React State Manager",
                description: "A lightweight, type-safe state management library for React applications.",
                tech: ["React", "TypeScript", "Vite"],
                status: "Complete",
                color: "#10b981"
              },
              {
                title: "Design System Components",
                description: "A comprehensive component library with consistent design patterns and accessibility.",
                tech: ["React", "Storybook", "CSS-in-JS"],
                status: "In Progress",
                color: "#f59e0b"
              },
              {
                title: "Developer Blog Template",
                description: "A modern, fast blog template optimized for technical writing and code snippets.",
                tech: ["Astro", "MDX", "Tailwind CSS"],
                status: "Planning",
                color: "#8b5cf6"
              }
            ].map((project, i) => (
              <div key={i} style={{ 
                padding: "2rem", 
                background: "#fff", 
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                position: "relative",
                overflow: "hidden"
              }}>
                {/* Status indicator */}
                <div style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  padding: "0.25rem 0.75rem",
                  fontSize: "0.75rem",
                  fontWeight: "500",
                  color: project.color,
                  background: `${project.color}20`,
                  borderRadius: "999px",
                  border: `1px solid ${project.color}40`
                }}>
                  {project.status}
                </div>

                <h3 style={{ fontSize: "1.4rem", fontWeight: "600", marginBottom: "1rem", color: "#1f2937", paddingRight: "6rem" }}>
                  {project.title}
                </h3>
                <p style={{ lineHeight: "1.7", color: "#4b5563", marginBottom: "1.5rem" }}>
                  {project.description}
                </p>
                
                {/* Tech stack */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {project.tech.map((tech, j) => (
                    <span key={j} style={{
                      padding: "0.25rem 0.5rem",
                      fontSize: "0.75rem",
                      background: "#f3f4f6",
                      color: "#374151",
                      borderRadius: "4px",
                      fontWeight: "500"
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ 
            marginTop: "4rem", 
            padding: "3rem", 
            background: "linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)", 
            borderRadius: "12px",
            textAlign: "center",
            color: "white"
          }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>🔥 Always Building</h3>
            <p style={{ fontSize: "1.1rem", opacity: 0.9 }}>
              Check back regularly to see what new projects I'm working on!
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 