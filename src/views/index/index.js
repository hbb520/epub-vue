import {getDetail} from './service';
import ProgressSlider from '../../components/slider/slider.vue'

const ePub = window.ePub;
global.epub = ePub;

export default {
  data() {
    return {
      bookLoading: false,
      file: null,
      book: null,
      bookUrl: null,
      bookRendition: null,
      displayed: null,
      locations: null,
      drawer_open: false,
      progress: null,
      bookInfo: {
        title: null,
        currentPage: null,
        totalPage: null,
      }
    };
  },
  components: {
    ProgressSlider
  },
  mounted() {
    if (this.$route.query && this.$route.query.id) {
      this.id = this.$route.params.id;
      this.getBookUrl(this.$route.params.id);
      // this.bookInit('../../../books/TeaWar.epub')
    }
  },
  created() {
  },
  methods: {
    // 获取图书路径
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
    // 图书解析渲染
    bookInit(url) {
      this.bookLoading = true
      this.book = ePub(url);
      console.log(this.book)
      this.bookRendition = this.book.renderTo('book', {
        width: '100%',
        height: '100%'
      });
      console.log(this.bookRendition)
      this.displayed = this.bookRendition.display()
      console.log(this.display)
      this.renderInit()
      this.getBookInfo()
    },
    // 本地选择图书
    getFile(e) {
      this.book && this.book.destroy();
      this.bookInit(e.target.files[0]);
    },
    // 获取图书信息
    getBookInfo() {
      console.log(this.book)
      // 获取图书信息
      this.bookRendition.getMetadata().then(meta => {
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
    // 阅读器初始化
    renderInit() {
      // 图书加载完成
      this.book.ready.then( () => {
        return this.book.locations.generate(900)
      }).then( result => {
        this.bookLoading = false
        this.locations = this.book.locations
        // 进度条初始化
        this.progress = 0
        this.bookInfo.totalPage = this.locations.total
        this.bookInfo.currentPage = this.locations._current
      })
    },
    onValueChange(progress) {
      this.progress = progress
    },
    // 进度条跳转
    onProgressChange(progress) {
      const percentage = progress / 100
      const location = progress > 0 ? this.locations.cfiFromPercentage(percentage) : 0
      this.bookRendition.display(location)
      this.bookInfo.currentPage = this.locations.locationFromCfi(location)
    },
    prev() {
      this.bookRendition.prev().then(value => {

      });
      // this.bookInfo.currentPage = this.locations.getCurrentLocation()
      // this.progress = this.bookInfo.currentPage
    },
    next() {
      let one = this.bookRendition.next().then(value => {
        console.log(value)
      });
      // console.log(one)
      // this.bookInfo.currentPage = this.locations.getCurrentLocation()
      // this.progress = this.bookInfo.currentPage
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

