<template>
	<div class="app-container" id="book-list-container">
		<mu-appbar style="width: 100%;" color="primary" class="appbar-header">
			<div style="max-width: 1540px;margin: 0 auto">
				<mu-button icon slot="left">
<!--					<mu-icon value="book"></mu-icon>-->
					<i class="iconfont iconbook"></i>
				</mu-button>
				在线书城
			</div>
		</mu-appbar>
		<ul class="book-list-ul clearfix">
			<li class="item" v-for="(item, index) in bookList" :key="index">
				<div class="img-box" @click="$goLink(isPhoneClient ? '/mobileIndex' : '/index', {'id': item.id, 'path': item.path})">
					<div class="img" :style="{'backgroundImage': 'url('+ item.cover +')'}"></div>
				</div>
				<div class="book-name">{{ item.title }}</div>
				<p class="delBtn" @click="delBook(item.id)">删除</p>
			</li>
			<li class="item" v-if="isUploading">
				<div class="img-box">
					<el-progress type="circle" :percentage="progress"
					             style="margin-top: 50px"></el-progress>
				</div>
				<div class="book-name">{{ uploadFileList[0].name }}</div>
				<p class="delBtn" @click="delUploadingBook()">删除</p>
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
		<div id="book"></div>
	</div>
</template>

<script>
  import index from './index';
  export default index;
</script>
<style rel="stylesheet/scss" lang="scss">
	/*@import '@/styles/mixin.scss';*/
	@import "./index.scss";
</style>
