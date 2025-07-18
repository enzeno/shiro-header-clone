import { atom } from 'jotai'

export const viewportAtom = atom({
  /**
   * 640px
   */
  sm: false,

  /**
   * 768px
   */
  md: false,

  /**
   * 1024px
   */
  lg: false,

  /**
   * 1280px
   */
  xl: false,

  /**
   * 1536px
   */
  '2xl': false,

  /**
   * Mobile viewport (< 1024px)
   */
  mobile: true,

  h: 0,
  w: 0,
}) 