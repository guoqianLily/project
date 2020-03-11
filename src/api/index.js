//开发环境
// const SAT_HOST = 'http://192.168.11.127:8081';
// const SAT_HOST = 'http://47.105.97.248:8082';
const SAT_HOST = 'http://10.138.25.189:8088';
// const SAT_HOST = 'http://10.153.93.107:8080'
//测试
const UAT_HOST = 'http://10.138.25.189:8088';
//生产
const PRO_HOST = 'http://10.138.25.189:8088'
// const PRO_HOST = 'http://47.105.97.248:8082'



/**
 * 系统管理模块的岗位，用户，系统字典，登录，菜单下拉
 */

/*
获取通知信息接口
参数： userId 用户id
*/
const Message_API = '/DataPortalRQ/sendMail/getSendMailById';


/*
获取通知菜单权限
参数： 
*/
const MenuList_API = '/api/sys/profile.do';

/*
获取标志性项目的权限管理
参数：  entity: {}
        pageNumber: 1
        pageSize: 12
*/
const selfCenter_API = '/api/empController/getCatHrEmpBaseExtendAllData.do';

/*
测试
*/
const test_API = '/api/testController/seachAllData';

//根据文件ID下载附件
const seeEnclosure = '/chouChing/sysFileUploadController/downFile';


/**
 * 岗位模块
 *
 */
/*岗位模块的树形菜单为部门菜单
 **参数
 */

const departmentTree_API = '/chouChing/sysDepartmantController/searchTreeAllData'
    /*岗位查询
     **参数
     */
const postSearch_API = '/chouChing/sysTitleController/searchAllData'

/*岗位新增、修改
 **参数
 */
const addPostmanage_API = '/chouChing/sysTitleController/saveData'


/*岗位删除
 **参数
 */
const deletePostmanage_API = '/chouChing/sysTitleController/deleteById'

/*
 *   岗位中查询所有部门进行所属部门的改变
 **/

const searchAllDepartmentData_API = '/chouChing/sysDepartmantController/searchAllData'

/*用户查询
 **参数
 */
const userSearch_API = '/chouChing/sysUserController/searchAllDataByDepartmantId'

/*用户新增、修改
 **参数
 */
const addUsermanage_API = '/chouChing/sysUserController/saveData'


/*用户删除
 **参数
 */
const deleteUsermanage_API = '/chouChing/sysUserController/deleteById'

/*角色全部查询
 **参数 
 */
const getRoleUsermanage_API = '/chouChing/sysRoleController/searchAllData'

/*用户-角色新增
 **参数
 */
const addUser_Rolemanage_API = '/chouChing/sysRoleController/insertUserRoleList'

/*用户-岗位新增
 **参数
 */
const addUser_Depmanage_API = '/chouChing/sysTitleController/insertUserTitleList'


/*用户-根据用户查询该用户角色
 **参数
 */
const searchUser_Rolemanage_API = '/chouChing/sysRoleController/searchAllDataByUserId'


/*用户-根据用户查询该用户岗位
 **参数
 */
const searchUser_Depmanage_API = '/chouChing/sysTitleController/searchAllDataByUserId'


/*用户-重置单个用户密码
 **参数
 */
const resetoneUserPassword_API = '/chouChing/sysUserController/resetPassword'

/*用户-判断输入得用户code，用户新增时是否已经存在
 **参数
 */
const judgeUserCode_API = '/chouChing/sysUserController/verificationRepeat'

/*系统字典-查询系统字典下拉框数据
 **参数
 */
const searchDictionarySelectdata_API = '/chouChing/sysDictionariesController/searchAllGroupData'

/*系统字典-查询系统字典数据
 **参数
 */
const searchDictionaryAlldata_API = '/chouChing/sysDictionariesController/searchAllData'

/*系统字典-查询系统字典数据
 **参数
 */
const addUpdateDictionary_API = '/chouChing/sysDictionariesController/saveData'

/*系统字典-系统字典删除
 **参数
 */
const deleteDictionary_API = '/chouChing/sysDictionariesController/deleteById'

/*系统字典-判断系统字典的key，用户新增时是否已经存在
 **参数
 */
const judgeDictionaryKey_API = '/chouChing/sysDictionariesController/verificationRepeat'
    /*系统字典-删除系统字典时作验证(验证关联关系(是否存在下级岗位))
     **参数
     */
const deletejudgeDictionaryByChild_API = '/chouChing/sysTitleController/verificationIncidenceRelationByChildren'

/*系统字典-验证关联关系(是否存在关联用户)
 **参数
 */
const deletejudgeDictionaryByUser_API = '/chouChing/sysTitleController/verificationIncidenceRelationByUser'
    /*菜单权限渲染接口
     **参数
     */
const searchtypeMenuData_API = '/chouChing/sysMenuController/searchDataByUserId'

/**
 * 任务管理模块
 * 
 */

/**
 * 任务管理查询
 */
const getallTaskManageData_API = '/chouChing/taskInfoController/searchAllData'

/**
 * 任务管理新增，修改
 */
const updateTaskManageData_API = '/chouChing/taskInfoController/saveData'

/**
 * 任务管理删除
 */
const deleteTaskManageData_API = '/chouChing/taskInfoController/deleteById'

/**
 * 任务管理查询
 */
const getPaginationTaskManageData_API = '/chouChing/taskInfoController/searchData'

/**
 * 按钮权限 根据用户id,菜单id获取页面的按钮权限
 */

const getBtnsPermissions_API = '/chouChing/sysMenuController/searchButtonDataByUserId'
/**
 * 用户密码修改
 * 
 */

const setPasswordReset_API = '/chouChing/sysUserController/resetPasswordByOld'

//人员基本信息查询
//新增保存
const SavepersonnelBaseInfo_API = '/chouChing/employeeInfoController/saveData'
//根据id查询行数据
const personnelBaseInfo_API = '/chouChing/employeeInfoController/selectByPrimaryKey'
//页面查询
const QuerypersonnelBaseInfo_API = '/chouChing/employeeInfoController/searchAllData'
//页面查询
const personExpirationOfContract = '/chouChing/employeeInfoController/selectExpirationOfContractByDay60'
//删除
const deletepersonnelBaseInfo_API = '/chouChing/employeeInfoController/tombstoneById'

export default {
    SAT_HOST,
    UAT_HOST,
    PRO_HOST,
    Message_API,
    MenuList_API,
    selfCenter_API,
    test_API,
    seeEnclosure,
    departmentTree_API,
    postSearch_API,
    addPostmanage_API,
    deletePostmanage_API,
    userSearch_API,
    addUsermanage_API,
    deleteUsermanage_API,
    getRoleUsermanage_API,
    addUser_Rolemanage_API,
    addUser_Depmanage_API,
    searchUser_Rolemanage_API,
    searchUser_Depmanage_API,
    resetoneUserPassword_API,
    judgeUserCode_API,
    searchDictionarySelectdata_API,
    searchDictionaryAlldata_API,
    addUpdateDictionary_API,
    deleteDictionary_API,
    judgeDictionaryKey_API,
    searchtypeMenuData_API,
    searchAllDepartmentData_API,
    getallTaskManageData_API,
    updateTaskManageData_API,
    deleteTaskManageData_API,
    getPaginationTaskManageData_API,
    deletejudgeDictionaryByChild_API,
    deletejudgeDictionaryByUser_API,
    getBtnsPermissions_API,
    setPasswordReset_API,
    SavepersonnelBaseInfo_API,
    personnelBaseInfo_API,
    QuerypersonnelBaseInfo_API,
    personExpirationOfContract,
    deletepersonnelBaseInfo_API
}