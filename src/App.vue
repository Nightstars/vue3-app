<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
} from 'vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },

  setup(){
    onBeforeMount(() => {
      console.log("onBeforeMount")
    })

    onMounted(() => {
      console.log("onMounted")
    })

    onBeforeUpdate(() => {
      console.log("onBeforeUpdate")
    })

    onUpdated(() => {
      console.log("onUpdated")
    })

    onBeforeUnmount(() => {
      console.log("onBeforeUnmount")
    })

    onUnmounted(() => {
      console.log("onUnmounted")
    })

    onErrorCaptured(err => {
      console.log(err)
    })

    onRenderTracked(obj => {
      console.log(obj)
    })

    onRenderTriggered(obj => {
      console.log(obj)
    })

    console.log("onSetup")
  }
}
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
</style>
