<template>
	<div class="app-container" id="mobile-container">
		<transition name="el-zoom-in-top">
			<mu-appbar style="width: 100%;" color="primary" v-if="menuDialogStatus"
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
				<mu-button flat slot="right" @click="search_click">
					<img src="../../assets/imgs/search.png" alt="" style="width: 30px;">
				</mu-button>
				<mu-button flat slot="right" @click="setBookmarks">
					<img v-if="!bookmarksStatus" src="../../assets/imgs/bookmarks.png" alt="" style="width: 30px;">
					<img v-if="bookmarksStatus" src="../../assets/imgs/bookmarksChecked.png" alt="" style="width: 30px;">
				</mu-button>
			</mu-appbar>
		</transition>
		<div id="wrapper" v-loading="bookLoading" element-loading-text="图书加载中, 请耐心等待..."
		     element-loading-spinner="el-icon-loading"
		     element-loading-background="rgba(0, 0, 0, 0.6)">
			<div :class="'bookBox ' + theme">
				<div class="top clearfix">
					<span class="wordOverflow" style="width: 80%">{{ bookInfo.currentChapter }}</span>
					<i class="iconfont iconsign" v-if="bookmarksStatus"></i>
				</div>
				<div id="book"></div>
				<div class="bottom">
                    <span v-if="bookInfo.currentPage && bookInfo.totalPage">
	                    {{this.bookInfo.currentPage}}/{{this.bookInfo.totalPage}}
                    </span>
				</div>
			</div>
		</div>
		<transition name="el-zoom-in-bottom">
			<div id="progress" v-if="menuDialogStatus">
				<div class="title clearfix">
					<p class="wordOverflow">{{ progressTips }}</p>
					<span v-if="progress > 0">{{ parseInt(progress) }}%</span>
				</div>
				<div class="sliderBox clearfix">
					<div class="left" @click="progressPrev()">
						<i class="iconfont iconleft"></i>
					</div>
					<div class="slider">
						<el-slider v-model="progress" :show-tooltip="false" @change="onProgressChange"></el-slider>
					</div>
					<div class="right" @click="progressNext()">
						<i class="iconfont iconright"></i>
					</div>
				</div>
			</div>
		</transition>
		<mu-drawer :open.sync="drawer_open" :docked="false" :right="true" class="drawer-container"
		           @close="dialogHandle">
			<mobile-catalog v-if="catalogStatus" :id="id" :chapterList="chapterDetailList"
			                :currentChapter="currentChapter"
			                @closeDialog="dialogHandle" @goToChapter="goToChapter"
			                @gotoBookmarks="gotoBookmarks" @gotoNote="gotoBookmarks"
			                @bookmarksChange="bookmarksChange" @noteChange="noteChange"></mobile-catalog>
			<mobile-theme v-if="themeStatus" @closeDialog="dialogHandle"
			              @setFont="setFont" @setFontSize="setFontSize"
			              @setLineHeight="setLineHeight" @setBackground="setBackground"></mobile-theme>
			<mobile-search v-if="searchStatus" @closeDialog="dialogHandle" :list.sync="searchResult"
			               @search="search" @gotoResult="gotoBookmarks"></mobile-search>
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
			<span class="wordOverflow">{{ currentHandleWord }}</span>
			<el-input type="textarea" v-model="annotateWord" :rows="5"></el-input>
			<p class="complete" @click="createAnnotate()">完 成</p>
		</div>
		<div id="noteTipsList">
			<!--      noteTipsList-->
			<div id="noteTips" v-for="(item, index) in noteTipsList" :key="index" :class="item.underlineClass"
			     :style="{'top': item.top + 'px','left': item.left + 'px'}"
			     @click="item.isShowed = !item.isShowed">
				<span></span>
				<span></span>
				<span></span>
				<div v-if="item.isShowed"><p class="wordOverflow">{{ item.annotation }}</p></div>
			</div>
		</div>
		<div id="imgDialog" v-if="imgDialogStatus" @click="imgDialogStatus = false">
			<img :src="imgSrc" alt="">
		</div>
		<div id="message" v-if="messageStatus">
			<p class="wordOverflow">{{ messageContent }}</p>
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
	#mobile-container {

		.mu-appbar {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			margin: auto;
			z-index: 500;
		}

		.mu-paper {
			z-index: 2100 !important;
		}
		.mu-button{
			width: 56px;
			height: 56px;
			margin: 0 5px;
			border-radius: 50%;
		}
		.otherHeader {
			.mu-button {
				&:nth-child(4) {
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
		.el-slider {
			.el-slider__runway{
				background-color: #BCC5FA;
			}
			.el-slider__bar {
				background-color: #223FEE;
			}
			.el-slider__button {
				position: relative;
				border-color: transparent;
				box-shadow:0px 0px 6px 0px rgba(0, 0, 0, 0.5);
				&:before {
					content: '';
					display: block;
					width: 6px;
					height: 6px;
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					margin: auto;
					background: #223FEE;
					border-radius: 8px;
				}
			}
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
						line {
							stroke: #3652F8;
						}
					}

					&.green {
						line {
							stroke: #1CB555;
						}
					}

					&.orange {
						line {
							stroke: #F19149;
						}
					}

					&.blue {
						line {
							stroke: #00A0E9;
						}
					}

					&.violet {
						line {
							stroke: #C490BF;
						}
					}
				}
			}
		}
	}
</style>
