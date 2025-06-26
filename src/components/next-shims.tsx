import NextImage from 'next/image'
import NextLink from 'next/link'
import React from 'react'

// Shim for Next.js Link component
const Link = ({ href, children, ...rest }: { href: string; children: React.ReactNode; [key: string]: any }) => {
  if (href.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    )
  }
  
  return (
    <NextLink href={href} {...rest}>
      {children}
    </NextLink>
  )
}

// Shim for Next.js Image component
const Image = ({
  src,
  alt,
  width,
  height,
  ...rest
}: {
  src: string
  alt: string
  width?: number
  height?: number
  [key: string]: any
}) => {
  return <NextImage src={src} alt={alt} width={width || 100} height={height || 100} {...rest} />
}

export { Link as default, Image } 