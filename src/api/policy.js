// 查询政策需求所有信息
const PolicyRequire_API = '/chouChing/businessPolicyController/searchAllData'

// 新增政策需求信息
const PolicyRequireAdd_API = '/chouChing/businessPolicyController/saveData'

// 修改政策需求所有信息
const PolicyRequireUpdate_API = '/chouChing/businessPolicyController/updateData'


// 查询附件上传文件列表
const GetFileListData_API = '/chouChing/businessFileController/searchAllData'


// 修改附件上传文件列表
const UpdateFileListData_API = '/chouChing/businessFileController/updateData'

// 删除附件列表
const DeleteFileListData_API = '/chouChing/businessFileController/deleteData'




// 查询政策需求所有信息
const GETPolicyProfeedback_API = '/chouChing/businessPolicyController/searchAllDataByMonth'

// 新增政策需求所有信息
const AddPolicyProfeedback_API = '/chouChing/BusinessWeekController/saveData'

// 修改政策需求所有信息
const UPdatePolicyProfeedback_API = '/chouChing/BusinessWeekController/updateData'


// 获取申报政策进展分类得下拉框值
const GetweekProgressClass_API = '/chouChing/sysDictionariesController/searchAllData'

// 单点登录获取用户信息
const GetSSOuserInfo_API = '/chouChing/loginController/portalLogin';








export default{
    PolicyRequire_API,
    PolicyRequireAdd_API,
    PolicyRequireUpdate_API,
    GetFileListData_API,
    UpdateFileListData_API,
    GETPolicyProfeedback_API,
    AddPolicyProfeedback_API,
    UPdatePolicyProfeedback_API,
    GetweekProgressClass_API,
    DeleteFileListData_API,
    GetSSOuserInfo_API
}
    