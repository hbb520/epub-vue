<template>
	<div id="catalog">
		<mu-bottom-nav :value.sync="menu" @change="toggleMenu">
			<mu-bottom-nav-item :value="0" icon="close"></mu-bottom-nav-item>
			<mu-bottom-nav-item :value="1" title="目录"></mu-bottom-nav-item>
			<mu-bottom-nav-item :value="2" title="书签"></mu-bottom-nav-item>
			<mu-bottom-nav-item :value="3" title="笔记"></mu-bottom-nav-item>
		</mu-bottom-nav>
		<div class="catalog-container" v-if="menu === 1">
			<div class="list">
				<div v-for="(item, index) in chapterList" :key="index"
				     :class="item.href === currentChapter.href ? 'chapter active clearfix' : 'chapter clearfix'">
					<p class="wordOverflow" @click="goToChapter(item)">{{ item.label }}</p>
					<span>1</span>
				</div>
			</div>
		</div>
		<div class="bookmark-container" v-if="menu === 2">
			<div class="list" v-if="bookmarksList.length > 0">
				<div class="bookmark clearfix" v-for="(item, index) in bookmarksList" :key="index">
					<p class="clearfix">
<!--						<span>11-16 10:30</span>-->
						<span>{{ parseTime(item.createTime) }}</span>
						<i class="iconfont icondelete" @click="delBookmarks(item.id)"></i>
						<span>55</span>
					</p>
					<p class="content wordOverflow2" @click="getoBookmarks(item.startCfi)">{{ item.word }}</p>
				</div>
			</div>
			<div class="noBookmark" v-if="bookmarksList.length <= 0">
				<p>暂时没有书签</p>
				<p>在阅读时点击按钮<i class="iconfont icontag"></i>添加书签</p>
			</div>
		</div>
		<div class="note-container" v-if="menu === 3">
			<div class="list">
				<div class="note clearfix">
					<p class="clearfix">
						<span><i>.</i>11-16 10:30</span>
						<i class="iconfont icondelete"></i>
						<span>55</span>
					</p>
					<p class="content wordOverflow2">中亚细亚高原，它不但是中国的地理高度，也是中国的精神高度，每一个忙忙碌碌的现代人，他都有必要</p>
					<div class="bottom clearfix">
						<p class="tips">注</p>
						<p class="remarks wordOverflow2">中国地理高度，也是中国精神高度，每一个忙忙碌碌的现代人。</p>
					</div>
				</div>
			</div>
<!--			<div class="noNote">-->
<!--				<p>暂时没有笔记</p>-->
<!--				<p>在阅读时拖动鼠标选中文字添加笔记</p>-->
<!--			</div>-->
		</div>
		<div class="bookmark-container" v-if="menu === 2">
			<div class="list">
				<div class="bookmark clearfix">
					<p class="clearfix">
						<span>11-16 10:30</span>
						<i class="iconfont icondelete"></i>
						<span>55</span>
					</p>
					<p class="content wordOverflow2">中亚细亚高原，它不但是中国的地理高度，也是中国的精神高度，每一个忙忙碌碌的现代人，他都有必要</p>
				</div>
			</div>
<!--			<div class="noBookmark">-->
<!--				<p>暂时没有书签</p>-->
<!--				<p>在阅读时点击按钮<i class="iconfont icontag"></i>添加书签</p>-->
<!--			</div>-->
		</div>
		<div class="note-container" v-if="menu === 3">
			<div class="list">
				<div class="note clearfix">
					<p class="clearfix">
						<span><i>.</i>11-16 10:30</span>
						<i class="iconfont icondelete"></i>
						<span>55</span>
					</p>
					<p class="content wordOverflow2">中亚细亚高原，它不但是中国的地理高度，也是中国的精神高度，每一个忙忙碌碌的现代人，他都有必要</p>
					<div class="bottom clearfix">
						<p class="tips">注</p>
						<p class="remarks wordOverflow2">中国地理高度，也是中国精神高度，每一个忙忙碌碌的现代人。</p>
					</div>
				</div>
			</div>
<!--			<div class="noNote">-->
<!--				<p>暂时没有笔记</p>-->
<!--				<p>在阅读时拖动鼠标选中文字添加笔记</p>-->
<!--			</div>-->
		</div>
	</div>
</template>

<script>
  import index from './index';
  export default index;
</script>

<style scoped rel="stylesheet/scss" lang="scss">
	@import './index.scss';
</style>
<style rel="stylesheet/scss" lang="scss">
	#catalog {
		.mu-bottom-nav{
			color: #ffffff;
			background-color: #223FEE;
			.mu-bottom-item {
				flex: 3;
				&:first-child {
					flex: 1;
				}
				&.mu-bottom-item-active {
					.mu-bottom-item-wrapper {
						line-height: 40px;
						.mu-bottom-item-text {
							position: relative;
							color: #ffffff;
							font-size: 24px;
							opacity: 1;
							&:before {
								content: '';
								width:20px;
								height:4px;
								position: absolute;
								bottom: -2px;
								left: 0;
								right: 0;
								margin: auto;
								background:rgba(255,255,255,1);
								border-radius:2px;
							}
						}
					}
				}
				.mu-bottom-item-wrapper {
					line-height: 44px;
					.mu-icon {
						width: 30px;
						margin: 7px auto;
						color: #ffffff;
						font-size: 30px;
						line-height: 30px;
					}
					.mu-bottom-item-text {
						color: #ffffff;
						font-size: 20px;
						opacity: 0.6;
					}
				}
			}
		}
		.catalog-container, .bookmark-container, .note-container {
			height: calc(100vh - 56px);
		}
		@media (min-width: 600px) {
			.mu-bottom-nav{
				height: 64px;
				.mu-bottom-item {
					.mu-bottom-item-wrapper {
						line-height: 52px;
						.mu-icon {
							margin: 11px auto;
						}
					}
					&.mu-bottom-item-active {
						.mu-bottom-item-wrapper {
							line-height: 48px;
						}
					}
				}
			}
			.catalog-container, .bookmark-container, .note-container {
				height: calc(100vh - 64px);
			}
		}
	}
</style>
