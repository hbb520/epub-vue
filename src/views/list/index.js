import { getList } from './service'

export default {
  data() {
    return {
      bookList: [],
      bookFile: null,
      uploadFileList: [],
    };
  },
  components: {},
  mounted() {

  },
  created() {
    this.getBookList()
  },
  methods: {
    getBookList() {
      getList().then( res => {
        this.bookList = res.data.items
      }, error => {
        this.$message.error(error)
      })
    },
    addBook(obj) {
      this.bookList.push(obj)
    },
    delBook(index) {
      this.bookList.splice(index, 1)
    },
    bookHandleChange(file, fileList) {
      this.uploadFileList = fileList.slice();
    },
    bookHandleSuccess(response, file) {
      this.addBook({
        id: response.data[0].id,
        title: response.data[0].title,
        cover: response.data[0].cover,
      })
      this.$message({
        message: '图书上传成功',
        type: 'success',
      });
    },
    beforeBookUpload(file) {
      if (file && file.type === 'application/epub+zip') {
        return true;
      } else {
        this.$message.error('上传的图书必须为epub格式!');
        return false;
      }
    },
    handleError() {
      this.$message.error('上传出错');
    },
  },
};

