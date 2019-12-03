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
				<div class="img-box" @click="$goLink('/index', {'id': item.id, 'path': item.path})"
				     :style="{'backgroundImage': 'url('+ item.cover +')'}">
				</div>
				<div class="book-name">{{ item.title }}</div>
				<p class="delBtn" @click="delBook(item.id)">删除</p>
			</li>
			<li class="item">
				<el-upload
						ref="upload-book"
						class="book-uploader"
						:action="uploadAction"
						:upload="uploadHeaders"
						:show-file-list="false"
						:data="uploadData"
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
</template>

<script>
  import index from './index';
  export default index;
</script>
<style rel="stylesheet/scss" lang="scss">
	/*@import '@/styles/mixin.scss';*/
	@import "./index.scss";
</style>
