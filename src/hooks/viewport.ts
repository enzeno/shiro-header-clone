import { useAtomValue } from 'jotai'
import { viewportAtom } from '@/atoms/viewport'
 
export const useViewport = () => useAtomValue(viewportAtom)
export const useIsMobile = () => useAtomValue(viewportAtom).mobile
export const useIsDesktop = () => !useAtomValue(viewportAtom).mobile 