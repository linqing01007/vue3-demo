import { Todo } from '@/Types/TodoMVC'
import { ref, watch, watchEffect } from 'vue'

export default function useTodoStorage () {
  const STORAGE_KEY = 'TodoMVC-vue3.0'
  const fetch = (): Todo[] => JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  const save = (todos: Todo[]): void => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
  const uid = ref(~~(localStorage.getItem('uid') || 0))
  watchEffect(() => localStorage.setItem('uid', uid.value.toString()))
  return {
    fetch,
    save,
    uid
  }
}
