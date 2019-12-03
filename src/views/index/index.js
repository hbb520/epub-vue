import {getDetail} from './service';
import ProgressSlider from '../../components/slider/slider.vue';
import Catalog from '../catalog/index.vue';
import Theme from '../theme/index.vue';
import Search from '../search/index.vue';
import {
  getLS,
  setLS,
  getBookmarks,
  setBookmarks,
  getNote,
  setNote,
  removeNote,
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
      bookFrame: null,
      singlePageStatus: false,
      themeStatus: false,
      theme: null,
      searchStatus: false,
      searchResult: [],
      fullScreenStatus: false,
      toolTipsStatus: false,
      toolTipsMode: 'add', // 'add' || 'edit'
      toolTipsTop: 0,
      toolTipsLeft: 0,
      selectedInfo: {},
      selectedCfi: null,
      selectedColorClassName: null,
      currentHandleWord: null,
      currentHandleAnnotateWrod: null,
      annotateStatus: false,
      annotateShowAtTheBottom: true,
      annotateTop: 0,
      annotateLeft: 0,
      annotateWord: null,
      toolTipsList: [],
      noteTipsList: [],
      screenIsChange: false,
      imgDialogStatus: false,
      imgSrc: null,
      messageStatus: false,
      messageContent: null,
    };
  },
  components: {
    ProgressSlider,
    Catalog,
    Theme,
    Search,
  },
  mounted() {
    if (this.$route.query && this.$route.query.id && this.$route.query.path) {
      this.id = parseInt(this.$route.query.id);
      this.bookUrl = 'http://120.25.249.22:8094/' + this.$route.query.path
      this.getBookUrl(this.bookUrl);
    }
  },
  created() {

  },
  methods: {
    // 获取图书路径
    getBookUrl(url) {
      this.bookInit(url);
    },
    // 图书解析渲染
    bookInit(url) {
      this.bookLoading = true;
      this.book = ePub(url);
      this.bookRendition = this.book.renderTo('book', {
        width: '100%',
        height: '100%',
        spread: 'always',
        // spreads: true,
        // fixedLayout : true,
        ignoreClass: 'annotator-hl',
      });
      this.display = this.bookRendition.display();
      this.bookFrame = document.getElementById('book').getBoundingClientRect();
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
        this.setBookTheme();
        // 进度条初始化
        this.progress = 0;
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
        this.bookInfo.totalPage = this.book.navigation.toc.length;
        let currentPage = this.book.navigation.toc.map((val, ind) => {
          return {
            index: ind,
            ...val,
          };
        }).filter((val, ind) => {
          return val.href === this.locations.start.href;
        })[0];
        this.bookInfo.currentPage = currentPage && currentPage.index + 1;
        this.progress = location.start && location.start.percentage * 100;
        this.nextStatus = location.atEnd ? false : true;
        this.prevStatus = location.atStart ? false : true;
        this.bookmarksChange();
        this.noteChange();
        this.toolTipsStatus = false;
        this.annotateStatus = false;
        this.clearSelectInfo();
      });
      // 布局变化
      this.bookRendition.on('layout', function(layout) {
        console.log(44444444);
      });
      // 选中文字
      this.bookRendition.on('selected', (cfiRange, contents) => {
        let left = 0;
        let top = 0;
        let range = contents.range(cfiRange);
        let rangeObj = range.getBoundingClientRect();
        this.selectedCfi = cfiRange;
        this.selectedInfo = rangeObj;
        if ((rangeObj.left - 0.04 * this.bookFrame.width) %
            this.bookFrame.width < 6) {
          left = 0.08 * this.bookFrame.width + 5;
        }
        this.toolTipsTop = rangeObj.top + 55;
        // this.toolTipsTop = (rangeObj.top - top) % this.bookFrame.height + 55;
        // this.toolTipsLeft = rangeObj.left + 30 + rangeObj.width / 2;
        this.toolTipsLeft = (rangeObj.left - left) % this.bookFrame.width + 30 +
            rangeObj.width / 2;
        this.toolTipsStatus = true;
        this.toolTipsMode = 'add';
        this.book.getRange(cfiRange).then(result => {
          this.currentHandleWord = result.toString();
        });
      });

      // 鼠标松开
      this.bookRendition.on('mouseup', (event, contents) => {
        if (this.toolTipsStatus || this.annotateStatus) {
          this.toolTipsStatus = false;
          this.annotateStatus = false;
          this.clearSelectInfo();
        }
      });

      // 点击事件
      this.bookRendition.on('click', event => {
        // 点击目标为图片
        if (event.path[0].nodeName === 'IMG') {
          this.imgDialogStatus = true;
          this.imgSrc = event.path[0].src;
        }
      });

      // 点击选中文字
      this.bookRendition.on('markClicked', (cfiRange, object, contents) => {
        let left = 0;
        let top = 0;
        let range = contents.range(cfiRange);
        let rangeObj = range.getBoundingClientRect();
        this.selectedCfi = cfiRange;
        this.selectedInfo = rangeObj;
        this.selectedColorClassName = object && object.className;
        this.currentHandleAnnotateWrod = object.annotation
            ? object.annotation
            : null;
        if ((rangeObj.left - 0.04 * this.bookFrame.width) %
            this.bookFrame.width < 6) {
          left = 0.08 * this.bookFrame.width + 5;
        }
        this.toolTipsTop = rangeObj.top + 55;
        // this.toolTipsTop = (rangeObj.top - top) % this.bookFrame.height + 185
        // this.toolTipsLeft = rangeObj.left + 30 + rangeObj.width / 2;
        this.toolTipsLeft = (rangeObj.left - left) % this.bookFrame.width + 30 +
            rangeObj.width / 2;
        this.toolTipsStatus = true;
        this.toolTipsMode = 'edit';
        this.currentHandleWord = range.toString();
      });
    },

    // 复制文字
    copyWord() {
      let oInput = document.createElement('input');
      oInput.value = this.currentHandleWord;
      document.body.appendChild(oInput);
      oInput.select();
      document.execCommand('Copy');
      oInput.style.display = 'none';
      document.body.removeChild(oInput);
      this.toolTipsStatus = false;
      this.clearSelectInfo();
      this.message('内容已成功复制到粘贴板')
    },
    // 分享
    share() {
      this.toolTipsStatus = false;
      this.clearSelectInfo();
      this.message('分享成功！')
    },
    // 划线
    createUnderline() {
      this.bookRendition.annotations.add('underline', this.selectedCfi, {
        cfiRange: this.selectedCfi,
        className: 'default',
        annotation: '',
      }, () => {}, 'default', {});
      setNote(this.id, {
        id: this.id + new Date().getTime(),
        bookId: this.id,
        cfi: this.selectedCfi,
        word: this.currentHandleWord,
        type: 'underline',  // 'underline', 'annotation'
        underlineClass: 'default',
        annotation: '',
        createTime: new Date().getTime(),
      });
      this.toolTipsStatus = false;
      this.clearSelectInfo();
    },
    // 更换下划线颜色
    changeUnderlineColor(value) {
      this.bookRendition.annotations.remove(this.selectedCfi, 'underline');
      this.bookRendition.annotations.add('underline', this.selectedCfi, {
        cfiRange: this.selectedCfi,
        className: value,
        annotation: this.currentHandleAnnotateWrod,
      }, () => {}, value, {});
      removeNote(this.id, this.selectedCfi);
      setNote(this.id, {
        id: this.id + new Date().getTime(),
        bookId: this.id,
        cfi: this.selectedCfi,
        word: this.currentHandleWord,
        type: this.currentHandleAnnotateWrod ? 'annotation' : 'underline',  // 'underline', 'annotation'
        underlineClass: value,
        annotation: this.currentHandleAnnotateWrod,
        createTime: new Date().getTime(),
      });
      this.noteTipsList.map(val => {
        if (val.cfi === this.selectedCfi) {
          val.underlineClass = value;
        }
        return val;
      });
      this.clearSelectInfo();
      this.toolTipsStatus = false;
    },
    // 清除划线
    clearUnderline() {
      this.bookRendition.annotations.remove(this.selectedCfi, 'underline');
      removeNote(this.id, this.selectedCfi);
      this.noteTipsList = this.noteTipsList.filter(val => {
        return !(val.cfi === this.selectedCfi);
      });
      this.clearSelectInfo();
      this.toolTipsStatus = false;
    },
    // 打开批注编辑框
    openAnnotateDialog() {
      this.toolTipsStatus = false;
      let left = 0;
      let top = this.selectedInfo.top + 195 + this.selectedInfo.height;
      if ((top + 270) > document.body.clientHeight) {
        this.annotateShowAtTheBottom = false;
        this.annotateTop = top - 270 - this.selectedInfo.height - 20;
      } else {
        this.annotateShowAtTheBottom = true;
        this.annotateTop = top;
      }
      if ((this.selectedInfo.left - 0.04 * this.bookFrame.width) %
          this.bookFrame.width < 6) {
        left = 0.08 * this.bookFrame.width + 5;
      }
      this.annotateLeft = (this.selectedInfo.left - left) %
          this.bookFrame.width + this.bookFrame.left +
          this.selectedInfo.width / 2 - 250;
      this.annotateStatus = true;
      this.annotateWord = this.currentHandleAnnotateWrod;
    },
    // 批注
    createAnnotate() {
      if (this.annotateWord === null) {
        this.$message.warning('内容不能为空!');
      }
      this.bookRendition.annotations.remove(this.selectedCfi, 'underline');
      removeNote(this.id, this.selectedCfi);
      this.bookRendition.annotations.add('underline', this.selectedCfi, {
        cfiRange: this.selectedCfi,
        className: this.selectedColorClassName
            ? this.selectedColorClassName
            : 'default',
        annotation: this.annotateWord,
      }, () => {}, 'default', {});
      setNote(this.id, {
        id: this.id + new Date().getTime(),
        bookId: this.id,
        cfi: this.selectedCfi,
        word: this.currentHandleWord,
        type: 'annotation',  // 'underline', 'annotation'
        underlineClass: this.selectedColorClassName
            ? this.selectedColorClassName
            : 'default',
        annotation: this.annotateWord,
        createTime: new Date().getTime(),
      });
      let isExistence = this.noteTipsList.some(val => {
        return val.cfi === this.selectedCfi;
      });
      if (isExistence) {
        this.noteTipsList.map(item => {
          if (item.cfi === this.selectedCfi) {
            item.annotation = this.annotateWord;
          }
          return item;
        });
      } else {
        this.noteTipsList.push({
          id: this.id + new Date().getTime(),
          bookId: this.id,
          cfi: this.selectedCfi,
          word: this.currentHandleWord,
          type: 'annotation',  // 'underline', 'annotation'
          underlineClass: 'default',
          annotation: this.annotateWord,
          createTime: new Date().getTime(),
          isShowed: false,
          ...this.getNoteTipsPosition(this.selectedCfi),
        });
      }
      this.annotateStatus = false;
      this.clearSelectInfo();
    },
    // 获取批注标记坐标
    getNoteTipsPosition(cfi) {
      let left = 0;
      let top = 0;
      let otherRange = this.bookRendition.getRange(cfi).cloneRange();
      otherRange.collapse(false);
      let otherRangeObj = otherRange.getBoundingClientRect();
      if ((otherRangeObj.left - 0.04 * this.bookFrame.width) %
          this.bookFrame.width < 6) {
        left = 0.08 * this.bookFrame.width + 5;
      }
      return {
        top: otherRangeObj.top + otherRangeObj.height + this.bookFrame.top + 9 -
            (this.screenIsChange ? 20 : 0),
        left: (otherRangeObj.left - left) % this.bookFrame.width +
            this.bookFrame.left,
      };
    },
    // 清理选中信息
    clearSelectInfo() {
      this.toolTipsMode = 'add';
      this.selectedCfi = null;
      this.selectedColorClassName = null;
      this.currentHandleWord = null;
      this.currentHandleAnnotateWrod = null;
      this.annotateWord = null;
    },
    // 书签变更
    bookmarksChange() {
      this.bookmarksStatus = false;
      let startLocations = this.book.locations.locationFromCfi(
          this.locations.start.cfi);
      let endLocations = this.book.locations.locationFromCfi(
          this.locations.end.cfi);
      Promise.all(getBookmarks(this.id).map(item => {
        return new Promise((resolve, reject) => {
          this.chapterSearch(item.word, this.locations.start.index, results => {
            resolve(results);
          });
        });
      })).then(results => {
        this.bookmarksStatus = results.reduce((item1, item2) => {
          return item1.concat(item2);
        }, []).some(obj => {
          let bookmarksLocations = this.book.locations.locationFromCfi(
              obj.cfi);
          return bookmarksLocations >= startLocations && bookmarksLocations <
              endLocations;
        });
      });
    },
    // 笔记变更
    noteChange(cfi) {
      let noteList = getNote(this.id);
      this.bookRendition.annotations.remove(cfi, 'underline');
      let startLocations = this.book.locations.locationFromCfi(
          this.locations.start.cfi);
      let endLocations = this.book.locations.locationFromCfi(
          this.locations.end.cfi);
      this.toolTipsList = [];
      this.noteTipsList = [];
      for (let i = 0; i < noteList.length; i++) {
        new Promise((resolve, reject) => {
          this.chapterSearch(noteList[i].word, this.locations.start.index,
              results => {
                resolve(results);
              });
        }).then(results => {
          let noteStatus = results.some(obj => {
            let resultLocations = this.book.locations.locationFromCfi(
                obj.cfi);
            return resultLocations >= startLocations && resultLocations <
                endLocations;
          });
          if (noteStatus) {
            this.toolTipsList.push(noteList[i].cfi);
            this.bookRendition.annotations.add('underline', noteList[i].cfi, {
              cfiRange: noteList[i].cfi,
              className: noteList[i].underlineClass,
              annotation: noteList[i].annotation,
            }, () => {}, noteList[i].underlineClass, {});
            if (noteList[i].type === 'annotation') {
              this.noteTipsList.push({
                isShowed: false,
                ...this.getNoteTipsPosition(noteList[i].cfi),
                ...noteList[i],
              });
            }
          }
        });
      }
    },
    // 获取图书信息
    getBookInfo() {
      // 获取图书信息
      this.bookInfo.title = this.book.package.metadata.title;
    },
    // 设置主题
    setBookTheme() {
      this.themes = this.bookRendition.themes;
      this.setStyle('fontFamily', 'MicrosoftYaHei', (value) => {
        this.themes.font(value);
      });
      this.setStyle('fontSize', 16, (value) => {
        this.themes.fontSize(value + 'px');
      });
      this.setStyle('lineHeight', 1.2, (value) => {
        this.registerTheme(value);
        this.setStyle('background', 'default', (value) => {
          this.theme = value;
          this.themes.select(value);
        });
      });
    },
    // 设置样式并保存在localStorage中
    setStyle(key, value, done) {
      if (getLS(key)) {
        done(getLS(key));
      } else {
        setLS(key, value);
        done(value);
      }
    },
    setFont(value) {
      this.themes.font(value);
      setLS('fontFamily', value);
    },
    setFontSize(value) {
      this.themes.fontSize(value + 'px');
      setLS('fontSize', value);
    },
    setLineHeight(value, bg) {
      this.registerTheme(value);
      this.themes.select(bg);
      setLS('lineHeight', value);
    },
    setBackground(value) {
      this.themes.select(value);
      this.theme = value;
      setLS('background', value);
    },
    // 注册主题
    registerTheme(value) {
      this.themes.register({
        'default': {
          'body': {
            'background': '#ffffff', 'color': '#666666',
          },
          '::selection': {
            'background': 'rgba(250,205,137,0.3)',
          },
          '*': { 'line-height': value + '!important' },
        },
        'bright': {
          'body': {
            'background': '#FFDDAA', 'color': '#666666', 'line-height': 2,
          },
          '::selection': {
            'background': 'rgba(250,205,137,0.3)',
          },
          '*': { 'line-height': value + '!important' },
        },
        'eyeProtection': {
          'body': {
            'background': '#BFE2CB', 'color': '#666666', 'line-height': 2,
          },
          '::selection': {
            'background': 'rgba(250,205,137,0.3)',
          },
          '*': { 'line-height': value + '!important' },
        },
        'night': {
          'body': {
            'background': '#141414', 'color': '#FFFFFF', 'line-height': 2,
          },
          '::selection': {
            'background': 'rgba(250,205,137,0.3)',
          },
          '*': { 'line-height': value + '!important' },
        },
      });
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
      let objStart = this.locations && this.locations.start;
      let objEnd = this.locations && this.locations.end;
      let content = this.bookRendition.getRange(objStart.cfi) &&
          this.bookRendition.getRange(objStart.cfi).commonAncestorContainer;
      let word = content && content.data;
      let isSign = word.split(' ').some(val => val === '\n');
      if ( !isSign) {
        setBookmarks(this.id, {
          id: this.id + new Date().getTime(),
          bookId: this.id,
          startCfi: objStart.cfi,
          endCfi: objEnd.cfi,
          href: objStart.href,
          word: word,
          createTime: new Date().getTime(),
        });
        this.bookmarksStatus = true;
      }
    },
    // 书签跳转
    gotoBookmarks(cfi) {
      this.bookRendition.display(cfi);
      this.dialogHandle(null, true);
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
      this.searchResult = [];
      this.dialogHandle(() => {
        this.searchStatus = true;
      });
    },
    // 搜索关键词
    search(value, done) {
      let book = this.book;
      Promise.all(book.spine.spineItems.map(item => {
            return new Promise((resolve, reject) => {
              item.load(book.load.bind(book)).then(result => {
                resolve(item.find.bind(item, value));
              }).catch(results => {
                item.unload.bind(item);
              });
            });
          }),
      ).then(results => {
        Promise.all(results).then(results => {
          this.searchResult = results.map(item => {
            return item();
          }).reduce((item1, item2) => {
            return item1.concat(item2);
          }, []);
          done && done(this.searchResult);
        });
      });
    },
    // 搜索关键词(限制当前章节)
    chapterSearch(value, index, done) {
      let book = this.book;
      let spine = book.spine.spineItems.filter(val => {
        return val.index === index;
      })[0];
      return new Promise((resolve, reject) => {
        spine.load(book.load.bind(book)).then(result => {
          resolve(spine.find.bind(spine, value));
        }).catch(results => {
          spine.unload.bind(spine);
        });
      }).then(results => {
        done && done(results());
      });
    },
    // 设置单/双页模式
    setPageType() {
      let width = document.body.clientWidth;
      if (width > 1133) {
        this.screenIsChange = true;
        this.singlePageStatus = !this.singlePageStatus;
        setTimeout(() => {
          this.bookFrame = document.getElementById('book').
              getBoundingClientRect();
          if ( !this.singlePageStatus) {
            this.bookRendition.resize(this.bookFrame.width);
          } else {
            this.bookRendition.resize(640);
          }
          this.toolTipsStatus = false;
          this.annotateStatus = false;
        }, 100);
      }
    },
    // 监听屏幕大小变化
    screenWidthChange() {
      window.onresize = () => {
        this.screenIsChange = true;
        this.singlePageStatus = this.bookFrame.width < 800
            ? false
            : this.singlePageStatus;
        setTimeout(() => {
          this.bookFrame = document.getElementById('book').getBoundingClientRect();
          this.bookRendition.resize(this.bookFrame.width);
          this.toolTipsStatus = false;
          this.annotateStatus = false;
        }, 100)
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
    // 消息
    message(content) {
      this.messageStatus = true
      this.messageContent = content
      setTimeout(() => {
        this.messageStatus = false
        this.messageContent = null
      }, 3000)
    }
  },
};

