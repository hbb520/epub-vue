import {getDetail} from './service';
import ProgressSlider from '../../components/slider/slider.vue';
import Catalog from '../catalog/index.vue';
import Theme from '../theme/index.vue';
import Search from '../search/index.vue';
import {
  getBookmarks,
  setBookmarks,
} from '../../utils/auth';

const ePub = window.ePub;

export default {
  data() {
    return {
      id: null,
      bookLoading: false,
      file: null,
      book: null,
      bookUrl: null,
      bookRendition: null,
      displayed: null,
      locations: null,
      drawer_open: false,
      progress: null,
      progressTips: null,
      bookInfo: {
        title: null,
        currentPage: null,
        totalPage: null,
        currentChapter: null,
      },
      prevStatus: true,
      nextStatus: true,
      catalogStatus: false,
      currentChapter: null,
      bookmarksStatus: false,
      bookWidth: 0,
      singlePageStatus: false,
      themeStatus: false,
      searchStatus: false,
      fullScreenStatus: false,
    };
  },
  components: {
    ProgressSlider,
    Catalog,
    Theme,
    Search,
  },
  mounted() {
    if (this.$route.query && this.$route.query.id) {
      this.id = parseInt(this.$route.query.id);
      this.getBookUrl(this.$route.query.id);
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
      this.bookUrl = 'https://img1.yunser.com/epub/test.epub';
      // this.bookUrl = 'https://s3.amazonaws.com/moby-dick/moby-dick.epub';
      this.bookInit(this.bookUrl);
      // getDetail(params).then(res => {
      //   this.bookUrl = res.data.items.url;
      //   this.bookInit(this.bookUrl);
      // }, error => {
      //   this.$message.error(error);
      // });
    },
    // 图书解析渲染
    bookInit(url) {
      this.bookLoading = true;
      this.book = ePub(url);
      this.bookRendition = this.book.renderTo('book', {
        width: '100%',
        height: '100%',
        spread: 'always',
      });
      this.display = this.bookRendition.display();
      this.bookWidth = document.getElementById('book').clientWidth;
      this.screenWidthChange();
      this.renderInit();
    },
    // 阅读器初始化
    renderInit() {
      // 图书加载完成
      this.book.ready.then(() => {
        return this.book.locations.generate();
      }).then(result => {
        this.bookLoading = false;
        console.log(111111);
        console.log(this.book);
        this.getBookInfo();
        // this.locations = this.book.locations;
        // 进度条初始化
        this.progress = 0;
        // this.bookInfo.totalPage = this.locations.total;
        // this.bookInfo.currentPage = this.locations._current;
      });

      // 章节变化
      this.bookRendition.on('rendered', (section) => {
        console.log(22222);
        let current = this.book.navigation &&
            this.book.navigation.toc.filter(val => {
              return val.href === section.href;
            })[0];
        this.currentChapter = section;
        this.bookInfo.currentChapter = current && current.label;
        this.progressTips = current && current.label;
      });
      // 页码变化
      this.bookRendition.on('relocated', location => {
        console.log(333333);
        this.locations = location;
        console.log(location);
        this.progress = location.start && location.start.percentage * 100;
        this.nextStatus = location.atEnd ? false : true;
        this.prevStatus = location.atStart ? false : true;
        this.bookmarksStatus = getBookmarks(this.id).some(val => {
          return val.cfi === location.start.cfi;
        });
      });

      // 布局变化
      this.bookRendition.on('layout', function(layout) {
        console.log(44444444);
      });
    },
    // 获取图书信息
    getBookInfo() {
      // 获取图书信息
      this.bookInfo.title = this.book.package.metadata.title;
    },
    // 进度条跳转
    onProgressChange(progress) {
      const percentage = progress / 100;
      const location = progress > 0 ? this.book.locations.cfiFromPercentage(
          percentage) : 0;
      this.bookRendition.display(location);
      // this.bookInfo.currentPage = this.book.locations.locationFromCfi(location);
    },
    prev() {
      if (this.book.package.metadata.direction === 'rtl') {
        this.bookRendition.next();
      } else {
        this.bookRendition.prev();
      }
    },
    next() {
      if (this.book.package.metadata.direction === 'rtl') {
        this.bookRendition.prev();
      } else {
        this.bookRendition.next();
      }
    },
    // 打开目录
    menu_click() {
      this.drawer_open = true;
      this.dialogHandle(() => {
        this.catalogStatus = true;
      });
    },
    // 章节跳转
    goToChapter(chapter) {
      this.bookRendition.display(chapter.href);
    },
    // 设置书签
    setBookmarks() {
      if (this.bookmarksStatus) {
        return true;
      }
      let obj = this.locations && this.locations.start;
      let content = this.bookRendition.getRange(obj.cfi) &&
          this.bookRendition.getRange(obj.cfi).commonAncestorContainer;
      let word = content && content.data;
      let isSign = word.split(' ').some(val => val === '\n');
      if ( !isSign) {
        setBookmarks(this.id, {
          id: this.id + new Date().getTime(),
          bookId: this.id,
          cfi: obj.cfi,
          href: obj.href,
          word: word,
          createTime: new Date().getTime(),
        });
        this.bookmarksStatus = true;
      }
    },
    // 书签跳转
    gotoBookmarks(cfi) {
      this.bookRendition.display(cfi);
    },
    // 打开选项弹框
    spellcheck_click() {
      this.drawer_open = true;
      this.dialogHandle(() => {
        this.themeStatus = true;
      });
    },
    // 打开搜索弹框
    search_click() {
      this.drawer_open = true;
      this.dialogHandle(() => {
        this.searchStatus = true;
      });
    },
    // 设置单/双页模式
    setPageType() {
      let width = document.body.clientWidth;
      if (width > 1133) {
        if (this.singlePageStatus) {
          this.bookRendition.resize(this.bookWidth);
        } else {
          this.bookRendition.resize(640);
        }
        this.singlePageStatus = !this.singlePageStatus;
      }
    },
    // 监听屏幕大小变化
    screenWidthChange() {
      window.onresize = () => {
        this.bookWidth = document.getElementById('book').clientWidth;
        this.bookRendition.resize(this.bookWidth);
        this.singlePageStatus = this.bookWidth < 800
            ? false
            : this.singlePageStatus;
      };
    },
    // 全屏
    setFullscreen() {
      if (this.fullScreenStatus) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
        this.fullScreenStatus = false;
      } else {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
          document.documentElement.webkitRequestFullScreen();
        }
        this.fullScreenStatus = true;
      }
    },
    // 打开弹窗
    dialogHandle(done, isClose) {
      this.catalogStatus = false;
      this.themeStatus = false;
      this.searchStatus = false;
      if (done) {
        if (typeof done === 'function') {
          done();
        }
      }
      if (isClose) {
        this.drawer_open = false;
      }
    },
  },
};

