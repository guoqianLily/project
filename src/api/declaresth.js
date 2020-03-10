/**
 * 查询所有项目信息
 * userId用户ID
orgId组织id
projectCode	项目编码
projectName	项目名称
 */
const searchAllData = "/chouChing/BusinessProjectController/searchAllData";
/**
 * 查询单条政策基本信息
 * userId用户ID
projectId	项目ID

projectCode	项目编码
 */
const searchBaseMessage= "/chouChing/BusinessProjectController/selectByPrimaryKey";
//根据日期查询周次
const searchWeek= "/chouChing/weekNoController/searchAllData";
//查询当月目标信息
/*
userId	用户ID
projectId	
month
*/
const searchMonthMessage= "/chouChing/BusinessTargetController/searchAllData";
/**
 * userId	是	
用户ID
businessId
businessType
month	是	
2020-03
年月
week	是	
11
周
 */
const searchWeekMessage= "/chouChing/BusinessWeekController/searchAllData";

//新增周报信息接口
const addWeekMessage= "/chouChing/BusinessWeekController/saveData";
//修改周报信息接口
const upDataWeekMessage= "/chouChing/BusinessWeekController/updateData";

//当月目标修改保存接口
const upDatamonthlytarget= "/chouChing/BusinessTargetController/updateData";
//当月目标新增保存接口
const addmonthlytarget= "/chouChing/BusinessTargetController/saveData";
export default {
    searchAllData,
    searchBaseMessage,
    searchWeek,
    searchMonthMessage,
    searchWeekMessage,
    addWeekMessage,
    upDataWeekMessage,
    upDatamonthlytarget,
    addmonthlytarget

}

