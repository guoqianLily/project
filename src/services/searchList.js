//岗位
import http from '../utils/http'
import API from '../api'
// 获取岗位的属性菜单为部门菜单
export function search(pageNo, pageSize, engineer, department,level,completionStatus,serviceCategory,serviceQuality,serviceAttitude, userId) {
    return new Promise((resolve, reject) => {
        http({
            url:API.taskSearch,
            method:'POST',
            data:{
                pageNo:pageNo,
                pageSize:pageSize,
                engineer:engineer,
                department:department,
                level:level,
                completionStatus:completionStatus,
                serviceCategory:serviceCategory,
                serviceQuality:serviceQuality,
                serviceAttitude:serviceAttitude,
                userId: userId
            }
        })
            .then(({data,status})=>{
                if(status == 200){
                    resolve(data);
                }
            })
            .catch(error=>{
                console.log(error);
            })
    })
}