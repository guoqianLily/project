let config = {
    "entity": null,
    "childs": [{
            "entity": {
                "id": 1,
                "parentMenuId": 0,
                "name": "系统管理",
                "icon": "el-icon-setting",
                "alias": "系统管理",
                "state": "ENABLE",
                "sort": 0,
                "value": null,
                "type": "NONE",
                "createUserId": 1
            },
            "childs": [{
                    "entity": {
                        "id": 2,
                        "parentMenuId": 1,
                        "name": "部门管理",
                        "icon": "el-icon-suitcase",
                        "alias": "部门管理",
                        "state": "ENABLE",
                        "sort": 0,
                        "value": "test1",
                        "type": "LINK",
                        "createUserId": 1
                    },
                    "childs": null
                },
                {
                    "entity": {
                        "id": 3, //
                        "parentMenuId": 1, //
                        "name": "岗位管理", //
                        "icon": "el-icon-s-check", //
                        "alias": "岗位管理",
                        "state": "ENABLE",
                        "sort": 1,
                        "value": "postManage",
                        "type": "LINK",
                        "createUserId": 1
                    },
                    "childs": null
                },
                {
                    "entity": {
                        "id": 4,
                        "parentMenuId": 1,
                        "name": "角色管理",
                        "icon": "el-icon-user",
                        "alias": "角色管理",
                        "state": "ENABLE",
                        "sort": 2,
                        "value": "roleManagement",
                        "type": "LINK",
                        "createUserId": 1
                    },
                    "childs": null
                },

                {
                    "entity": {
                        "id": 5,
                        "parentMenuId": 1,
                        "name": "菜单管理",
                        "icon": "el-icon-document", //
                        "alias": "菜单管理",
                        "state": "ENABLE",
                        "sort": 3,
                        "value": "menu1",
                        "type": "LINK",
                        "createUserId": 1
                    },
                    "childs": null
                },
                {
                    "entity": {
                        "id": 6,
                        "parentMenuId": 1,
                        "name": "用户管理",
                        "icon": "el-icon-s-custom",
                        "alias": "用户管理",
                        "state": "ENABLE", // 
                        "sort": 4, // sortNo
                        "value": "userManage", //url
                        "type": "LINK",
                        "createUserId": 1
                    },
                    "childs": null
                },
                {
                    "entity": {
                        "id": 7,
                        "parentMenuId": 1,
                        "name": "系统管理",
                        "icon": "el-icon-s-operation",
                        "alias": "系统管理",
                        "state": "ENABLE",
                        "sort": 5,
                        "value": "userManagement",
                        "type": "LINK",
                        "createUserId": 1
                    },
                    "childs": null
                },
                {
                    "entity": {
                        "id": 8,
                        "parentMenuId": 1,
                        "name": "系统字典管理",
                        "icon": "el-icon-reading",
                        "alias": "系统字典管理",
                        "state": "ENABLE",
                        "sort": 6,
                        "value": "dictionary",
                        "type": "LINK",
                        "createUserId": 1
                    },
                    "childs": null
                },

            ]
        },
        // {
        //     "entity": {
        //         "id": 6,
        //         "parentMenuId": 0,
        //         "name": "系统配置",
        //         "icon": "el-icon-news",
        //         "alias": "系统配置",
        //         "state": "ENABLE",
        //         "sort": 1,
        //         "value": null,
        //         "type": "NONE",
        //         "createUserId": 1
        //     },
        //     "childs": []
        // },
        // {
        //     "entity": {
        //         "id": 9,
        //         "parentMenuId": 0,
        //         "name": "用户密码",
        //         "icon": "el-icon-rank",
        //         "alias": "用户密码",
        //         "state": "ENABLE",
        //         "sort": 2,
        //         "value": null,
        //         "type": "NONE",
        //         "createUserId": 1
        //     },
        //     "childs": []
        // }
    ]
}
export default config