<template>
  <div class="form">
    <validate-input v-model="msg"></validate-input>
    <p>{{ msg }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import validateInput from './Input.vue'
export default defineComponent({
  name: 'validateForm',
  components: {
    validateInput
  },
  data () {
    return {
      msg: ''
    }
  }
})
</script>
