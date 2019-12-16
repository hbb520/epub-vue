<template>
	<div class="app-container" id="index-container">
		<div class="bookContainer">
			<div class="header">
				<mu-appbar style="width: 100%;" color="primary"
				           :class="bookmarksStatus ? 'otherHeader appbar-header' : 'appbar-header'">
					<!--      <div style="max-width: 1540px;margin: 0 auto">-->
					<mu-button icon slot="left" @click="book.destroy();$goLink('/list')">
						<img src="../../assets/imgs/return.png" alt="" style="width: 30px;">
					</mu-button>
					<mu-button flat slot="right" @click="menu_click">
						<img src="../../assets/imgs/menu.png" alt="" style="width: 30px; height: 24px">
					</mu-button>
					<mu-button flat slot="right" @click="spellcheck_click">
						<img src="../../assets/imgs/font.png" alt="" style="width: 30px;">
					</mu-button>
					<mu-button flat slot="right" @click="setPageType" :class="singlePageStatus ? 'active' : ''">
						<img v-if="!singlePageStatus" src="../../assets/imgs/double.png" alt="" style="width: 30px;">
						<img v-if="singlePageStatus" src="../../assets/imgs/single.png" alt="" style="width: 30px;">
					</mu-button>
					<mu-button flat slot="right" @click="search_click">
						<img src="../../assets/imgs/search.png" alt="" style="width: 30px;">
					</mu-button>
					<mu-button flat slot="right" @click="setBookmarks">
						<img v-if="!bookmarksStatus" src="../../assets/imgs/bookmarks.png" alt="" style="width: 30px;">
						<img v-if="bookmarksStatus" src="../../assets/imgs/bookmarksChecked.png" alt=""
						     style="width: 30px;">
					</mu-button>
					<mu-button flat slot="right" @click="setFullscreen">
						<img v-if="!fullScreenStatus" src="../../assets/imgs/fullscreen.png" alt=""
						     style="width: 30px;">
						<img v-if="fullScreenStatus" src="../../assets/imgs/exitfullscreen.png" alt=""
						     style="width: 30px;">
					</mu-button>
				</mu-appbar>
			</div>
			<div id="wrapper">
				<div class="title clearfix">
					<span>当前位置：</span>
					<span @click="$goLink('/list')">首页</span>
					<span v-if="bookInfo.title">></span>
					<span v-if="bookInfo.title" class="wordOverflow" style="width: 80%">{{ bookInfo.title }}</span>
				</div>
				<div class="book-container clearfix">
					<div :class="singlePageStatus ? ('bookBox singlePage ' + theme) : ('bookBox ' + theme)">
						<div class="prev" @click="prev" v-if="prevStatus">
							<i class="iconfont iconleft"></i>
						</div>
						<div class="top clearfix">
							<span class="wordOverflow" style="width: 50%">{{ bookInfo.title }}</span>
							<i class="iconfont iconsign" v-if="bookmarksStatus"></i>
							<span class="wordOverflow">{{ bookInfo.currentChapter }}</span>
						</div>
						<div id="book" v-loading="bookLoading" element-loading-text="图书加载中, 请耐心等待..."
						     element-loading-spinner="el-icon-loading"
						     element-loading-background="rgba(0, 0, 0, 0.6)"></div>
						<div class="bottom">
							<span v-if="bookInfo.currentPage && bookInfo.totalPage && !singlePageStatus">
								{{this.bookInfo.currentPage}}/{{this.bookInfo.totalPage}}</span>
							<span v-if="bookInfo.currentPage && bookInfo.totalPage">
								{{this.bookInfo.currentPage}}/{{this.bookInfo.totalPage}}</span>
						</div>
						<div class="next" @click="next" v-if="nextStatus">
							<i class="iconfont iconright"></i>
						</div>
						<img v-if="!singlePageStatus" class="middleLine"
						     src="../../assets/imgs/middleLine.png" alt="">
					</div>
				</div>
			</div>

			<progress-slider v-if="progress !== null" :progress.sync="progress" :tips="progressTips"
			                 @change="onProgressChange" @prev="!drawer_open && prev()"
			                 @next="!drawer_open && next()"></progress-slider>
			<mu-drawer :open.sync="drawer_open" :docked="false" :right="true" class="drawer-container"
			           @close="dialogHandle">
				<catalog v-if="catalogStatus" :id="id" :chapterList="chapterDetailList"
				         :currentChapter="currentChapter"
				         @closeDialog="dialogHandle" @goToChapter="goToChapter"
				         @gotoBookmarks="gotoBookmarks" @gotoNote="gotoBookmarks"
				         @bookmarksChange="bookmarksChange" @noteChange="noteChange"></catalog>
				<theme v-if="themeStatus" @closeDialog="dialogHandle"
				       @setFont="setFont" @setFontSize="setFontSize"
				       @setLineHeight="setLineHeight" @setBackground="setBackground"></theme>
				<search v-if="searchStatus" @closeDialog="dialogHandle" :list.sync="searchResult"
				        @search="search" @gotoResult="gotoBookmarks"></search>
			</mu-drawer>

			<div id="toolTips" v-if="toolTipsStatus" :style="{'top': toolTipsMode === 'add' ? (toolTipsTop + 60 + 'px') : (toolTipsTop + 'px'),
		'left': toolTipsLeft + 'px', 'height': toolTipsMode === 'add' ? '60px' : '120px'}">
				<div class="colorList clearfix" v-if="toolTipsMode === 'edit'">
					<p :class="selectedColorClassName === 'green' ? 'active' : ''">
						<span style="background: #1CB555" @click="changeUnderlineColor('green')"></span></p>
					<p :class="selectedColorClassName === 'orange' ? 'active' : ''">
						<span style="background: #F19149" @click="changeUnderlineColor('orange')"></span></p>
					<p :class="selectedColorClassName === 'blue' ? 'active' : ''">
						<span style="background: #00A0E9" @click="changeUnderlineColor('blue')"></span></p>
					<p :class="selectedColorClassName === 'violet' ? 'active' : ''">
						<span style="background: #C490BF" @click="changeUnderlineColor('violet')"></span></p>
				</div>
				<div class="tool clearfix">
					<p @click="copyWord()">复制</p>
					<p @click="share()">分享</p>
					<p v-if="toolTipsMode === 'add'" @click="createUnderline()">划线</p>
					<p v-if="toolTipsMode === 'edit'" @click="clearUnderline()">清除</p>
					<p @click="openAnnotateDialog()">批注</p>
				</div>
			</div>
			<div id="annotate" :class="annotateShowAtTheBottom ? '' : 'top'" v-if="annotateStatus"
			     :style="{'top': annotateTop + 'px', 'left': annotateLeft + 'px'}">
				<p>批注</p>
				<p class="closeBtn" @click="closeAnnotateDialog()">关闭</p>
				<span class="wordOverflow">{{ currentHandleWord }}</span>
				<el-input type="textarea" v-model="annotateWord" :rows="5"></el-input>
				<p class="complete" @click="createAnnotate()">完 成</p>
			</div>
			<div id="noteTipsList">
				<!--			noteTipsList-->
				<div id="noteTips" v-for="(item, index) in noteTipsList" :key="index"
				     :class="item.underlineClass" :style="{'top': item.top + 'px','left': item.left + 'px'}">
					<div class="clearfix" @click="item.isShowed = !item.isShowed; annotateStatus = false;
				toolTipsStatus = false">
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div class="content" v-if="item.isShowed">
						<p class="wordOverflow" @click.stop="editAnnotate(item)">{{ item.annotation }}</p>
					</div>
				</div>
			</div>
			<div id="imgDialog" v-if="imgDialogStatus" @click="imgDialogStatus = false">
				<img :src="imgSrc" alt="">
			</div>
			<div id="message" v-if="messageStatus">
				<p class="wordOverflow">{{ messageContent }}</p>
			</div>
		</div>
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
			z-index: 2100 !important;
		}

		.mu-appbar {
			width: 100%;
			max-width: 1480px;
			margin: 0 auto;
			box-shadow: none;
		}

		.mu-button {
			width: 60px;
			height: 60px;
			margin: 0 5px;
			border-radius: 50%;
		}

		.otherHeader {
			.mu-button {
				&:nth-child(5) {
					&::before {
						content: "";
						position: absolute;
						left: 0;
						right: 0;
						top: 0;
						bottom: 0;
						background-color: currentColor;
						opacity: .12;
					}
				}
			}
		}

		#annotate {

		}

		.epub-view {
			svg {
				g {
					rect {
						stroke: none;
					}

					line {
						stroke-opacity: 1;
					}

					&.default {
						cursor: pointer;

						line {
							stroke: #3652F8;
						}
					}

					&.green {
						cursor: pointer;

						line {
							stroke: #1CB555;
						}
					}

					&.orange {
						cursor: pointer;

						line {
							stroke: #F19149;
						}
					}

					&.blue {
						cursor: pointer;

						line {
							stroke: #00A0E9;
						}
					}

					&.violet {
						cursor: pointer;

						line {
							stroke: #C490BF;
						}
					}
				}
			}
		}
	}
</style>
