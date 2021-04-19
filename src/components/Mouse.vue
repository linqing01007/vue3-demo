<template>
  <header>
    <h1>获取鼠标当前位置--composition API</h1>
  </header>
  <main>
    <span>
      (<span>
        <transition name="text" mode="out-in">
          <div class="position" :key="x">{{ x }}</div>
        </transition>
        <span>,</span>
        <transition name="text" mode="out-in">
          <div class="position" :key="y">{{ y }}</div>
        </transition>
      </span>)
    </span>
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import useMousePosition from '../useMousePosition'
export default defineComponent({
  setup () {
    const { x, y } = useMousePosition()
    return { x, y }
  }
})
</script>
<style scoped>
.position {
  display: inline-block;
}
</style>
