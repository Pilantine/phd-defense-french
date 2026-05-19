import { defineAppSetup } from '@slidev/types'
import { useNav } from '@slidev/client'

export default defineAppSetup(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      const { prev } = useNav()
      prev()
    })
  }
})
