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
					<el-select v-model="fontType" placeholder="请选择" style="width: 100%" @change="setFont">
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
						<p :class="lineHeight == 1.6 ? 'active':''" @click="setLineHeight(1.6)">
							<img src="../../assets/imgs/lineheight-1.6.png" alt="">
						</p>
						<p :class="lineHeight == 2 ? 'active':''" @click="setLineHeight(2)">
							<img src="../../assets/imgs/lineheight-2.png" alt="">
						</p>
						<p :class="lineHeight == 2.4 ? 'active':''" @click="setLineHeight(2.4)">
							<img src="../../assets/imgs/lineheight-2.4.png" alt="">
						</p>
						<p :class="lineHeight == 1.2 ? 'active':''" @click="setLineHeight(1.2)">
							原
						</p>
					</div>
				</el-form-item>
				<el-form-item label="主题">
					<div class="selectBox clearfix">
						<p :class="background === 'default' ? 'active':''"
						   @click="setBackground('default')">
							<span style="background: #FFFFFF"></span>
						</p>
						<p :class="background === 'bright' ? 'active':''"
						   @click="setBackground('bright')">
							<span style="background: #FFDDAA"></span>
						</p>
						<p :class="background === 'eyeProtection' ? 'active':''"
						   @click="setBackground('eyeProtection')">
							<span style="background: #BFE2CB"></span>
						</p>
						<p :class="background === 'night' ? 'active':''"
						   @click="setBackground('night')">
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

			.mu-bottom-item {
				&:first-child {
					i {
						display: none;
					}
					.mu-bottom-item-wrapper {
						background: url("../../assets/imgs/close.png") no-repeat;
						background-size: 24px 24px;
						background-position: center;
					}
				}
			}
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
					cursor: pointer;
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
