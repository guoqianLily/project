<template>
  <div class="navMenu">
    <label v-for="(navMenu,index) in navMenus" :key="index">
      <router-link :to="{ name:navMenu.route, params: {id:navMenu.menuName}, path:'/'+navMenu.route}">
        <el-menu-item v-if="navMenu.childrenList == null" :key="navMenu.id" :data="navMenu" :index="navMenu.id"
          :route="navMenu.route">
          <i :class="navMenu.icon"></i>
          <span slot="title">{{navMenu.menuName}}</span>
        </el-menu-item>
      </router-link>
      <el-submenu v-if="navMenu.childrenList" :key="navMenu.id" :data="navMenu" :index="navMenu.menuName">
        <template slot="title">
          <i :class="navMenu.icon"></i>
          <span v-if="!collpase">{{navMenu.menuName}}</span>
        </template>
        <NavMenu :navMenus="navMenu.childrenList"></NavMenu>
      </el-submenu>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'NavMenu',
    props: {
      'navMenus': Array,
      'collpase': Boolean
    },
    data() {
      return {

      }
    },

    methods: {}
  }
</script>
<style lang="scss">
  .navMenu {
    .el-submenu {
      .el-menu-item {
        height: 40px;
        line-height: 40px;
        padding: 0 45px;
        min-width: 200px;
        color: rgb(210, 209, 209);
      }
      .el-menu-item:hover {
        background-color: #6c6d6e !important;
        color: #fff !important;
        i {
          color: #fff !important;
        }
      }
      .is-active {
        background-color: #0080ff !important;
        color: #fff !important;
    }
    }
      
  }
</style>