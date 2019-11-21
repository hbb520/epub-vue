<template>
	<div class="app-container" id="index-container">
		<mu-appbar style="width: 100%;" color="primary" class="appbar-header">
			<!--      <div style="max-width: 1540px;margin: 0 auto">-->
			<mu-button icon slot="left" @click="$goLink('/list')">
				<mu-icon value="navigate_before"></mu-icon>
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
			<div class="title clearfix">
				<span>当前位置：</span>
				<span @click="$goLink('/list')">首页</span>
				<span v-if="bookInfo.title">></span>
				<span v-if="bookInfo.title">{{ bookInfo.title }}</span>
				<span v-if="bookInfo.title">></span>
				<span v-if="bookInfo.title" class="last">土木工程</span>
			</div>
			<div class="book-container clearfix">
				<div class="prev" @click="prev">
					<i class="iconfont iconleft"></i>
				</div>
				<div class="bookBox">
					<div class="top clearfix">
						<span>{{ bookInfo.title }}</span>
						<i class="iconfont iconsign"></i>
						<span>生物学·视力矫正引发幻视？</span>
					</div>
					<div id="book" v-loading="bookLoading"></div>
					<div class="bottom">
						<span>{{this.bookInfo.currentPage}}/{{this.bookInfo.totalPage}}</span>
						<span>{{this.bookInfo.currentPage}}/{{this.bookInfo.totalPage}}</span>
					</div>
				</div>
				<div class="next" @click="next">
					<i class="iconfont iconright"></i>
				</div>
			</div>
		</div>
		<progress-slider v-if="progress !== null" :progress="progress"
		                 @change="onProgressChange" @valueChange="onValueChange"></progress-slider>
		<input type="file" @change="getFile" style="position: relative; z-index: 1000">
		<mu-drawer :open.sync="drawer_open" :docked="false" :right="true" class="drawer-container">
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
	</div>
</template>

<script>
  import index from './index';

  export default index;
</script>
<style scoped rel="stylesheet/scss" lang="scss">
	@import "./index.scss";
</style>

<style rel="stylesheet/scss" lang="scss">
	#index-container {
		#progress {
			height: calc(100% - 92px);
			position: fixed;
			top: 74px;
			right: 30px;

			.el-slider__runway, .el-slider__bar {
				width: 1px;
				margin: 0;
				background: rgba(34, 36, 48, 0.2);
			}

			.el-slider__button-wrapper {
				width: 10px;
				height: 36px;
				left: -4.5px;
				border-radius: 10px;
				background-color: #CCCCCC;
				border: 1px solid #999999;

				.el-slider__button {
					width: 100%;
					height: 100%;
					padding: 0;
					margin: 0;
					border-radius: 8px;
					background: transparent;
					border: none;
				}
			}
		}

		@media (min-width: 600px) {
			#progress {
				height: calc(100vh - 100px);
				top: 82px;
			}
		}
	}
</style>
