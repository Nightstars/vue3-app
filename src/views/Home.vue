<template>
<!--  <div class="home">-->
<!--&lt;!&ndash;    <img alt="Vue logo" src="../assets/logo.png">&ndash;&gt;-->
<!--&lt;!&ndash;    <HelloWorld msg="Welcome to Your Vue.js App"/>&ndash;&gt;-->
<!--    <p>{{num}}</p>-->
<!--    <button @click="addFun">加1</button>-->
<!--    <p>{{info.name}}</p>-->
<!--    <p>{{info.age}}</p>-->
<!--    <button @click="addAge">长大一岁</button>-->
<!--  </div>-->
  <el-container>
    <el-header class="top-box">
      <el-row :gutter="24">
        <el-col :span="18" class="logo-box">
          <img class="logo" src="../assets/logo.png" alt="">
        </el-col>
        <el-col :span="6" class="info-box">
          <span>christ</span>
          <el-button type="danger" class="margin-left" size="mini" round>退出</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px" class="left-box">
        <el-menu
            router="true"
            class="el-menu-vertical-demo">
          <el-menu-item class="menu-item" :route="i.path" v-for="i in tabList" :key="i.name" :index="i.name">
            <i class="el-icon-menu"></i>
            <template #title>{{i.meta.title}}</template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// import {
    // onBeforeMount,
    // onMounted,
    // onBeforeUpdate,
    // onUpdated,
    // onBeforeUnmount,
    // onUnmounted,
    // onErrorCaptured,
    // onRenderTracked,
    // onRenderTriggered,
//     ref,
//     reactive
// } from 'vue'
// import axios from 'axios'
// import {getData} from '../http/api'
// import {reactive} from 'vue'
import router from "../router";
export default {
  name: 'Home',
  // components: {
  //   HelloWorld
  // }
  setup(){
    // let num=ref(1);
    // let info=reactive({
    //   name: 'chrsit',
    //   age: 18,
    //   id: 1
    // });
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
    // let addFun=()=>{
    //   num.value++;
    //   console.log(num);
    // };
    //
    // let addAge=()=>{
    //   info.age++;
    // };

    // axios.get('http://jsonplaceholder.typicode.com/posts').then(res=>{
    //   console.log(res);
    // })

    // getData.then(res=>{
    //   console.log(res);
    // })
    //
    // return {
    //   num,
    //   info,
    //   addFun,
    //   addAge
    // }
    let tabList=router.options.routes.filter(v=>v.meta.isShow);
    console.log(tabList)
    return {
      tabList
    }

  }
}
</script>
<style lang="scss" scoped>
  .logo {
    width: 50px;
  }

  .info-box{
    text-align: right;
    color: white;
    padding: 15px;
  }

  .logo-box{
    text-align: left;
    padding: 7px;
  }

  .top-box{
    background: #409EFF;
  }

  .margin-left{
    margin-left: 15px;
  }

  .left-box{
    background: #409EFF;
  }

  .menu-item{
    text-align: left;
  }

</style>