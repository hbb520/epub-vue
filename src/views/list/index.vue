<template>
	<div id="book-list-container" :class="isPhoneClient ? 'mobileContainer' : 'pcContainer'">
		<mu-appbar style="width: 100%;" color="primary" class="appbar-header">
			<div style="max-width: 1540px; padding: 0 30px; margin: 0 auto">
				<mu-button icon slot="left">
<!--					<mu-icon value="book"></mu-icon>-->
					<i class="iconfont iconbook"></i>
				</mu-button>
				在线书城
			</div>
		</mu-appbar>
		<div class="book-list-ul">


		<ul class="clearfix">
			<li class="item" v-for="(item, index) in bookList" :key="index">
				<div class="img-box" @click="$goLink(isPhoneClient ? '/mobileIndex' : '/index',
				{'id': item.id, 'path': item.path})">
					<div class="img" :class="item.cover ? '' : 'nocover'" :style="{'backgroundImage':
					item.cover ? ('url(' + item.cover +')'): 'none' }"></div>
				</div>
				<div class="book-name wordOverflow">{{ item.title }}</div>
				<p v-if="!isPhoneClient" class="delBtn" @click="delBook(item.id)">删除</p>
				<p v-if="isPhoneClient" class="delBtn" @click="delBook(item.id)">
					<i class="iconfont iconclose"></i>
				</p>
			</li>
			<li class="item" v-if="isUploading">
				<div class="img-box">
					<el-progress type="circle" :percentage="progress"
					             style="margin-top: 50px"></el-progress>
				</div>
				<div class="book-name wordOverflow">{{ uploadFileList[0].name }}</div>
				<p v-if="!isPhoneClient" class="delBtn" @click="delUploadingBook()">删除</p>
				<p v-if="isPhoneClient" class="delBtn" @click="delUploadingBook()">
					<i class="iconfont iconclose"></i>
				</p>
			</li>
			<li class="item" v-show="!isUploading">
				<el-upload
						ref="uploadBook"
						class="book-uploader"
						:action="uploadAction"
						:show-file-list="false"
						:data="uploadData"
						:on-progress="uploading"
						:on-change="bookHandleChange"
						:on-success="bookHandleSuccess"
						:on-error="handleError"
						:before-upload="beforeBookUpload">
					<div slot="trigger" class="upload-book">
						<i class="iconfont iconadd"></i>
						<span>点击上传图书</span>
					</div>
				</el-upload>
			</li>
		</ul>
		</div>
	</div>
</template>

<script>
  import index from './index';
  export default index;
</script>
<style scoped rel="stylesheet/scss" lang="scss">
	/*@import '@/styles/mixin.scss';*/
	@import "./index.scss";
</style>

<style rel="stylesheet/scss" lang="scss">
	#book-list-container{
		&.pcContainer{
			.mu-button {
				margin-left: -16px;
			}
		}
		.mu-button-wrapper {
			i {
				font-size: 24px;
			}
		}
		&.mobileContainer {
			.book-list-ul {
				.book-uploader {
					height: 0;
					padding-bottom: 140%;
					position: relative;

					.el-upload {
						position: absolute;
						display: block;
						width: 100%;
						height: 100%;


						.upload-book {
							display: block;
							width: 100%;
							height: 100%;
							position: relative;
							overflow: hidden;
							border: 1px solid #B5B5B5;


							input[type=file] {
								display: block;
								width: 100%;
								height: calc(100% + 27px);
								position: absolute;
								top: -27px;
								left: 0;
								z-index: 100;
								cursor: pointer;
							}

							i, span {
								position: absolute;
								left: 0;
								right: 0;
								margin: auto;
								color: #B5B5B5;
								text-align: center;
							}

							i {
								top: 30%;
								font-size: 50px;
								line-height: 50px;
							}

							span {
								bottom: 50px;
								font-size: 18px;
								line-height: 20px;
							}
						}
					}
				}
			}
		}
	}
</style>
