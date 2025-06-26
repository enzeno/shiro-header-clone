'use client'
'use client'

import { PresentSheet } from '@/components/ui/sheet'
import { useIsClient } from '@/hooks/common/use-is-client'
import { MenuIcon } from '@/components/icons/MenuIcon'

import { HeaderActionButton } from './HeaderActionButton'
import { HeaderDrawerContent } from './HeaderDrawerContent'

export const HeaderDrawerButton = () => {
  const isClient = useIsClient()
  const ButtonElement = (
    <HeaderActionButton aria-label="header draw button">
      <MenuIcon />
    </HeaderActionButton>
  )
  if (!isClient) return ButtonElement

  return (
    <PresentSheet content={<HeaderDrawerContent />}>
      {ButtonElement}
    </PresentSheet>
  )
}
