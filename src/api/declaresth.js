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

export default {
    searchAllData,
    searchBaseMessage,
    searchWeek

}

