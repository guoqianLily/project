<template>
    <div class="loginPage" v-loading="Stateloading" 
    element-loading-background="rgba(255, 255, 255, 1)">
        <div class="loginBanner" v-if="showFlag">
            <div class="logoTitle">
                <span class="logo"><img src="../../assets/logo1.png" /></span>
                <!-- <span class="logo2">2020年集团级关键项目平台</span> -->
            </div>
            <!-- <div class="loginText">
                <p class="p1">责任，自律，专注，服务</p>
                <p class="p2">让建设资金发挥最大投资效益</p>
            </div> -->
            <div class="login-container">
               <p class="Formtitle">登录</p>
                <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
                    <el-form-item prop="username">
                        <span class="icon-container el-icon-user">
                        <!-- <svg-icon icon-class="user" />   -->
                        </span>
                        <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="用户名" />
                    </el-form-item>
                    <el-form-item prop="password">
                        <span class="icon-container el-icon-unlock">
                        <!-- <svg-icon icon-class="password"></svg-icon> -->
                        </span>
                        <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on"
                        placeholder="密码"></el-input>
                        <!-- <span class="show-pwd" @click="showPwd"><svg-icon icon-class="eye" /></span> -->
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
                        登录
                        </el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="loginContent">

        </div>
    </div>
</template>

<script>
import { isvalidUsername } from '@/utils/validate'
import {searchTypeMenuData,searchUserMessageData} from '../../services/Manage/postManage.js'
import {mapState} from 'vuex'
import jsonp from 'jsonp';
import {getSSOuserInfo} from '../../services/policyPage';
import { setToken, 
        setUserId,
       } from '@/utils/auth'
export default {
  name: 'login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 1) {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true,message:'请输入用户名', trigger: 'blur'}],
        password: [{ required: true, trigger: 'blur', validator: validatePass }]
      },
      loading: false,
      pwdType: 'password',
      Stateloading:true,
      showFlag:false,
    }
  },
  computed: {
    ...mapState({
      userInfo : state => state.user.userInfo,
      userId : state => state.user.userId
    })
  },
  created() {
    if(this.$route.query.state == "1"){
      this.Stateloading = true;
      this.getTokenHandle();
    }else{
      this.Stateloading = false;
      this.showFlag = true;
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('Login', this.loginForm).then(() => {
            this.loading = false;
              // 获取用户信息
              searchUserMessageData(this.userId).then(result => {
                  if(result.success){
                      localStorage.setItem('userInfo',JSON.stringify(result.result));
                      sessionStorage.setItem('loginFlag','1')
                      this.$center.$emit('userInfoCallBack', result.result);
                      // 获取头部菜单的信息
                      searchTypeMenuData(this.userId,'top').then((result)=>{
                          if(result.success){
                              this.menuData = result.result;
                              localStorage.setItem('tMenu',JSON.stringify(this.menuData))
                              this.$center.$emit('headCallBack', this.menuData);
                              console.log(this.menuData)
                              if(this.menuData[0].childrenList == null){
                                  this.$router.push({ path:'/' + this.menuData[0].route })
                              }else{
                                  this.$router.push({ path:'/' + this.menuData[0].childrenList[0].route })
                              }
                          }
                      })
                  }
              }).catch(error => {
                  console.log(error)
              })
              
          }).catch((rej) => {
            this.loading = false;
            this.$message({
              type:'error',
              message:rej.message // '登录失败！'
            })
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getTokenHandle(){
      let _this = this;
      let opts = {
        param:'jsonpCallback',
      }
      let optsTwo = {
        param:'jsonpCallback',
      }
      jsonp('https://idp.haier.net/idp/restful/getIDPToken?appId=S01779&remoteIp=127.0.0.1',opts,function(err,res){
        if(res.data && res.data.isValid){
          let tokenid = res.data.tokenid; // 获取到了tokenid;
          getSSOuserInfo({tokenId:tokenid}).then((res) => {
            console.log(res)
            if(res.success){
              setToken(res.result.token);
              setUserId(res.result.userId);
              _this.$store.commit('SET_TOKEN', res.result.token)  // 将touken保存到全局
              _this.$store.commit('SET_USERID',res.result.userId)  // 将登录的用户id保存到全局
              // 获取用户信息
              searchUserMessageData(res.result.userId).then(result => {
                  if(result.success){
                      localStorage.setItem('userInfo',JSON.stringify(result.result))
                      _this.$center.$emit('userInfoCallBack', result.result);
                      // 获取头部菜单的信息
                      searchTypeMenuData(_this.userId,'top').then((result)=>{
                          if(result.success){
                              _this.menuData = result.result;
                              localStorage.setItem('tMenu',JSON.stringify(_this.menuData))
                              _this.$center.$emit('headCallBack', _this.menuData);
                              if(_this.menuData[0].childrenList == null){
                                  _this.$router.push({ path:'/' + _this.menuData[0].route })
                              }else{
                                  _this.$router.push({ path:'/' + _this.menuData[0].childrenList[0].route })
                              }
                              _this.Stateloading = false;
                              _this.showFlag = true;
                          }
                      })
                  }
              }).catch(error => {
                  console.log(error)
              })
            }else{
              _this.$router.push({ 
                  path:"/login",
              })
              _this.Stateloading = false;
              _this.showFlag = true;
            }
          })
          // jsonp('https://idp.haier.net/idp/restful/setIDPCookie?appId=COSMOPlat-OA&tokenId='+ tokenid +'&remoteIp=127.0.0.1',optsTwo,function(err,result){
          //   console.log(err,result)
            
          // })

        }else{
          _this.$router.push({ 
            path:"/login",
          })
          _this.Stateloading = false;
          _this.showFlag = true;
        }
      })  
    }
  }
}
</script>

<style lang="scss">
    .loginPage{
        width:100%;
        height: 100%;
        
        .loginBanner{
            width:100%;
            height: 100%;
            background:url(../../assets/bannerLogin2.jpg) no-repeat;
            background-size: 100% 100%;
            overflow: hidden;
            .logoTitle{
                margin-left: 5%;
                margin-top: 2%;
                font-size: 20px;
                color:#fff;
                height: 50px;
                line-height: 50px;
                z-index: 10;
                position: relative;
            }
            .loginText{
                margin-left: 10%;
                margin-top: 5%;
                font-size: 30px;
                font-family: "Microsoft YaHei","Arial Narrow",HELVETICA!important;
                color:#fff;
                height: 50px;
                line-height: 50px;
                z-index: 10;
                position: relative;
                .p1{
                    font-weight: 600;
                }
                .p2{
                    margin-left: 5%;
                    margin-top: 5%;
                    font-weight: 600;
                }
            }
        }
        .loginContent{
          width: 100%;
          height: 100%;
          background: rgba(31,35,38,.2);
          position: absolute;
          top: 0;
          left: 0;
        }
        .logo{
            float: left;
            width: 414px;
            height:36px;
            overflow: hidden;
            margin: 0 5px 0 0;
            img{
                width: 414px;
                height: 36px;
            }
        }
        .logo2{
            line-height: 50px;
            float: left;
        }
    }
</style>
<style rel="stylesheet/scss" lang="scss">
$bg:#2d3a4b;
$light_gray:#eee;
/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 45px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 11px;
      padding: 12px 5px 12px 15px;
      height: 45px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;
        -webkit-text-fill-color: #2d3a4b !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: #fff;
    border-radius: 22px;
    color: #454545;
    margin-bottom: 20px;
  }
  .el-form-item:last-child{
    background:none;
    border:none;
  }
  .el-button--primary{
    border-radius: 22px;
    margin-top: 15px;
    height: 45px;
  }
  .el-form-item__error{
    padding-left: 15px;
  }
}

</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
$dl_gray:#d7d7d7;
.login-container {  
  position: absolute;
  width:350px;
  height: 400px;
  background: rgba(255,255,255,.2);
  border-radius: 10px;
  top: 20%;
  right: 10%;
  padding: 45px 45px 0px;
  box-sizing: border-box;
  z-index: 10;
  .Formtitle{
    width: 100%;
    text-align: center;
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    margin-bottom: 35px
  }
  .login-form {
    width: 100%;
    height: 80%;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .icon-container {
    padding: 2px 5px 6px 15px;
    color: $dl_gray;
    vertical-align: middle;
    width: 12px;
    display: inline-block;
    font-size: 20px;
    &_login {
      font-size: 20px;
    }
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    color: $light_gray;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
