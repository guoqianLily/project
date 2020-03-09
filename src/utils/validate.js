/**
 * Created by jiachenpan on 16/11/18.
 */

export function isvalidUsername(str) {
  const valid_map = ["admin", "editor"]; //判断那些用户可以进
  return valid_map.indexOf(str.trim()) >= 0;
}

/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return urlregex.test(textval);
}

/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/* 大小写字母*/
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

export function GetWeekByDate(testTime) {
  var arrayMonthDay = null;
  var nowDate = new Date(); //当前日期
  var nowYear = nowDate.getFullYear(); //当前年
  var nowMonth = 1; //第一月
  var nowDay = 1; //第一天
  var week = 1; //第一周

  //根据年是否为闰年,得到 arrayMonthDay的值
  if (nowYear % 400 == 0 || (nowYear % 4 == 0 && nowYear % 100 != 0)) {
    arrayMonthDay = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  } else {
    arrayMonthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  }

  //获取当前年的一月一号 是星期几
  var time = nowYear + "-" + nowMonth + "-" + nowDay;
  var weekDay = new Date(time).getDay();

  var bdate = new Date(testTime); //选择的时间
  var bmonth = bdate.getMonth() + 1; //月
  var bday = bdate.getDate(); //日期
  var bweek = 0;
  while (true) {
    //如果当前的月份是验证的月份的值,并且当前的天数是验证的日期的值,则结束循环,保存日期
    if (nowMonth == bmonth && nowDay == bday) {
      bweek = week;
      break;
    }
    //否则当天++,星期xx
    nowDay++;
    weekDay++;

    //如果当天的值>当前月份所对应的的最大天数,则月份+1,日期改为1
    if (nowDay > arrayMonthDay[nowMonth - 1]) {
      nowMonth++;
      nowDay = 1;
    }

    //如果当前星期大于6,则说明这周已完成,周数+1,星期改为 0
    if (weekDay > 6) {
      week++;
      weekDay = 0;
    }
  }
  var value = bweek;
  return value;
}
