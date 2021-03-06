import {getList, delBook} from './service';

const ePub = window.ePub;
export default {
  data() {
    return {
      bookList: [],
      bookFile: null,
      uploadAction: 'http://huake.qanzone.com:8094/book/uploadBook.json',
      uploadData: {
        'fsize': 100000,
      },
      uploadFileList: [],
      progress: 0,
      isUploading: false,
      isPhoneClient: false,
      dialogStatus: false,
      dialogId: null,
    };
  },
  created() {
    this.getBookList();
    this.judgeClient();
  },
  methods: {
    getBookList() {
      this.bookList = [];
      getList().then(res => {
        if (res && res.data && Array.isArray(res.data)) {
          for (let i = 0; i < res.data.length; i++) {
            let book = ePub(
                'http://huake.qanzone.com:8094/' + res.data[i].path);
            let name = res.data[i].name.toLowerCase();
            this.bookList.push({
              id: res.data[i].id,
              title: name ? name.split('.epub')[0] : null,
              path: res.data[i].path,
              cover: null,
            });
            book.ready.then((arr) => {
              book.archive.getBase64(book.cover).then(url => {
                this.bookList.map(item => {
                  if (item.id === res.data[i].id) {
                    item.title = arr[2].title;
                    item.cover = url;
                  }
                  return item;
                });
                book.destroy();
              });
            });
          }
        }
      }, error => {
        this.$message.error(error);
      });
    },
    delBook(id) {
      const params = {
        'bookId': id,
      };
      if ( !this.isPhoneClient) {
        this.$confirm('此操作将删除该图书, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
          delBook(params).then(res => {
            this.$message({
              type: 'success',
              message: '删除成功!',
            });
            this.getBookList();
          }, error => {
            this.$message.error(error);
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          });
        });
      } else {
        this.dialogStatus = true
        this.dialogId = id
      }
    },
    agree() {
      const params = {
        'bookId': this.dialogId,
      };
      delBook(params).then(res => {
        this.dialogStatus = false
        this.$message({
          type: 'success',
          message: '删除成功!',
        });
        this.getBookList();
      }, error => {
        this.$message.error(error);
      });
    },
    uploading(event, file, fileList) {
      this.progress = parseInt(file.percentage);
    },
    bookHandleChange(file, fileList) {
      this.uploadFileList = fileList.slice();
    },
    bookHandleSuccess(response, file) {
      this.isUploading = false;
      this.$message({
        message: '图书上传成功',
        type: 'success',
      });
      this.getBookList();
    },
    beforeBookUpload(file) {
      if (file && file.type === 'application/epub+zip') {
        this.uploadData.cmfile = file;
        this.isUploading = true;
        return true;
      } else {
        this.$message.error('上传的图书必须为epub格式!');
        return false;
      }
    },
    handleError() {
      this.isUploading = false;
      this.$message.error('上传出错');
    },
    delUploadingBook() {
      this.isUploading = false;
      this.$refs.uploadBook.abort();
    },
    judgeClient() {
      let sUserAgent = navigator.userAgent.toLowerCase();
      let bIsIpad = sUserAgent.match(/ipad/i) == 'ipad';
      let bIsIphoneOs = sUserAgent.match(/iphone os/i) == 'iphone os';
      let bIsMidp = sUserAgent.match(/midp/i) == 'midp';
      let bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4';
      let bIsUc = sUserAgent.match(/ucweb/i) == 'ucweb';
      let bIsAndroid = sUserAgent.match(/android/i) == 'android';
      let bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce';
      let bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile';
      if ( !(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc ||
          bIsAndroid || bIsCE || bIsWM)) {
        this.isPhoneClient = false;
      } else {
        this.isPhoneClient = true;
      }
    },
  },
};

