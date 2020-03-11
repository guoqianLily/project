<template>
    <div class="headerNav" id="top">
        <template v-for="navMenu in navMenus">
            <!-- 最后一级菜单 -->
            <el-menu-item v-if="!navMenu.childrenList && navMenu" :key="navMenu.id" :data="navMenu"
                :index="navMenu.route" 
                 @click="handleSelect"
                class="oneMenu">
                <i :class="navMenu.icon"></i>
                <span slot="title">{{navMenu.menuName}}</span>
            </el-menu-item>
            <!-- 此菜单下还有子菜单 -->
            <el-submenu v-if="navMenu.childrenList && navMenu" :key="navMenu.id" :data="navMenu" 
            :index="navMenu.route"  @click="handleSelect">
                <template slot="title">
                    <i :class="navMenu.icon"></i>
                    <span> {{navMenu.menuName}}</span>
                </template>
                <!-- 递归 -->
                <NavMenu :navMenus="navMenu.childrenList"></NavMenu>
            </el-submenu>
        </template>

    </div>

</template>
<script>
    import {
        Submenu,
        MenuItem
    } from "element-ui"
    export default {
        name: 'NavMenu',
        components: {
            "el-menu-item": MenuItem,
            "el-submenu": Submenu
        },
        props: {
            title: String,
            navMenus: Array
        },
        data() {
            return {


            };
        },
        methods: {
            handleSelect(id, keyPath) {
                console.log(keyPath)
                this.$store.dispatch('getZmuneID',id.$attrs.data.id);
                // this.$router.push({path:id.$attrs.data.route})

            }
        },
        created() {}
    }
</script>

<style>
    * {
        outline: none;
    }

    /* 水平样式 */
    .el-menu--horizontal>div>.el-submenu {
        float: left;
    }

    .el-menu.el-menu--horizontal {
        display: contents;
    }

    /* 一级菜单的样式 */
    .el-menu--horizontal>div>.el-menu-item {
        float: left;
        height: 48px;
        line-height: 48px;
        margin: 0;
        /* border-bottom: 2px solid transparent ; */
        color: #909399;
    }

    .el-menu--horizontal>div>.el-submenu .el-submenu__icon-arrow {
        position: static;
        /* vertical-align: middle; */
        margin-left: 8px;
        margin-top: -3px;
    }

    .el-menu-item * {
        vertical-align: initial;
    }

    .el-submenu__title * {
        vertical-align: inherit;
    }

    .el-menu.el-menu--horizontal {
        display: block;
        border-bottom: none;
        height: 48px;
        background-color: transparent !important;
    }

    .el-menu--horizontal>div>.el-menu-item {
        border: none;
    }

    .headerNav .el-submenu__title {
        height: 48px !important;
        line-height: 48px !important;
        background-color: transparent !important;
    }

    .headerNav .el-menu-item {
        padding: 0 10px !important;
    }

    .headerNav .el-submenu__title {
        padding: 0 10px !important;
    }

    .headerNav .header {
        width: 100%;
        height: 48px;
        /*background: #5576BD;*/
    }

    .headerNav .h-logoBox .h-logo {
        background: url(../../assets/logo.gif) no-repeat center;
        background-size: 100% 100%;
        width: 78px;
        height: 100%;
    }

    .headerNav .h-logoBox {
        /* margin:0 40px; */
        height: 48px;
        line-height: 48px;
        float: left;
        
    }

    .headerNav .h-logoBox .h-logo {
        background: url(../../assets/logo.gif) no-repeat center;
        background-size: 100% 100%;
        width: 78px;
    }

    .headerNav .h-logoBox .h-logoName {
        font-size: 14px;
        color: #fff;
        font-weight: 600;
        margin-top: 3px;
        margin-left: 8px;
    }

    .oneMenu {
        background-color: transparent !important;
        /* color: #d3d3d5 !important; */
    }
    .el-submenu.is-active .el-submenu__title {
        color: #fff !important;
    }

    .is-active {
        /* background-color: #0080ff !important;
        color: #fff !important; */
    }
    .headerNav .el-menu-item:hover {
        background-color: #cbe1ff !important;
        color: #000 !important;
    }
</style>