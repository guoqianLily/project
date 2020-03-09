import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    // mode:"history",
    routes: [{
            name: "home", //首页
            path: '/home',
            meta: {navShow: true, navNone: false },
            component: () =>
                import ('../pages/homePage/Root')
        },
        {
            name: 'taskfeedback', //任务反馈
            path: '/taskfeedback',
            meta: { navShow: true, navNone: false },
            component: () =>
                import ('../pages/taskFeedback/index.vue'),

        },
        {
            name: 'detail',
            path: '/detail',
            meta: { navShow: true, navNone: false },
            component: () =>
                import ('../pages/taskFeedback/detail.vue'),
        },
        {
            name: "login", //登录
            path: '/login',
            meta: { navShow: false, navNone: true },
            component: () =>
                import ('../pages/loginPage/login.vue'),
                
        },
        {
            name: 'manage',
            path: '/manage',
            meta: { navShow: true, navNone: false },
            component: () =>
                import ('../manage/manage.vue'),
            children: [{
                    name: 'elc',
                    path: 'elc',
                    meta: { title: '权限管理', navShow: true, navNone: false },
                    component: () =>
                        import ('../manage/elc.vue'),
                },
                {
                    name: 'menu',
                    path: 'menu',
                    meta: { title: '菜单管理', navShow: true, navNone: false },
                    component: () =>
                        import ('../manage/mune.vue'),
                },
                {
                    name: 'department',
                    path: 'department',
                    meta: { title: '部门管理', navShow: true, navNone: false },
                    component: () =>
                        import ('../manage/department/department.vue'),
                    children: [{
                        name: 'test1',
                        path: 'test1',
                        component: () =>
                            import ('../manage/department/depActions/chackPage.vue')
                    }],
                    // redirect:'department/test1'
                },
                {
                    name: 'station',
                    path: 'station',
                    meta: { title: '岗位管理', navShow: true, navNone: false },
                    component: () =>
                        import ('../manage/station/station.vue'),
                    children: [{
                        name: 'postManage',
                        path: 'postManage',
                        component: () =>
                            import ('../manage/station/actions/postManage.vue')
                    }]
                },
                {
                    name: 'roleManagement',
                    path: 'roleManagement',
                    meta: { title: '角色管理', navShow: true, navNone: false },
                    component: () =>
                        import ('../manage/Rolemanagement/roleManagement.vue'),
                },
                {
                    name: 'menuManagement',
                    path: 'menuManagement',
                    meta: { title: '菜单管理', navShow: true, navNone: false },
                    component: () =>
                        import ('../manage/menuManagement/menuManagement.vue'),
                    children: [{
                        name: 'menu1',
                        path: 'menu1',
                        component: () =>
                            import ('../manage/menuManagement/menu/menuPage.vue')
                    }],
                },
                {
                    name: 'systemConfiguration',
                    path: 'systemConfiguration',
                    meta: { title: '用户管理', navShow: true, navNone: false },
                    component: () =>
                        import ('../manage/systemConfiguration/systemConfiguration.vue'),
                    children: [{
                        name: 'userManage',
                        path: 'userManage',
                        component: () =>
                            import ('../manage/systemConfiguration/actions/userManage.vue')
                    }]
                },
                {
                    name: 'systemDictionary',
                    path: 'systemDictionary',
                    meta: { title: '系统字典', navShow: true, navNone: false },
                    component: () =>
                        import ('../manage/systemdictionary/systemdictionary.vue'),
                    children: [{
                        name: 'dictionary',
                        path: 'dictionary',
                        component: () =>
                            import ('../manage/systemdictionary/actions/dictionary.vue')
                    }]
                },
                {
                    name: 'personnelBaseInfo',
                    path: 'personnelBaseInfo',
                    meta: { title: '员工基本信息', navShow: true, navNone: false },
                    component: () =>
                        import ('../manage/personnelBaseInfo/personnelBaseInfo.vue'),
                    children: [
                        {
                            name: 'personnelBaseInfoQuery',
                            path: 'personnelBaseInfoQuery',
                            component: () =>
                                import ('../manage/personnelBaseInfo/actions/personnelBaseInfoCk.vue')
                        },
                        {
                            name: 'personExpirationOfContract',
                            path: 'personExpirationOfContract',
                            meta: { title: '员工合同到期清单', navShow: true, navNone: false },
                            component: () =>
                                import ('../manage/personnelBaseInfo/actions/personExpirationOfContract.vue')
                        }
                    ]
                },

            ]
        },
        // {
        //     path: '**',
        //     redirect: '/home'
        // },
    ]
})

export default router;
// 全局守卫

router.beforeEach((to, from, next) => {
    var nameTxt = ''
    var pathTxt = ''
    var str = ''
    if (to.name == null) {
        str = to.path;
        if (str.split('/')[3] == undefined) {
            nameTxt = str.split('/')[2]
        } else if (str.split('/')[2] == undefined) {
            nameTxt = str.split('/')[1]
        } else {
            nameTxt = str.split('/')[3]
        }
    }
    console.log(to.name)
    console.log(nameTxt)
    const nextRoute = ['home'];
    let obj = {}
    let _cookie = document.cookie.split('; ');
    for (var i = 0; i < _cookie.length; i++) {
        var arr = _cookie[i].split('=');
        obj[arr[0]] = arr[1];
    }
    if (nextRoute.indexOf(to.name) >= 0 && to.name != null) { //判断该页面是否需要登陆
        if (!obj.AdminToken) { //判断登陆状态
            next({ name: 'login' }) //如果未登录，则跳转到登录页
        } else {
            next();
        }
    } else if (nextRoute.indexOf(to.name) < 0 && to.name != null) {
        next()
    } else if (nextRoute.indexOf(nameTxt) >= 0 && to.name == null) {
        if (!obj.AdminToken) { //判断登陆状态
            next({ name: 'login' }) //如果未登录，则跳转到登录页
        } else {
            next({ name: nameTxt });
        }
    } else { //其他的无需登陆的页面不做验证
        next({ name: nameTxt });
    }
})