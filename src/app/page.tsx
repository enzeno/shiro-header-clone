'use client'

import { Header } from '@/components/layout/header/Header'

export default function Home() {
  return (
    <main>
      <Header />
      <div style={{ minHeight: '400vh', padding: '120px 20px 20px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Welcome to Shiro Blog
          </h1>
          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: 1.6,
              marginBottom: '1.5rem',
            }}
          >
            This is a demo of the Shiro header component. Scroll down to see the
            header transform and display the page title.
          </p>
          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: 1.6,
              marginBottom: '1.5rem',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            euismod, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae
            aliquam nisl nunc vitae nisl. Nullam euismod, nisl eget ultricies
            ultrices, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae
            nisl.
          </p>
          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: 1.6,
              marginBottom: '1.5rem',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            euismod, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae
            aliquam nisl nunc vitae nisl. Nullam euismod, nisl eget ultricies
            ultrices, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae
            nisl.
          </p>
        </div>
      </div>
    </main>
  )
}
