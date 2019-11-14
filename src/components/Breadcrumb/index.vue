<template>
  <el-breadcrumb class="app-breadcrumb" separator-class="el-icon-arrow-right">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index) in levelList[0].meta.title" :key="index">
        <span v-if="item.redirect==='noredirect'||index==levelList[0].meta.title.length-1"
              class="no-redirect">{{ item}}</span>
        <span v-else @click.prevent="handleLink(item)">{{ item }}</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
  import pathToRegexp from 'path-to-regexp'

  export default {
    data() {
      return {
        levelList: null,
        breadcrumbList: null,
        firstPath: null
      }
    },
    watch: {
      $route() {
        this.getBreadcrumb()
      }
    },
    created() {
      this.getBreadcrumb()
    },
    methods: {
      getBreadcrumb() {
        let matched = this.$route.matched.filter(item => item.name)

//      const first = matched[0]
//      if (first && first.name !== 'dashboard') {
//        matched = [{ path: '/dashboard', meta: { title: 'Dashboard' }}].concat(matched)
//      }

        this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
        this.firstPath = this.levelList[0].meta.menu
      },
      pathCompile(path) {
        // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
        const {params} = this.$route
        var toPath = pathToRegexp.compile(path)
        return toPath(params)
      },
      handleLink(item) {
        if (this.firstPath) {
          this.$router.push({
            'path': this.firstPath
          })
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 64px;

    .el-breadcrumb__inner span {
      color: #999999 !important;
      cursor: pointer;
    }
    .el-breadcrumb__inner span:hover {
      color: #2365F1 !important;
    }
    .el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover {
      span {
        font-weight: normal;
        color: #333333 !important;
        cursor: text;
      }

    }
    /*.no-redirect {*/
    /*color: #999999;*/
    /*cursor: text;*/
    /*}*/
  }
</style>
