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
				<div class="chapter clearfix">
					<p class="wordOverflow">版权信息</p>
					<span>1</span>
				</div>
				<div class="chapter clearfix">
					<p class="wordOverflow">引言</p>
					<span>2</span>
				</div>
				<div class="chapter unit clearfix">
					<p class="wordOverflow">第一章 何为创新，何非创新</p>
					<span>20</span>
				</div>
				<div class="chapter active unit clearfix">
					<p class="wordOverflow">第二章 何为创新，何非创新</p>
					<span>20</span>
				</div>
				<div class="chapter unit clearfix">
					<p class="wordOverflow">第三章 何为创新，何非创新</p>
					<span>20</span>
				</div>
			</div>
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
		.catalog-container {
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
			.catalog-container {
				height: calc(100vh - 64px);
			}
		}
	}
</style>
