import {getDetail} from './service';

const ePub = window.ePub;
global.epub = ePub;

export default {
  data() {
    return {
      file: null,
      book: null,
      bookUrl: null,
      bookRendition: null,
      drawer_open: false,
      pageNumber: 50,
      bookInfo: {
        title: null,
        currentPage: null,
        totalPage: null,
      }
    };
  },
  components: {},
  mounted() {
    if (this.$route.query && this.$route.query.id) {
      this.id = this.$route.params.id;
      // this.getBookUrl(this.$route.params.id);
      // this.bookInit('../../../static/books/TeaWar.epub')
    }
  },
  created() {
  },
  methods: {
    getBookUrl(id) {
      const params = {
        'id': id,
      };
      getDetail(params).then(res => {
        this.bookUrl = res.data.items.url;
        // this.bookInit()
      }, error => {
        this.$message.error(error);
      });
    },
    bookInit(url) {
      this.book = new ePub(url);
      console.log(this.book)
      this.bookRendition = this.book.renderTo('book');
      console.log(this.bookRendition)
      this.display = this.bookRendition.display()
      console.log(this.display)
      // let reader = new FileReader();
      // reader.onload = e => {
      //   let content = e.target.result;
      //   this.book = ePub(content);
      //   this.bookRendition = this.book.renderTo('book');
      //   this.bookRendition.display()
      //   // this.getBookInfo();
      // };
      // reader.readAsArrayBuffer(file);
    },
    getFile(e) {
      this.book && this.book.destroy();
      this.bookInit(e.target.files[0]);
    },
    getBookInfo() {
      console.log(this.book)
      // 获取图书信息
      this.book.getMetadata().then(meta => {
        this.bookInfo.title = meta.bookTitle
      });
      // 获取图书章节
      this.book.getToc().then( toc => {
        // console.log(toc)
      })
      // 页数变化时 获取图书总页数
      this.book.pageListReady.then(pageList => {
        this.bookInfo.totalPage = this.book.pagination.totalPages
      })

    },

    setStyle() {
      // TODO ???
      if ( !this.book) {
        return;
      }
      // this.book.setStyle('font-size', this.options.fontSize + 'px')
      // this.book.setStyle('background-color', this.options.bgColor)
      // this.book.setStyle('font-family', this.options.fontFamily)
      // this.book.setStyle('line-height', 3)
      // this.book.renderer.forceSingle(false)
      // this.book.setStyle('color', this.themes[this.options.theme].color)
      // this.book.setStyle('background-color', this.themes[this.options.theme].bgColor)
    },
    prev() {
      this.book.prevPage();
    },
    next() {
      this.book.nextPage();
    },
    menu_click() {
      this.drawer_open = true;
    },
    spellcheck_click() {
      this.drawer_open = true;
    },
    library_books_click() {
      this.drawer_open = true;
    },
    search_click() {
      this.drawer_open = true;
    },
    bookmark_border_click() {
      this.drawer_open = true;
    },
    crop_free_click() {
      this.drawer_open = true;
    },
  },
};

