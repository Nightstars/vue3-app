<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <p>{{num}}</p>
    <button @click="addFun">加1</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import {
    // onBeforeMount,
    // onMounted,
    // onBeforeUpdate,
    // onUpdated,
    // onBeforeUnmount,
    // onUnmounted,
    // onErrorCaptured,
    // onRenderTracked,
    // onRenderTriggered,
    ref,
} from 'vue'

export default {
  name: 'Home',
  // components: {
  //   HelloWorld
  // }
  setup(){
    let num=ref(1);
    // onBeforeMount(()=>{
    //   console.log("onBeforeMount")
    // })
    // onMounted(()=>{
    //   console.log("onMounted")
    // })
    // onBeforeUpdate(()=>{
    //   console.log("onBeforeUpdate")
    // })
    // onUpdated(()=>{
    //   console.log("onUpdated")
    // })
    // onBeforeUnmount(()=>{
    //   console.log("onBeforeUnmount")
    // })
    // onUnmounted(()=>{
    //   console.log("onUnmounted")
    // })
    // onErrorCaptured(err=>{
    //   console.log(err)
    // }) 
    // console.log("setup 执行了")
    // onRenderTracked(obj=>{
    //   console.log(obj)
    // });
    // onRenderTriggered(obj=>{
    //   console.log(obj)
    // });
    let addFun=()=>{
      num.value++;
      console.log(num);
    }
    return {
      num,
      addFun,
    }
  }
}
</script>
