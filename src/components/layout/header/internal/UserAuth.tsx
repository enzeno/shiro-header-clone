'use client'

import { AnimatePresence } from 'motion/react'
import { Fragment } from 'react'

import { Image } from '@/components/next-shims'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useAggregationSelector } from '@/providers/root/aggregation-data-provider'

import { UserAuthFromIcon } from './UserAuthFromIcon'

const OwnerAvatar = () => {
  const ownerAvatar = useAggregationSelector((s) => s.user.avatar)

  return (
    <div className="pointer-events-auto relative flex items-center justify-center">
      <div className="relative size-9 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
        {ownerAvatar ? (
          <Image
            className="size-9 rounded-full object-cover"
            height={36}
            width={36}
            src={ownerAvatar}
            alt="site owner"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        ) : null}
        <div className="absolute inset-0 flex items-center justify-center">
          <i className="i-mingcute-user-3-fill size-5 text-gray-400 dark:text-gray-500" />
        </div>
      </div>
      <UserAuthFromIcon className="absolute -bottom-1 right-0" />
    </div>
  )
}

export function UserAuth() {
  const ownerData = useAggregationSelector((s) => s.user)
  
  return (
    <AnimatePresence>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <OwnerAvatar />
        </DropdownMenuTrigger>

        <DropdownMenuPortal>
          <DropdownMenuContent
            sideOffset={8}
            align="end"
            className="relative flex max-w-[30ch] flex-col"
          >
            <DropdownMenuLabel className="min-w-0">
              <div className="-mt-1 flex min-w-0 items-center gap-2">
                <div className="relative size-8 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                  {ownerData.avatar ? (
                    <img
                      src={ownerData.avatar}
                      className="size-8 rounded-full object-cover"
                      alt={ownerData.name}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  ) : null}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <i className="i-mingcute-user-3-fill size-5 text-gray-400 dark:text-gray-500" />
                  </div>
                </div>
                <div className="min-w-0 max-w-40 leading-none">
                  <div className="truncate font-medium">{ownerData.name}</div>
                  <div className="min-w-0 truncate text-xs text-base-content/60">
                    {ownerData.introduce || 'Site Owner'}
                  </div>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            
            {/* Social Links */}
            {ownerData.socialIds?.github && (
              <DropdownMenuItem
                onClick={() => {
                  window.open(`https://github.com/${ownerData.socialIds.github}`, '_blank')
                }}
                icon={<i className="i-mingcute-github-line size-4" />}
              >
                GitHub
              </DropdownMenuItem>
            )}
            
            {ownerData.socialIds?.google && (
              <DropdownMenuItem
                onClick={() => {
                  window.open(`mailto:${ownerData.socialIds.google}`, '_blank')
                }}
                icon={<i className="i-mingcute-google-line size-4" />}
              >
                Google
              </DropdownMenuItem>
            )}
            
            {ownerData.url && (
              <DropdownMenuItem
                onClick={() => {
                  window.open(ownerData.url, '_blank')
                }}
                icon={<i className="i-mingcute-external-link-line size-4" />}
              >
                Website
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    </AnimatePresence>
  )
}
