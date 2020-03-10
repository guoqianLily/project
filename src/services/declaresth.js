import http from '../utils/http'
import API from '../api'
import API_dec from '../api/declaresth.js'
export function getAlldeclaresthData(userId, orgId, projectName) {
    return new Promise((resolve, reject) => {
        http({
                url: API_dec.searchAllData,
                method: 'POST',
                data: {
                    userId: userId,
                    orgId: orgId,
                    // projectCode:projectCode,//项目编码
                    projectName: projectName //项目名称
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
export function getBaseMessage(userId, projectId) {
    return new Promise((resolve, reject) => {
        http({
                url: API_dec.searchBaseMessage,
                method: 'POST',
                data: {
                    userId: userId,
                    id: projectId,
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
export function getWeek(userId, currentTime) {
    return new Promise((resolve, reject) => {
        http({
                url: API_dec.searchWeek,
                method: 'POST',
                data: {
                    userId: userId,
                    currentTime: currentTime,
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



//时间戳转时间格式
export function getLocalTime(time, fmt) {
    if (!time) {
        return '';
    }
    if (typeof (time) == "object" || typeof (time) == "OBJECT" || typeof (time) == "string") {
        var newtime = new Date(time);
        var z = {
            M: newtime.getMonth() + 1,
            d: newtime.getDate(),
            h: newtime.getHours(),
            m: newtime.getMinutes(),
            s: newtime.getSeconds()
        };
        fmt = fmt.replace(/(M+|d+|h+|m+|s+)/g, function (v) {
            return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1))).slice(-2);
        });
        return fmt.replace(/(y+)/g, function (v) {
            return newtime.getFullYear().toString().slice(-v.length);
        });
    } else if (typeof (time) == "number") {
        var TIME = new Date(time);
        var z = {
            M: TIME.getMonth() + 1,
            d: TIME.getDate(),
            h: TIME.getHours(),
            m: TIME.getMinutes(),
            s: TIME.getSeconds()
        };
        fmt = fmt.replace(/(M+|d+|h+|m+|s+)/g, function (v) {
            return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1))).slice(-2);
        });
        return fmt.replace(/(y+)/g, function (v) {
            return TIME.getFullYear().toString().slice(-v.length);
        });
    } else return time;
}