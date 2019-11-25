<template>
	<div id="theme">
		<mu-bottom-nav>
			<div class="title clearfix">
				<i class="iconfont iconclose" @click="close()"></i>
				<p>选项</p>
			</div>
		</mu-bottom-nav>
		<div class="theme-container">
			<el-form ref="form" class="themeBox" label-position="top">
				<el-form-item label="字体">
					<el-select v-model="fontType" placeholder="请选择" style="width: 100%">
						<el-option
								v-for="(item, index) in fontTypeList"
								:key="index"
								:label="item.label"
								:value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="字号">
					<div class="setFontSize clearfix">
						<p @click="sub()">小</p>
						<span>{{ fontsize }}</span>
						<p @click="add()">大</p>
					</div>
				</el-form-item>
				<el-form-item label="排版">
					<div class="selectBox clearfix">
						<p :class="lineHeight === 20 ? 'active':''" @click="setLineHeight(20)">
							<img src="../../assets/imgs/menu.png" alt="">
						</p>
						<p :class="lineHeight === 25 ? 'active':''" @click="setLineHeight(25)">
							<img src="../../assets/imgs/menu.png" alt="">
						</p>
						<p :class="lineHeight === 30 ? 'active':''" @click="setLineHeight(30)">
							<img src="../../assets/imgs/menu.png" alt="">
						</p>
						<p :class="lineHeight === 35 ? 'active':''" @click="setLineHeight(35)">
							<img src="../../assets/imgs/menu.png" alt="">
						</p>
					</div>
				</el-form-item>
				<el-form-item label="主题">
					<div class="selectBox clearfix">
						<p :class="background === '#FFFFFF' ? 'active':''" @click="setBackground('#FFFFFF')">
							<span style="background: #FFFFFF"></span>
						</p>
						<p :class="background === '#FFDDAA' ? 'active':''" @click="setBackground('#FFDDAA')">
							<span style="background: #FFDDAA"></span>
						</p>
						<p :class="background === '#BFE2CB' ? 'active':''" @click="setBackground('#BFE2CB')">
							<span style="background: #BFE2CB"></span>
						</p>
						<p :class="background === '#141414' ? 'active':''" @click="setBackground('#141414')">
							<span style="background: #141414"></span>
						</p>
					</div>
				</el-form-item>
			</el-form>
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
	#theme {
		.mu-bottom-nav {
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

		.theme-container {
			height: calc(100vh - 56px);

			.themeBox {
				.el-form-item__label {
					padding-bottom: 0;
					color: #999999;
					font-size: 16px;
					line-height: 40px;
				}

				.el-input__inner {
					height: 50px;
					color: #5A5D6D;
					font-size: 20px;
					line-height: 50px;
				}
			}
		}

		@media (min-width: 600px) {
			.mu-bottom-nav {
				height: 64px;
			}
			.title {
				i, p {
					line-height: 64px;
				}
			}
			.theme-container {
				height: calc(100vh - 64px);
			}
		}
	}
</style>
