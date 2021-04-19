import { Visibility } from '@/Types/TodoMVC'
import { Ref, onMounted } from 'vue'

export default function useHashChange (filters: any, visibility: Ref<Visibility>) {
  const onHashChange = () => {
    const visibilityHash = window.location.hash.replace(/#\/?/, '') as Visibility
    if (filters[visibilityHash]) {
      visibility.value = visibilityHash
    } else {
      window.location.hash = ''
      visibility.value = 'all'
    }
  }
  window.addEventListener('hashchange', onHashChange)
  onMounted(() => {
    onHashChange()
  })
}
