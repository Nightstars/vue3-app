<template>
  <div class="login">
    <div>
      <h2>Login</h2>
    </div>
    <el-form :label-position="labelPosition" label-width="80px" :model="loginData">
      <el-form-item label="账号">
        <el-input placeholder="请输入账号" v-model="loginData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input placeholder="请输入密码" v-model="loginData.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-btn" @click="subFun" round>登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import  {reactive} from 'vue'
import { ElMessage } from 'element-plus'
import {login} from "../http/login";
import router from '../router/index'

export default {
  name: "Login",
  setup() {
    let loginData=reactive({
      username: '',
      password: ''
    })

    let subFun=()=>{
      // eslint-disable-next-line no-empty
      if(!loginData.username){
        ElMessage.error('账户不能为空哦！');
        return;
      }
      if(!loginData.password){
        ElMessage.error('密码不能为空哦！');
        return;
      }
      login(loginData).then(res=>{
        console.log(res);
        ElMessage.success('登录成功！');
        router.push('/Home');
      })
    }

    return {
      loginData,
      subFun
    }

  }
}
</script>

<style scoped>
  .login{
    width: 500px;
    margin: 150px auto;
    border: solid 1px #efefef;
    border-radius: 10px;
    padding-right: 40px;
  }

  .login-btn{
    width: 100%;
  }

</style>