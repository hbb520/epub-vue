<template>
	<div id="search">
		<mu-bottom-nav>
			<div class="title clearfix">
				<i class="iconfont iconclose" @click="close()"></i>
				<p>搜索</p>
			</div>
		</mu-bottom-nav>
		<div class="search-container">
			<div class="box">
				<mu-text-field v-model="keyword" placeholder="全文搜索" action-icon="search"
				               :action-click="search" style="width: 100%"></mu-text-field>
			</div>
			<div class="list">
				<div class="result clearfix">
					<p class="wordOverflow3">渐渐地，我们又鼓起了勇气，决定渐渐地，
						<span>搜索</span>
						我们又鼓起了勇气，决定渐渐地，我们又鼓起了勇气，决定渐渐地，我们又鼓起了勇气，决定渐渐地，我们又鼓起了勇气，决定我们又鼓起了勇气，决定</p>
				</div>
				<div class="result clearfix">
					<p class="wordOverflow3">渐渐地，我们又鼓起了勇气，决定渐渐地，
						<span>搜索</span>
						我们又鼓起了勇气，决定渐渐地，我们又鼓起了勇气，决定渐渐地，我们又鼓起了勇气，决定渐渐地，我们又鼓起了勇气，决定我们又鼓起了勇气，决定</p>
				</div>
			</div>
			<div>{{ arr }}</div>
<!--			<div class="noContent">-->
<!--				<p>请输入搜索内容</p>-->
<!--			</div>-->
<!--			<div class="noResult">-->
<!--				<p>请输入搜索内容</p>-->
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
	#search {
		.mu-bottom-nav{
			color: #ffffff;
			background-color: #223FEE;
			.title {
				width: 100%;
				i, p {
					float: left;
					color: #FFFFFF;
					font-size: 24px;
					line-height: 56px;
				}
				i {
					width: 80px;
				}
				p {
					width: calc(100% - 80px);
					text-align: left;
				}
			}
		}
		.search-container {
			height: calc(100vh - 56px);
			.mu-input {
				margin-bottom: 8px;
			}
		}
		@media (min-width: 600px) {
			.mu-bottom-nav{
				height: 64px;
			}
			.title {
				i, p {
					line-height: 64px;
				}
			}
			.search-container {
				height: calc(100vh - 64px);
			}
		}
	}
</style>
