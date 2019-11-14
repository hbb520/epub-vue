<template>
  <div class="app-container" id="book-list-containe">
    <mu-appbar style="width: 100%;" color="primary" class="appbar-header">
      <div style="max-width: 1540px;margin: 0 auto">
        <mu-button icon slot="left">
          <mu-icon value="book"></mu-icon>
        </mu-button>
        在线书城
      </div>
    </mu-appbar>
    <ul class="book-list-ul">
      <li class="item" v-for="(item,index) in 50">
        <div class="img-box" @click="$goLink('/index/'+index)">
        </div>
        <div class="book-name">
          水文地质工程地质
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import index from './index'

  export default index
</script>
<style rel="stylesheet/scss" lang="scss">
  /*@import '@/styles/mixin.scss';*/
  @import "./index.scss";
</style>
