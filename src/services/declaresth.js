import http from '../utils/http'
import API from '../api'
import API_dec from '../api/declaresth.js'
export function getAlldeclaresthData(userId,orgId,projectName) {
    return new Promise((resolve, reject) => {
        http({
                url: API_dec.searchAllData,
                method: 'POST',
                data: { 
                    userId:userId,
                    orgId:orgId,
                    // projectCode:projectCode,//项目编码
                    projectName	:projectName//项目名称
                 }
            })
            .then((data, status) => {
                resolve(data);
            })
            .catch(error => {
                console.log(data);
            })
    })
}