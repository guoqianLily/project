<template>
  <div id="app">
    <div class="app-Header" v-if="headerFalg">
      <div class="app-headerBox">
        <div class="h-logoBox fl clearfix">
                <div class="h-logo fl">
                </div>
                <div class="h-logoName fl">
                    <span>集团标志性项目</span>
                </div>
            </div>
        <ul class="userInfo-box">
            <!-- <li><i class="el-icon-s-custom"></i><span>{{userName}}</span></li> -->
            <li>
               <el-popover
                  placement="bottom"
                  title=""
                  trigger="hover"
                  popper-class="backColorPop">
                  <div class="userInfoPoP">
                    <p><span>用户&nbsp;&nbsp;&nbsp;名：</span>{{userName}}</p>
                    <p><span>用户编码：</span>{{userCode}}</p>
                    <p><span>用户部门：</span>{{departmantName}}</p>
                  </div>
                  <div slot="reference"><i class="el-icon-s-custom"></i><span>{{userName}}</span></div>
                </el-popover>
            </li>
            <li>
              <el-popover
                  style="min-width:100px"
                  placement="bottom"
                  title=""
                  trigger="hover"
                  popper-class="backColorPopout"
                  v-model="popoverFlag">
                  <div class="userInfoPoP">
                    <p @click="updatePassword">修改密码</p>
                    <p @click="loginOutHandle">退出</p>
                  </div>
                  <div slot="reference"><i class="el-icon-switch-button"></i><span></span></div>
                </el-popover>
            </li>
        </ul>
        <el-menu
          mode="horizontal"
          background-color="#000"
          text-color="#fff"
          active-text-color="#ffd04b"
          :default-active="activeIndex"
          router
          menu-trigger="hover"
          style="float:right"
        >
        <NavMenu :navMenus="menuData"></NavMenu>
        </el-menu>
        
      </div>
    </div>
    <el-dialog title="修改密码" :visible.sync="dialogFormVisible" :close-on-click-modal="false"  :show-close="ShowColse" id="updatePassword"  width="30%">
        <el-form size="small" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="原始密码" prop="oldpass" width="200">
                <el-input type="password" v-model="ruleForm.oldpass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass" width="200">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass" width="200">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>     
        <div slot="footer" class="dialog-footer">
            <el-button v-if="ShowColse" size="small" @click="cancelHandel">取 消</el-button>
            <el-button size="small" type="primary" @click="submitForm('ruleForm')">确 定</el-button>
        </div> 
    </el-dialog>
    <router-view ></router-view>
    <!-- <p>hx修改</p> -->
    

  </div>

</template>
<script>
import {Popover,Menu} from "element-ui";
import NavMenu from "./common/header/Header.vue";
import {searchTypeMenuData} from './services/Manage/postManage'
import {setPasswordResetHandle} from './services/selfPage'
import {mapState} from 'vuex';
import {removeToken,removeUserId,getUserInfo} from '@/utils/auth.js'
export default {
  components: {
    NavMenu: NavMenu,
    "el-popover":Popover,
    "el-menu" : Menu
  },
  data(){
    var validatePass = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请输入密码'));
           
        } else {
            if (this.ruleForm.checkPass !== '') {   
                this.$refs.ruleForm.validateField('checkPass');
            }
            if(value.length < 6){
                callback(new Error('密码长度至少6位'));
            }
            callback();
        }
        
    };
    var validatePass2 = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
            callback(new Error('两次输入密码不一致!'));
        } else {
            callback();
        }
    };
    return{
      departmantName:'',
      userCode:'',
      activeIndex: 'home',
      menuData:[],
      headerFalg:true,
      userName:'',
      popoverFlag:false,
      dialogFormVisible:false,
      ShowColse:true,
      ruleForm: {
          oldpass:'',
          pass: '',
          checkPass: ''
      },
      rules: {
          oldpass: [
              { required: true, message: '请输入原始密码', trigger: 'blur' }
          ],
          pass: [
              { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
              { validator: validatePass2, trigger: 'blur' }
          ],
          // age: [
          //     { validator: checkAge, trigger: 'blur' }
          // ]
      },
    }
  },
  computed: {
    ...mapState({
      userId:state => state.user.userId,
      token:state => state.user.token,
      userInfo:state => state.user.userInfo,
      passwordItem:state => state.user.passwordItem
    })
  },
  watch:{
      '$route.path':function(newVal,oldVal){
        if(newVal === '/login'){
          this.headerFalg = false;
        } else{
          this.headerFalg = true;         
        }
      }
  },
  methods: {
    GOHome(){
      // this.$router.push({ name:'home'})
    },
    loginOutHandle(){
      this.$router.push({ name:'login'})
      removeToken();
      removeUserId();
      localStorage.removeItem('userInfo')
      localStorage.removeItem('tMenu')
      this.popoverFlag = false;
    },
    // headCall(data){
    //   console.log(data)
    //   this.menuData = data;
    // }
    updatePassword(){  //修改密码
      this.dialogFormVisible = true
      this.popoverFlag = false;
      this.ruleForm.oldpass = ''
      this.ruleForm.pass = ''
      this.ruleForm.checkPass = ''
      this.ShowColse = true
      try{
         this.$refs['ruleForm'].resetFields();
      }catch(e){
          //TODO handle the exception
      }

    },
    // 取消新增操作
    cancelHandel(){
        this.dialogFormVisible = false;
    },
    submitForm(formName){
        // 重置密码
        if(this.ruleForm.pass != '' && this.ruleForm.checkPass != '' && this.ruleForm.oldpass != ''){
            this.dialogFormVisible = false;
            this.popoverFlag = false;
            this.$refs['ruleForm'].validate((valid) => {
                if(valid){
                    console.log(this.userId,this.ruleForm.oldpass,this.ruleForm.pass)
                    setPasswordResetHandle(this.userId,this.ruleForm.oldpass,this.ruleForm.pass).then((res)=>{
                      if(res.result){
                          if(this.passwordItem){
                              this.$message({
                                type: 'success',
                                message: '修改成功,请重新登录!'
                              })
                              this.$router.push({ name:'login'})
                              removeToken();
                              removeUserId();
                              localStorage.removeItem('userInfo')
                              localStorage.removeItem('tMenu')
                              this.popoverFlag = false;
                              this.$store.commit("SET_PASSWordItem",false)
                          }else{
                              this.$message({
                                type: 'success',
                                message: '修改成功!'
                              })
                          }
                          
                      }else{
                          this.$message({
                            type: 'error',
                            message: res.message
                          })
                      }
                    })
                }
            })
        }else{
            this.$refs['ruleForm'].validate((valid) => {
                if(!valid){
                    // this.$message({
                    //   type: 'error',
                    //   message: '修改失败'
                    // })
                }
            })
        }
    },
  },
  created() {
    if(window.location.hash.indexOf('login') != -1){   // 当为登录页面时隐藏头部
      this.headerFalg = false;
    }else{
      searchTypeMenuData(this.userId,'top').then((result)=>{
        if(result.success){
          console.log(result.result)
          this.menuData = result.result;
          localStorage.setItem('tMenu',JSON.stringify(this.menuData))
        }
      })
    }
    this.$center.$on('headCallBack',(data)=>{
      this.menuData = data;
    })
    this.$center.$on('userInfoCallBack',(data)=>{
      this.userName = data.userName
      this.userCode = data.userCode
      this.departmantName = data.departmantName
      console.log(this.passwordItem)
      var that = this;
      if(this.passwordItem){
          setTimeout(function(){
              that.dialogFormVisible = true;
              that.ShowColse = false;
              that.ruleForm.oldpass = ''
              that.ruleForm.pass = ''
              that.ruleForm.checkPass = '';
              try{
                 that.$refs['ruleForm'].resetFields();
              }catch(e){
                  //TODO handle the exception
              }
              
          },100)
          
      }
    })
    this.menuData = JSON.parse(localStorage.getItem('tMenu'))
    console.log(this.passwordItem)
    
    try {
      this.userName = JSON.parse(localStorage.getItem('userInfo')).userName
      this.userCode = JSON.parse(localStorage.getItem('userInfo')).userCode
      this.departmantName = JSON.parse(localStorage.getItem('userInfo')).departmantName
    } catch (error) {
    }
  },
};
</script>


<style lang="scss" scoped>
#app{
  min-width: 1000px;
}
 .el-table th.gutter{
display: table-cell!important;
}
.app-Header{
  width:100%;
  height: 48px;
  background: #000;
}
.app-Header .app-headerBox{
  width:90%;
  height: 100%;
  white-space: nowrap;
  overflow: hidden;
  margin:0 auto;
}
.h-logoBox .h-logo{
    background: url(./assets/logo2.png) no-repeat 100% 47%;
    width: 73px;
    height: 100%;
}
.h-logoBox{
    /* margin:0 40px; */
    width:25%;
    height: 48px;
    line-height: 48px;
    white-space: nowrap;
    float: left;
}

.h-logoBox .h-logoName{
    font-size: 16px;
    color:#fff;
    font-weight: 600;
    margin-top: 3px;
    margin-left: 8px;
}
.userInfo-box{
    float:right;
}
.userInfo-box li{
    height: 48px;
    line-height: 48px;
    float:left;
    color: rgb(255, 255, 255);
    border-bottom-color: transparent;
    background-color: #000;
    font-size: 14px;
    cursor: pointer;
    box-sizing: border-box;
    -webkit-transition: border-color .3s,background-color .3s,color .3s;
    transition: border-color .3s,background-color .3s,color .3s;
    white-space: nowrap;
    padding:0 10px;
}
.userInfo-box li:hover{
    background-color: #6c6d6e !important;
    color: rgb(255, 255, 255);
    border-bottom-color: transparent;
}

.userInfo-box li i{
    margin-right: 5px;
    text-align: center;
    font-size: 18px;
    vertical-align: middle;
    color: #909399;
}

.userInfoPoP span{
  display: inline-block;
  min-width:80px;
  text-align: right;
}

</style>
<style>
.backColorPop{
  background-color:#0080ff !important;
  color:#fff !important;
}
.backColorPop .popper__arrow::after{
    border-bottom-color: #0080ff !important;
}
.backColorPopout{
  width:110px;
  min-width: 110px;
  background-color:#0080ff !important;
  color:#fff !important;
  padding-left: 0;
  padding-right: 0;
}
.backColorPopout .popper__arrow::after{
    border-bottom-color: #0080ff !important;
}
.backColorPopout p{
  padding:5px 0 5px 25px;
  cursor: pointer;
}
/* .backColorPopout p:hover{
  background: #ccc;
} */

.el-table{
    font-size: 12px !important;
} 
.el-table th{
  font-weight: bold;
}
.el-icon-s-custom:before,
.el-icon-switch-button:before{
    color: #fff;
}
/* .app-headerBox .oneMenu i{
  color:#fff;
}
.app-headerBox .el-submenu__title i{
  color:#fff;
} */
.app-headerBox .el-menu-item i{
  color:#fff;
  
}
.app-headerBox .el-menu-item.is-active i{
  color: inherit !important;
}
.app-headerBox  .el-submenu__title i{
  color:inherit;
}

.headerNav .el-menu-item i{
  color:inherit !important;
}

</style>
