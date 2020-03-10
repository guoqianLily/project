import http from '../utils/http'
import API from '../api/policy'

//获取政策需求所有接口
export function getpolicyRequireAllData(data){
    console.log(data)
    return new Promise((resolve,reject)=>{
        http({
            url:API.PolicyRequire_API,
            method:'POST',
            data:data
        })
        .then(({data,status})=>{
            resolve(data);
        })
        .catch(error=>{
            //请求失败
            console.log(error);
        })
    })
}

//新增政策需求所有接口
export function addpolicyRequireData(data){
    return new Promise((resolve,reject)=>{
        http({
            url:API.PolicyRequireAdd_API,
            method:'POST',
            data:data
        })
        .then(({data,status})=>{
            resolve(data);
        })
        .catch(error=>{
            //请求失败
            console.log(error);
        })
    })
}


//修改政策需求所有接口
export function updatepolicyRequireData(data){
    return new Promise((resolve,reject)=>{
        http({
            url:API.PolicyRequireUpdate_API,
            method:'POST',
            data:data
        })
        .then(({data,status})=>{
            resolve(data);
        })
        .catch(error=>{
            //请求失败
            console.log(error);
        })
    })
}


//查询附件上传文件列表
export function getFileListAllData(data){
    return new Promise((resolve,reject)=>{
        http({
            url:API.GetFileListData_API,
            method:'POST',
            data:data
        })
        .then(({data,status})=>{
            resolve(data);
        })
        .catch(error=>{
            //请求失败
            console.log(error);
        })
    })
}




//获取政策需求所有接口
export function getPolicyProfeedbackAllData(data){
    console.log(data)
    return new Promise((resolve,reject)=>{
        http({
            url:API.GETPolicyProfeedback_API,
            method:'POST',
            data:data
        })
        .then(({data,status})=>{
            resolve(data);
        })
        .catch(error=>{
            //请求失败
            console.log(error);
        })
    })
}

//新增周报信息
export function AddPolicyProfeedbackData(data){
    console.log(data)
    return new Promise((resolve,reject)=>{
        http({
            url:API.AddPolicyProfeedback_API,
            method:'POST',
            data:data
        })
        .then(({data,status})=>{
            resolve(data);
        })
        .catch(error=>{
            //请求失败
            console.log(error);
        })
    })
}

//修改周报信息
export function updatePolicyProfeedbackData(data){
    console.log(data)
    return new Promise((resolve,reject)=>{
        http({
            url:API.UPdatePolicyProfeedback_API,
            method:'POST',
            data:data
        })
        .then(({data,status})=>{
            resolve(data);
        })
        .catch(error=>{
            //请求失败
            console.log(error);
        })
    })
}

// 获取申报政策进展分类得下拉框值
export function getweekProgressClassData(data){
    console.log(data)
    return new Promise((resolve,reject)=>{
        http({
            url:API.GetweekProgressClass_API,
            method:'POST',
            data:data
        })
        .then(({data,status})=>{
            resolve(data);
        })
        .catch(error=>{
            //请求失败
            console.log(error);
        })
    })
}

// 修改文件列表
export function updateFileListData(data){
    console.log(data)
    return new Promise((resolve,reject)=>{
        http({
            url:API.UpdateFileListData_API,
            method:'POST',
            data:data
        })
        .then(({data,status})=>{
            resolve(data);
        })
        .catch(error=>{
            //请求失败
            console.log(error);
        })
    })
}

// 删除文件列表
export function deleteFileListData(data){
    console.log(data)
    return new Promise((resolve,reject)=>{
        http({
            url:API.DeleteFileListData_API,
            method:'POST',
            data:data
        })
        .then(({data,status})=>{
            resolve(data);
        })
        .catch(error=>{
            //请求失败
            console.log(error);
        })
    })
}