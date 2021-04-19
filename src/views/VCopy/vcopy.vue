<template>
  <div class="copy">
    <button v-copy="copyText">复制</button>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'copy',
  setup () {
    const copyText = ref('test')
    return {
      copyText
    }
  }
})
</script>
