'use client'
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export const RootPortal: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null)

  useEffect(() => {
    let root = document.getElementById('portal-root')
    if (!root) {
      root = document.createElement('div')
      root.id = 'portal-root'
      document.body.appendChild(root)
    }
    setPortalRoot(root)

    return () => {
      if (root?.parentElement && root.childNodes.length === 0) {
        root.parentElement.removeChild(root)
      }
    }
  }, [])

  return portalRoot ? createPortal(children, portalRoot) : null
} 