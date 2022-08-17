export function useScrollHandler() {
  const scrolled = ref(false)
  const limit = ref(184)

  const handleScroll = () => (limit.value < window.scrollY) ? scrolled.value = true : scrolled.value = false

  onMounted(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return { scrolled, handleScroll }
}