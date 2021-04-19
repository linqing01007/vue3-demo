import { ref, Ref, onMounted, onUnmounted } from 'vue'
import { throttle } from './util'
export default function useMousePosition (): {x: Ref<number>, y: Ref<number>} {
  const x = ref(0)
  const y = ref(0)
  const update = throttle((e: MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
  }, 200)
  onMounted(() => {
    window.addEventListener('mousemove', update)
  })
  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })
  return { x, y }
}
