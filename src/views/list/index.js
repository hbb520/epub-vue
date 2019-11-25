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
      this.bookList = [
        {
          'id': 1,
          'title': '图书1',
          'cover': '../../../static/imgs/book.png'
        },
        {
          'id': 2,
          'title': '图书2',
          'cover': '../../../static/imgs/book.png'
        },
        {
          'id': 3,
          'title': '图书3',
          'cover': '../../../static/imgs/book.png'
        },
      ]
      // getList().then( res => {
      //   this.bookList = res.data.items
      // }, error => {
      //   this.$message.error(error)
      // })
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

