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
      currentChapter: {},
      chapterDetailList: [],
      bookmarksStatus: false,
      bookFrame: null,
      singlePageStatus: false,
      themeStatus: false,
      theme: null,
      fs: getLS('fontSize'),
      lh: getLS('lineHeight'),
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
      surplusTop: 0,
      mouseSelectStatus: false,
      top: 0,
      left: 0,
    };
  },
  components: {
    ProgressSlider,
    Catalog,
    Theme,
    Search,
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$route.query && this.$route.query.id && this.$route.query.path) {
        this.id = parseInt(this.$route.query.id);
        this.bookUrl = 'http://120.25.249.22:8094/' + this.$route.query.path;
        this.getBookUrl(this.bookUrl);
        document.body.addEventListener('keyup', this.handleKeyup);
      }
    });
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
        console.log('图书加载完成');
        console.log(this.book);
        this.getBookInfo();
        this.setBookTheme();
        // 进度条初始化
        this.progress = 0;
        this.locations = this.bookRendition.currentLocation()
        this.chapterDetailList = [];
        let index = 1;
        this.book.navigation.toc.map(item => {
          this.chapterDetailList.push({
            index: index,
            ...item,
          });
          item.subitems.length > 0 && index--;
          this.chapterDetailList = this.chapterDetailList.concat(
              item.subitems.map(val => {
                index++;
                return {
                  isUnit: true,
                  index: index,
                  parentChapterHref: item.href,
                  parentChapterLabel: item.label,
                  fristChapterHref: val.href.split('#')[0],
                  ...val,
                };
              }));
          index++;
        });

        // 章节变化
        this.bookRendition.on('rendered', (section) => {
          console.log('章节变化');
          let current = this.chapterDetailList.filter(val => {
            return val.href === section.href || val.fristChapterHref ===
                section.href;
          })[0];
          this.currentChapter = section;
          if (current) {
            this.bookInfo.currentChapter = current.parentChapterLabel
                ? (current.parentChapterLabel + ' - ' + current.label)
                : current.label;
            this.progressTips = this.bookInfo.currentChapter;
          }
        });
        // 页码变化
        this.bookRendition.on('relocated', location => {
          console.log('页码变化');
          this.locations = location;
          this.bookInfo.totalPage = this.chapterDetailList.slice(-1)[0]
              ? this.chapterDetailList.slice(-1)[0].index
              : 0;
          let currentPage = this.chapterDetailList.filter((val, ind) => {
            return val.href === this.locations.start.href ||
                val.fristChapterHref ===
                this.locations.start.href || val.href.split('#')[0] ===
                this.locations.start.href;
          })[0];
          this.bookInfo.currentPage = currentPage && currentPage.index;
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
          console.log('布局变化');
        });
        // 选中文字
        this.bookRendition.on('selected', (cfiRange, contents) => {
          let range, rangeObj, fs = parseInt(getLS('fontSize')),
              lh = parseInt(getLS('lineHeight') * 10) / 10;
          range = contents.range(cfiRange);
          rangeObj = range.getBoundingClientRect();
          this.mouseSelectStatus = true
          this.selectedCfi = cfiRange;
          this.selectedInfo = rangeObj;
          this.toolTipsTop = rangeObj.top + this.bookFrame.top - 90 - 0.5 * fs *
              lh - 10 - this.surplusTop;
          this.toolTipsLeft = rangeObj.left % this.bookFrame.width +
              this.bookFrame.left + rangeObj.width / 2 - 150;
          this.top = this.toolTipsTop;
          this.left = this.toolTipsLeft;
          this.toolTipsStatus = true;
          this.toolTipsMode = 'add';
          this.currentHandleWord = range.toString();
        });

        // 鼠标点下去
        this.bookRendition.on('mousedown', (event, contents) => {
          this.mouseSelectStatus = false
        });

        // 鼠标松开
        this.bookRendition.on('mouseup', (event, contents) => {
          if(!this.mouseSelectStatus){
            if (this.toolTipsStatus || this.annotateStatus) {
              this.toolTipsStatus = false;
              this.annotateStatus = false;
              this.clearSelectInfo();
            }
            this.noteTipsList.map(item => {
              item.isShowed = false;
              return item;
            });
          }
          this.mouseSelectStatus = false
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
          let range, rangeObj, fs = parseInt(getLS('fontSize')),
              lh = parseInt(getLS('lineHeight') * 10) / 10;
          range = this.bookRendition.getRange(cfiRange);
          rangeObj = range.getBoundingClientRect();
          this.selectedCfi = cfiRange;
          this.selectedInfo = rangeObj;
          this.selectedColorClassName = object && object.className;
          this.currentHandleAnnotateWrod = object.annotation
              ? object.annotation
              : null;
          this.toolTipsTop = rangeObj.top + this.bookFrame.top - 90 - 0.5 * fs *
              lh - 10 - this.surplusTop;
          this.toolTipsLeft = rangeObj.left % this.bookFrame.width +
              this.bookFrame.left + rangeObj.width / 2 - 150;
          this.top = this.toolTipsTop;
          this.left = this.toolTipsLeft;
          this.noteTipsList.map(item => {
            item.isShowed = false;
            return item;
          });
          this.annotateStatus = false;
          this.toolTipsStatus = true;
          this.toolTipsMode = 'edit';
          this.currentHandleWord = range.toString();
        });
      });
    },
    one(item) {
      this.bookRendition.emit('markClicked', item.cfi, {
        cfiRange: item.cfi,
        className: item.underlineClass,
        annotation: item.annotation,
      });
      this.openAnnotateDialog()
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
      this.bookRendition.getContents(
          this.selectedCfi)[0].document.getSelection().empty();
      if (this.toolTipsStatus || this.annotateStatus) {
        this.toolTipsStatus = false;
        this.annotateStatus = false;
        this.clearSelectInfo();
      }
      this.message('内容已成功复制到粘贴板');
    },
    // 分享
    share() {
      this.bookRendition.getContents(
          this.selectedCfi)[0].document.getSelection().empty();
      if (this.toolTipsStatus || this.annotateStatus) {
        this.toolTipsStatus = false;
        this.annotateStatus = false;
        this.clearSelectInfo();
      }
      this.message('分享成功！');
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
        index: this.bookInfo.currentPage ? this.bookInfo.currentPage : null,
        type: 'underline',  // 'underline', 'annotation'
        underlineClass: 'default',
        annotation: '',
        createTime: new Date().getTime(),
      });
      this.bookRendition.getContents(
          this.selectedCfi)[0].document.getSelection().empty();
      if (this.toolTipsStatus || this.annotateStatus) {
        this.toolTipsStatus = false;
        this.annotateStatus = false;
        this.clearSelectInfo();
      }
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
        index: this.bookInfo.currentPage ? this.bookInfo.currentPage : null,
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
      if (this.toolTipsStatus || this.annotateStatus) {
        this.toolTipsStatus = false;
        this.annotateStatus = false;
        this.clearSelectInfo();
      }
    },
    // 清除划线
    clearUnderline() {
      this.bookRendition.annotations.remove(this.selectedCfi, 'underline');
      removeNote(this.id, this.selectedCfi);
      this.noteTipsList = this.noteTipsList.filter(val => {
        return !(val.cfi === this.selectedCfi);
      });
      if (this.toolTipsStatus || this.annotateStatus) {
        this.toolTipsStatus = false;
        this.annotateStatus = false;
        this.clearSelectInfo();
      }
    },
    // 打开批注编辑框
    openAnnotateDialog() {
      let left = 0;
      let top = this.selectedInfo.top + 195 + this.selectedInfo.height;
      this.toolTipsStatus = false;
      this.noteTipsList.map(item => {
        item.isShowed = false;
        return item;
      });
      if(this.toolTipsMode === 'add'){
        this.createUnderline();
      }
      if ((top + 270) > document.body.clientHeight) {
        this.annotateShowAtTheBottom = false;
        this.annotateTop = top - 270 - this.selectedInfo.height - 20;
      } else {
        this.annotateShowAtTheBottom = true;
        this.annotateTop = top;
      }
      this.annotateLeft = (this.selectedInfo.left - left) %
          this.bookFrame.width + this.bookFrame.left +
          this.selectedInfo.width / 2 - 250;
      this.annotateStatus = true;
      this.annotateWord = this.currentHandleAnnotateWrod;
    },
    // 关闭批注编辑框
    closeAnnotateDialog() {
      if (this.toolTipsMode === 'add') {
        this.bookRendition.annotations.remove(this.selectedCfi, 'underline');
        removeNote(this.id, this.selectedCfi);
      }
      this.annotateStatus = false;
      this.clearSelectInfo();
    },
    // 编辑批注
    editAnnotate(item) {
      this.bookRendition.emit('markClicked', item.cfi, {
        cfiRange: item.cfi,
        className: item.underlineClass,
        annotation: item.annotation,
      });
      this.openAnnotateDialog()
    },
    // 批注
    createAnnotate() {
      if(this.annotateWord === null){
        this.message('批注内容不能为空!');
        this.closeAnnotateDialog()
        return true
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
        index: this.bookInfo.currentPage ? this.bookInfo.currentPage : null,
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
      if (this.toolTipsStatus || this.annotateStatus) {
        this.toolTipsStatus = false;
        this.annotateStatus = false;
        this.clearSelectInfo();
      }
    },
    // 获取批注标记坐标
    getNoteTipsPosition(cfi) {
      let left, top, range, otherRange, rangeObj, otherRangeObj,
          fs = parseInt(getLS('fontSize')),
          lh = parseInt(getLS('lineHeight') * 10) / 10;
      range = this.bookRendition.getRange(cfi);
      if ( !range) {
        return true;
      }
      otherRange = range.cloneRange();
      otherRange.collapse(false);
      rangeObj = range.getBoundingClientRect();
      otherRangeObj = otherRange.getBoundingClientRect();
      top = otherRangeObj.top + this.bookFrame.top + fs * 1.2 + 11 -
          this.surplusTop;
      left = otherRangeObj.left % this.bookFrame.width + this.bookFrame.left;
      if (Math.abs(otherRangeObj.left % this.bookFrame.width - 0.04 *
          this.bookFrame.width) < 10
          || Math.abs(otherRangeObj.left % this.bookFrame.width - 0.54 *
              this.bookFrame.width) < 10) {
        if (otherRangeObj.top <= (3 * lh / 0.4 + fs - 6)) {
          if (Math.abs(otherRangeObj.left % this.bookFrame.width - 0.04 *
              this.bookFrame.width) < 10) {
            top = rangeObj.top + this.bookFrame.top + fs * 1.2 + 11 -
                this.surplusTop;
            ;
            left = left + 0.92 * this.bookFrame.width - 5;
          } else {
            top = rangeObj.top + this.bookFrame.top + fs * 1.2 + 11 -
                this.surplusTop;
            ;
            left = left - 0.08 * this.bookFrame.width - 3;
          }
        } else {
          top = top - fs * lh - this.surplusTop;
          ;
          left = left + 0.42 * this.bookFrame.width - 3;
        }
      }
      // this.top = top
      // this.left = left
      return {
        top: top,
        left: left,
      };
    },
    // 清理选中信息
    clearSelectInfo() {
      this.noteTipsList.map(item => {
        item.isShowed = false;
        return item;
      });
      this.toolTipsMode = 'add';
      this.selectedCfi = null;
      this.selectedColorClassName = null;
      this.currentHandleWord = null;
      this.currentHandleAnnotateWrod = null;
      this.annotateWord = null;
    },
    // 页面变化书签回显
    bookmarksChange() {
      this.bookmarksStatus = false;
      let startLocations = this.book.locations.locationFromCfi(
          this.locations.start.cfi);
      let endLocations = this.book.locations.locationFromCfi(
          this.locations.end.cfi);
      this.bookmarksStatus = getBookmarks(this.id).some(val => {
        let resultLocations = this.book.locations.locationFromCfi(
            val.startCfi);
        return resultLocations >= startLocations && resultLocations <
            endLocations && resultLocations <
            ((endLocations + startLocations) / 2);
      });
    },
    // 页面变化笔记回显
    noteChange(cfi) {
      let noteList = getNote(this.id);
      this.bookRendition.annotations.remove(cfi, 'underline');
      noteList.map(item => {
        this.bookRendition.annotations.remove(item.cfi, 'underline');
      });
      let startLocations = this.book.locations.locationFromCfi(
          this.locations.start.cfi);
      let endLocations = this.book.locations.locationFromCfi(
          this.locations.end.cfi);
      this.toolTipsList = [];
      this.noteTipsList = [];
      noteList.map((item, index, arr) => {
        let noteStatus = arr.some(val => {
          let resultLocations = this.book.locations.locationFromCfi(
              val.cfi);
          return resultLocations >= startLocations && resultLocations <
              endLocations && resultLocations >
              ((endLocations + startLocations) / 2);
        });
        if (noteStatus) {
          this.toolTipsList.push(item.cfi);
          this.bookRendition.annotations.add('underline', item.cfi, {
            cfiRange: item.cfi,
            className: item.underlineClass,
            annotation: item.annotation,
          }, () => {}, item.underlineClass, {});
          if (item.type === 'annotation') {
            this.noteTipsList.push({
              isShowed: false,
              ...this.getNoteTipsPosition(item.cfi),
              ...item,
            });
          }
        }
      });
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
      this.bookmarksChange();
      this.noteChange();
      this.bookRendition.display(this.locations.start.cfi);
    },
    setLineHeight(value, bg) {
      this.registerTheme(value);
      this.themes.select(bg);
      setLS('lineHeight', value);
      this.bookmarksChange();
      this.noteChange();
      this.bookRendition.display(this.locations.start.cfi);
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
          index: this.bookInfo.currentPage ? this.bookInfo.currentPage : null,
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
    // 设置单/双页模式
    setPageType() {
      let width = document.body.clientWidth;
      if (width > 1133) {
        this.screenIsChange = true;
        this.singlePageStatus = !this.singlePageStatus;
        this.surplusTop = 21;
        setTimeout(() => {
          this.bookFrame = document.getElementById('book').
              getBoundingClientRect();
          if ( !this.singlePageStatus) {
            this.bookRendition.resize(this.bookFrame.width);
          } else {
            this.bookRendition.resize(640);
          }
          this.bookRendition.display(this.locations.start.cfi);
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
        this.surplusTop = 21;
        setTimeout(() => {
          this.bookFrame = document.getElementById('book').
              getBoundingClientRect();
          this.bookRendition.resize(this.bookFrame.width);
          this.toolTipsStatus = false;
          this.annotateStatus = false;
        }, 100);
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
    // 键盘事件
    handleKeyup(event) {
      const e = event || window.event;
      if ( !e) return;
      const { keyCode } = e;
      if (keyCode === 37 || keyCode === 38) {
        this.prev();
      } else if (keyCode === 39 || keyCode === 40) {
        this.next();
      }
    },
    // 消息
    message(content) {
      this.messageStatus = true;
      this.messageContent = content;
      setTimeout(() => {
        this.messageStatus = false;
        this.messageContent = null;
      }, 3000);
    },
  },
};

