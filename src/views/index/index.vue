<template>
  <div class="app-container" id="index-container">
    <mu-container>
      <mu-appbar style="width: 100%;" color="primary" class="appbar-header">
        <!--      <div style="max-width: 1540px;margin: 0 auto">-->
        <mu-button icon slot="left" @click="$goLink('/list')">
          <mu-icon value="navigate_before" ></mu-icon>
        </mu-button>

        <mu-button flat slot="right" @click="menu_click">
          <mu-icon value="menu"></mu-icon>
        </mu-button>
        <mu-button flat slot="right" @click="spellcheck_click">
          <mu-icon value="spellcheck"></mu-icon>
        </mu-button>
        <mu-button flat slot="right" @click="library_books_click">
          <mu-icon value="library_books"></mu-icon>
        </mu-button>
        <mu-button flat slot="right" @click="search_click">
          <mu-icon value="search"></mu-icon>
        </mu-button>
        <mu-button flat slot="right" @click="bookmark_border_click">
          <mu-icon value="bookmark_border"></mu-icon>
        </mu-button>
        <mu-button flat slot="right" @click="crop_free_click">
          <mu-icon value="crop_free"></mu-icon>
        </mu-button>
        <!--      </div>-->
      </mu-appbar>
      <div id="wrapper">
        <div id="area"></div>
        <div class="page-divider"></div>
      </div>
      <div id="prev" class="arrow" @click="prev" v-if="book">‹</div>
      <div id="next" class="arrow" @click="next" v-if="book">›</div>

      <mu-drawer :open.sync="drawer_open" :docked="false" :right="true">
        <mu-list>
          <mu-list-item button>
            <mu-list-item-title>Menu Item 1</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>Menu Item 2</mu-list-item-title>
          </mu-list-item>
          <mu-list-item @click="drawer_open = false" button>
            <mu-list-item-title>Close</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-drawer>
    </mu-container>
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
