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
			<mu-button flat slot="right" @click="setPageType">
				<mu-icon value="library_books"></mu-icon>
			</mu-button>
			<mu-button flat slot="right" @click="search_click">
				<mu-icon value="search"></mu-icon>
			</mu-button>
			<mu-button flat slot="right" @click="setBookmarks">
				<mu-icon value="bookmark_border"></mu-icon>
			</mu-button>
			<mu-button flat slot="right" @click="setFullscreen">
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
				<span v-if="bookInfo.currentChapter">></span>
				<span v-if="bookInfo.currentChapter" class="last">{{ bookInfo.currentChapter }}</span>
			</div>
			<div class="book-container clearfix">
				<div class="prev" @click="prev" v-if="prevStatus">
					<i class="iconfont iconleft"></i>
				</div>
				<div :class="singlePageStatus ? ('bookBox singlePage ' + theme) : ('bookBox ' + theme)">
					<div class="top clearfix">
						<span>{{ bookInfo.title }}</span>
						<i class="iconfont iconsign" v-if="bookmarksStatus"></i>
						<span>{{ bookInfo.currentChapter }}</span>
					</div>
					<div id="book" v-loading="bookLoading"></div>
					<div class="bottom">
						<span v-if="bookInfo.currentPage && bookInfo.totalPage && !singlePageStatus">
							{{this.bookInfo.currentPage}}/{{this.bookInfo.totalPage}}</span>
						<span v-if="bookInfo.currentPage && bookInfo.totalPage">
							{{this.bookInfo.currentPage}}/{{this.bookInfo.totalPage}}</span>
					</div>
				</div>
				<div class="next" @click="next" v-if="nextStatus">
					<i class="iconfont iconright"></i>
				</div>
			</div>
		</div>

		<progress-slider v-if="progress !== null" :progress.sync="progress" :tips="progressTips"
		                 @change="onProgressChange"></progress-slider>
		<mu-drawer :open.sync="drawer_open" :docked="false" :right="true" class="drawer-container" @close="dialogHandle">
			<catalog v-if="catalogStatus" :id="id" :chapterList="book.navigation.toc" :currentChapter="currentChapter"
			         @closeDialog="dialogHandle" @goToChapter="goToChapter"
			         @gotoBookmarks="gotoBookmarks"></catalog>
			<theme v-if="themeStatus" @closeDialog="dialogHandle"
			       @setFont="setFont" @setFontSize="setFontSize"
			       @setLineHeight="setLineHeight" @setBackground="setBackground"></theme>
			<search v-if="searchStatus" @closeDialog="dialogHandle" :list.sync="searchResult"
			        @search="search"></search>
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
		.mu-paper {
			z-index: 2100!important;
		}

		@media (min-width: 600px) {
			#progress {
				height: calc(100vh - 100px);
				top: 82px;
			}
		}
	}
</style>
