<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <p>{{ count }}</p>
  <router-link to="/mouse">mouse</router-link>
  <router-link to="/todoList">todoList</router-link>
  <router-link to="/validateForm">validateForm</router-link>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
import useCount from './useCount'

export default defineComponent({
  name: 'App',
  components: {
    // HelloWorld
  },
  setup () {
    const { current: count, inc, dec, set, reset } = useCount(2, {
      min: 1,
      max: 15
    })
    const msg = ref('Demo useCount')
    return {
      count,
      inc,
      dec,
      set,
      reset,
      msg
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  margin-right: 10px;
}
</style>
