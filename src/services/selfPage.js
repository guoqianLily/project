import http from '../utils/http'
import API from '../api'

//获取通知信息
export function getMessageList(userId){
    return new Promise((resolve,reject)=>{
        http({
            url:API.Message_API,
            method:'GET',
            data:{
                userId: userId
            }
        })
        .then(({data,status})=>{
            // if(status != 200){
            //     //请求失败
            //     return;
            // }
            resolve(data);
        })
        .catch(error=>{
            //请求失败
            console.log(error);
        })
    })
}
// 获取菜单权限
export function getMenuList(){
    return new Promise((resolve,reject)=>{
        http({
            url:API.MenuList_API,
            method:'POST',
        })
        .then(({data,flag})=>{
            if(!flag){
                //请求失败
                return;
            }
            resolve(data);
        })
        .catch(error=>{
            //请求失败
            console.log(error);
        })
    })
}

// 获取标志性项目权限
export function getSelfCenterList(empCode){
    return new Promise((resolve,reject)=>{
        http({
            url:API.selfCenter_API,
            method:'POST',
            data:{
                empCode: "01402199"
            }
        })
        .then(({data,flag})=>{
            resolve(data);
        })
        .catch(error=>{
            //请求失败
            console.log(error);
        })
    })
}

// 测试
export function testList(){
    return new Promise((resolve,reject)=>{
        http({
            url:API.test_API,
            method:'POST',
        })
        .then(({data,flag})=>{
            resolve(data);
        })
        .catch(error=>{
            //请求失败
            console.log(error);
        })
    })
}



// 首页退出时修改密码
export function setPasswordResetHandle(userId,oldPassword,newPassword){
    console.log(1111111111111)
    return new Promise((resolve,reject)=>{
        http({
            url:API.setPasswordReset_API,
            method:'POST',
            data:{
                userId:userId,
                oldPassword:oldPassword,
                newPassword:newPassword
            }
        })
        .then(({data,status})=>{
            if(status != 200){
                //请求失败
                return;
            }
            resolve(data);
        })
        .catch(error=>{
            //请求失败
            console.log(error);
        })
    })
}