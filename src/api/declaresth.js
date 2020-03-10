/**
 * 查询所有项目信息
 * userId用户ID
orgId组织id
projectCode	项目编码
projectName	项目名称
 */
const searchAllData = "/chouChing/BusinessProjectController/searchAllData";
export default {
    searchAllData

}

//时间戳转时间格式
export function getLocalTime(time, fmt) {
    if (!time) {
        return '';
    }
    if (typeof(time) == "object" || typeof(time) == "OBJECT") {
        var z = {
            M: time.getMonth() + 1,
            d: time.getDate(),
            h: time.getHours(),
            m: time.getMinutes(),
            s: time.getSeconds()
        };
        fmt = fmt.replace(/(M+|d+|h+|m+|s+)/g, function(v) {
            return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1))).slice(-2);
        });
        return fmt.replace(/(y+)/g, function(v) {
            return time.getFullYear().toString().slice(-v.length);
        });
    } else if (typeof(time) == "number") {
        var TIME = new Date(time);
        var z = {
            M: TIME.getMonth() + 1,
            d: TIME.getDate(),
            h: TIME.getHours(),
            m: TIME.getMinutes(),
            s: TIME.getSeconds()
        };
        fmt = fmt.replace(/(M+|d+|h+|m+|s+)/g, function(v) {
            return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1))).slice(-2);
        });
        return fmt.replace(/(y+)/g, function(v) {
            return TIME.getFullYear().toString().slice(-v.length);
        });
    } else return time;
}