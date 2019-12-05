import {getList, delBook} from './service';

const ePub = window.ePub;
export default {
  data() {
    return {
      bookList: [],
      bookFile: null,
      uploadAction: 'http://120.25.249.22:8094/book/uploadBook.json',
      uploadData: {
        'fsize': 100000,
      },
      uploadFileList: [],
      progress: 0,
      isUploading: false,
    };
  },
  created() {
    this.getBookList();
  },
  methods: {
    getBookList() {
      this.bookList = [];
      getList().then(async res => {
        if (res && res.data && Array.isArray(res.data)) {
          for (let i = 0; i < res.data.length; i++) {
            let book = ePub('http://120.25.249.22:8094/' + res.data[i].path);
            let info;
            if (book.isOpen) {
              info = await book.loaded.metadata;
            }
            this.bookList.push({
              id: res.data[i].id,
              title: info ? info.title : res.data[i].name.split('.')[0],
              path: res.data[i].path,
              cover: book.cover,
            });
          }
        }
      }, error => {
        this.$message.error(error);
      });
    },
    delBook(id) {
      this.$confirm('此操作将删除该图书, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        const params = {
          'bookId': id,
        };
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
    },
    uploading(event, file, fileList) {
      this.isUploading = true
      this.progress = parseInt(file.percentage)
    },
    bookHandleChange(file, fileList) {
      this.uploadFileList = fileList.slice();
    },
    bookHandleSuccess(response, file) {
      this.isUploading = false
      this.$message({
        message: '图书上传成功',
        type: 'success',
      });
      this.getBookList();
    },
    beforeBookUpload(file) {
      if (file && file.type === 'application/epub+zip') {
        this.uploadData.cmfile = file
        return true;
      } else {
        this.$message.error('上传的图书必须为epub格式!');
        return false;
      }
    },
    handleError() {
      this.isUploading = false
      this.$message.error('上传出错');
    },
    delUploadingBook() {
      this.isUploading = false
      this.$refs.uploadBook.abort()
    }
  },
};

