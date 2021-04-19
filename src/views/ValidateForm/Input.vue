<template>
  <input :value="modelValue" @input="updateValue" />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'validateInput',
  props: {
    modelValue: String
  },
  setup (props, context) {
    // const inputRef = reactive({
    //   value: props.modelValue || ''
    // })
    // watch(() => props.modelValue, (newVal) => {
    //   console.log('111111', newVal)
    //   inputRef.value = newVal as string
    // })
    const updateValue = function (e:KeyboardEvent) {
      const targetValue = (e.target as HTMLInputElement).value
      // inputRef.value = targetValue
      context.emit('update:modelValue', targetValue)
    }
    return {
      // inputRef,
      updateValue
    }
  }
})
</script>
