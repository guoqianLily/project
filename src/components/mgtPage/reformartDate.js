export const reformat = (date) => {
  let dates = new Date(date)
  let Y = dates.getFullYear() + '-'
  let M = (dates.getMonth() + 1 < 10 ? '0' + (dates.getMonth() + 1) : dates.getMonth() + 1) + '-'
  let D = dates.getDate() < 10 ? '0' + dates.getDate() + ' ' : dates.getDate() + ' '
  const currentDate = Y + M + D
  return currentDate
}

export const reformat_HMD = (date) => {
    let dates = new Date(date)
    let H = ((dates.getHours() < 10) ? '0' + dates.getHours() : dates.getHours()) + ':'
    let M = (dates.getMinutes() < 10) ? '0' + dates.getMinutes() : dates.getMinutes()
    const currentDate = H + M;
    return currentDate
}

export const timeDifference = (startTime,endTime) => {
        var date1 = new Date(startTime);  //开始时间
        var date2 = new Date(endTime);    //结束时间
        var date3 = date2.getTime() - date1.getTime();  //时间差的毫秒数
        //计算出相差天数
        var days = Math.floor(date3 / (24 * 3600 * 1000));
        //计算出小时数

        var leave1 = date3 % (24 * 3600 * 1000);    //计算天数后剩余的毫秒数
        var hours = Math.floor(leave1 / (3600 * 1000));
        //计算相差分钟数
        var leave2 = leave1 % (3600 * 1000);        //计算小时数后剩余的毫秒数
        var minutes = Math.floor(leave2 / (60 * 1000));

        //计算相差秒数

        var leave3 = leave2 % (60 * 1000);      //计算分钟数后剩余的毫秒数
        var seconds = Math.round(leave3 / 1000);
        var str = days + "天" + hours + "小时"
        return str
}

export const reforMonth = () => {
    var data = new Date();
    var year = data.getFullYear();
    var month = (data.getMonth()+1 < 10) ? '0'+(data.getMonth()+1):(data.getMonth()+1); //获取到当前月份,设置月份
    return year+"-"+month
}

export const reforWeek = (date) => {
    // 以周日为一周第一天
    var date = new Date(date || new Date());
    var dateThursDay = new Date(date.getTime() + (-date.getDay() + 4) * 86400000);
    var date2 = new Date(dateThursDay.getFullYear(), 0, 1);
    var year = dateThursDay.getFullYear();
    var firstDay = date2.getDay();
    // debugger;
    // if(firstDay == 0) firstDay = 7;
    if(firstDay > 4) firstDay = firstDay - 7;
    // 若当年 1月1号是周4，则本年度周次计算时间要 + 4（日一二三，当天不计）天，大于周4则下周为第一周，再减一周
    let d = Math.ceil((dateThursDay.getTime() - date2.getTime()) / 86400000) + firstDay;
    var weekYear = d <= 0 ? (year - 1) : year,
        week = d <= 0 ?  Math.ceil(d / 7 - 1) :  Math.ceil(d / 7);
    return weekYear + 'W' + ('00' + week).substr(-2);
}

export const reforWeek_select = (data) => {
    var date = new Date(data);
    var date2 = new Date(date.getFullYear(), 0, 1);
    var day1=date.getDay();
    let Y = date.getFullYear()+'W';
    if(day1==0) day1=7;
    var day2=date2.getDay();
    if(day2==0) day2=7;
    let d = Math.round((date.getTime() - date2.getTime()+(day2-day1)*(24*60*60*1000)) / 86400000);
    return Y + (Math.ceil(d /7)+1);
}

export const reforDay = () => {
    let dates = new Date()
    let Y = dates.getFullYear() + '-'
    let M = (dates.getMonth() + 1 < 10 ? '0' + (dates.getMonth() + 1) : dates.getMonth() + 1) + '-'
    let D = dates.getDate() < 10 ? '0' + dates.getDate() : dates.getDate()
    const currentDate = Y + M + D
    return currentDate
}