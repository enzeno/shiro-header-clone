'use client'

import { Image } from '@/components/next-shims'

import { useAggregationSelector } from '@/providers/root/aggregation-data-provider'

import { UserAuthFromIcon } from './UserAuthFromIcon'

const OwnerAvatar = () => {
  const ownerAvatar = useAggregationSelector((s) => s.user.avatar)!

  return (
    <div className="pointer-events-auto relative flex items-center justify-center">
      <Image
        className="rounded-full"
        height={36}
        width={36}
        src={ownerAvatar}
        alt="site owner"
      />
      <UserAuthFromIcon className="absolute -bottom-1 right-0" />
    </div>
  )
}

export function UserAuth() {
  // For demo purposes, just show the owner avatar
  return <OwnerAvatar />
}
