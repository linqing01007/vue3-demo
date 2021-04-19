import { Todo, Visibility } from '@/Types/TodoMVC'
import useTodoStorage from './useTodoStorage'
import { ref, watchEffect } from 'vue'
export default function useTodoState () {
  const { fetch, save, uid } = useTodoStorage()
  const todos = ref(fetch())
  const newTodo = ref('')
  const addTodo = function (todo: Todo) {
    const value = newTodo.value && newTodo.value.trim()
    if (!value) return
    todos.value.push({
      id: uid.value,
      title: value,
      completed: false
    })
    uid.value += 1
    newTodo.value = ''
  }
  const removeTodo: (todo: Todo) => boolean = function (todo: Todo): boolean {
    if (todos.value.includes(todo)) {
      todos.value.splice(todos.value.indexOf(todo), 1)
      return true
    } else {
      return false
    }
  }
  watchEffect(() => save(todos.value))
  const visibility = ref<Visibility>('all')
  return {
    todos,
    newTodo,
    addTodo,
    removeTodo,
    visibility
  }
}
