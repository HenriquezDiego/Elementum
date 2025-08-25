import { onMounted, onUnmounted } from 'vue'

export function useBodyScroll() {
  let scrollY = 0

  const lockScroll = () => {
    scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'
    document.body.classList.add('modal-open')
  }

  const unlockScroll = () => {
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''
    document.body.classList.remove('modal-open')
    window.scrollTo(0, scrollY)
  }

  return {
    lockScroll,
    unlockScroll
  }
}
