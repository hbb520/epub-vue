import ProgressSlider from '../../components/slider/slider.vue';
import MobileCatalog from '../mobile-catalog/index.vue';
import MobileTheme from '../mobile-theme/index.vue';
import MobileSearch from '../mobile-search/index.vue';
import {
  getLS,
  setLS,
  getBookmarks,
  setBookmarks,
  getNote,
  setNote,
  removeNote,
  removeBookmarks,
} from '../../utils/auth';

const ePub = window.ePub;

export default {
  data() {
    return {
      id: null,
      bookLoading: false,
      showLoadingTip: false,
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
        totalChapter: null,
        currentChapter: null,
      },
      prevStatus: true,
      nextStatus: true,
      catalogStatus: false,
      currentChapter: {},
      chapterDetailList: [],
      bookmarksStatus: false,
      bookmarksId: null,
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
      selectedLocation: null,
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
      surplusTop: 21,
      menuDialogStatus: false,
      mouseSelectStatus: false,
    };
  },
  components: {
    ProgressSlider,
    MobileCatalog,
    MobileTheme,
    MobileSearch,
  },
  mounted() {
    if (this.$route.query && this.$route.query.id && this.$route.query.path) {
      this.id = parseInt(this.$route.query.id);
      this.bookUrl = 'http://120.25.249.22:8094/' + this.$route.query.path;
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
      // this.showLoadingTip = true;
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
      this.book.ready.then(async () => {
        this.bookLoading = false;
      //   let pageWordNumber = (0.42 * this.bookFrame.width *
      //       (this.bookFrame.height - 40)) / (this.fs * this.fs * this.lh);
      //   return this.book.locations.generate(pageWordNumber);
      // }).then(async result => {
      //   this.showLoadingTip = false;
        console.log('图书加载完成');
        console.log(this.book);
        this.getBookInfo();
        this.setBookTheme();
        // 进度条初始化
        this.progress = 0;
        // this.locations = this.bookRendition.currentLocation();
        // this.currentChapter = this.locations.start;
        // this.bookInfo.totalPage = result.length;
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
        this.bookInfo.totalChapter = this.chapterDetailList.slice(-1)[0].index

        this.chapterDetailList = await Promise.all(
            this.chapterDetailList.map(async (item) => {
              let cfi = await this.searchChapter(item.href);
              // let location = this.book.locations.locationFromCfi(cfi);
              return {
                cfi,
                // location,
                ...item,
              };
            }));

        // 章节变化
        this.bookRendition.on('rendered', (section) => {
          console.log('章节变化');
          this.noteChange(null, section.href);
        });
        // 页码变化
        this.bookRendition.on('relocated', location => {
          console.log('页码变化');
          this.locations = location;
          // this.bookInfo.currentStartPage = location.start.location;
          // this.bookInfo.currentEndPage = location.end.location;
          this.progress = location.start && location.start.percentage * 100;
          this.nextStatus = location.atEnd ? false : true;
          this.prevStatus = location.atStart ? false : true;
          let current = this.chapterDetailList.filter((val, ind) => {
            return val.href.split('#')[0] === location.start.href.split('#')[0];
          }).slice(-1)[0];
          if (current) {
            let obj = {
              ...current,
            };
            obj.index = current.index;
            this.currentChapter = obj;
            this.bookInfo.currentChapter = current.parentChapterLabel
                ? (current.parentChapterLabel + ' - ' + current.label)
                : current.label;
            this.progressTips = this.bookInfo.currentChapter;
          }
          this.bookmarksChange();
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
          range = this.bookRendition.getRange(cfiRange);
          rangeObj = range.getBoundingClientRect();
          this.mouseSelectStatus = true;
          this.selectedCfi = cfiRange;
          // this.selectedLocation = this.book.locations.locationFromCfi(cfiRange);
          this.selectedInfo = rangeObj;
          this.toolTipsTop = rangeObj.top + this.bookFrame.top - 90 - 0.5 * fs *
              lh - 10 - this.surplusTop;
          this.toolTipsLeft = rangeObj.left % this.bookFrame.width +
              this.bookFrame.left + rangeObj.width / 2 - 150;
          this.toolTipsStatus = true;
          this.toolTipsMode = 'add';
          this.currentHandleWord = range.toString();
        });

        // 鼠标点下去
        this.bookRendition.on('mousedown', (event, contents) => {
          this.mouseSelectStatus = false;
        });

        // 鼠标松开
        this.bookRendition.on('mouseup', (event, contents) => {
          if ( !this.mouseSelectStatus) {
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
          this.mouseSelectStatus = false;
        });

        // 点击事件
        this.bookRendition.on('click', event => {
          if ( !this.menuDialogStatus) {
            if (event.pageX % this.bookFrame.width < 0.3 *
                this.bookFrame.width) {
              this.menuDialogStatus = false;
              this.prevStatus && this.prev();
            } else if ((event.pageX % this.bookFrame.width >= 0.3 *
                this.bookFrame.width) &&
                (event.pageX % this.bookFrame.width <= 0.7 *
                    this.bookFrame.width)) {
              this.menuDialogStatus = !this.menuDialogStatus;
            } else if (event.pageX % this.bookFrame.width > 0.7 *
                this.bookFrame.width) {
              this.menuDialogStatus = false;
              this.nextStatus && this.next();
            }
          } else {
            this.menuDialogStatus = false;
          }
        });

        // 点击选中文字
        this.bookRendition.on('markClicked', (cfiRange, object, contents) => {
          let range, rangeObj, fs = parseInt(getLS('fontSize')),
              lh = parseInt(getLS('lineHeight') * 10) / 10;
          let paragraphWidth = this.singlePageStatus
              ? this.bookFrame.width
              : 0.42 * this.bookFrame.width;
          range = this.bookRendition.getRange(cfiRange);
          rangeObj = range.getBoundingClientRect();
          this.selectedCfi = cfiRange;
          // this.selectedLocation = this.book.locations.locationFromCfi(cfiRange);
          this.selectedInfo = rangeObj;
          this.selectedColorClassName = object && object.className;
          this.currentHandleAnnotateWrod = object.annotation
              ? object.annotation
              : null;
          if (rangeObj.width > paragraphWidth) {
            let fristWordCfi = cfiRange.split(',/1:')[0] + ',/1:' +
                cfiRange.split(',/1:')[1] + ',/1:' +
                (parseInt(cfiRange.split(',/1:')[1]) + 1) + ')';
            let fristWordRangeObj = this.getRangeRect(fristWordCfi);
            this.toolTipsTop = fristWordRangeObj.top + this.bookFrame.top - 90 -
                0.5 * fs * lh - 10 - this.surplusTop;
            this.toolTipsLeft = rangeObj.left % this.bookFrame.width +
                this.bookFrame.left - 150;
          } else {
            this.toolTipsTop = rangeObj.top + this.bookFrame.top - 90 - 0.5 *
                fs * lh - 10 - this.surplusTop;
            this.toolTipsLeft = rangeObj.left % this.bookFrame.width +
                this.bookFrame.left + rangeObj.width / 2 - 150;
          }
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
        // location: this.selectedLocation,
        href: this.currentChapter.href,
        word: this.currentHandleWord,
        // index: this.bookInfo.currentPage ? this.bookInfo.currentPage : null,
        index: this.currentChapter ? this.currentChapter.index : null,
        type: 'underline',  // 'underline', 'annotation'
        underlineClass: 'default',
        annotation: '',
        createTime: new Date().getTime(),
      });
      this.bookRendition.getContents(
          this.selectedCfi)[0].document.getSelection().empty();
      this.noteChange()
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
        // location: this.selectedLocation,
        href: this.currentChapter.href,
        word: this.currentHandleWord,
        // index: this.bookInfo.currentPage ? this.bookInfo.currentPage : null,
        index: this.currentChapter ? this.currentChapter.index : null,
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
      this.noteChange()
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
      this.noteChange()
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
      if (this.toolTipsMode === 'add') {
        this.createUnderline();
      }
      if ((top + 270) > document.body.clientHeight) {
        this.annotateShowAtTheBottom = false;
        if (this.selectedInfo.height + this.bookFrame.bottom + 270 >
            document.body.clientHeight) {
          this.annotateTop = document.body.clientHeight - 270;
          this.annotateLeft = document.body.clientWidth - 500 - 41;
        } else {
          this.annotateTop = top - 270 - this.selectedInfo.height - 20;
          this.annotateLeft = (this.selectedInfo.left - left) %
              this.bookFrame.width + this.bookFrame.left +
              this.selectedInfo.width / 2 - 250;
        }
      } else {
        this.annotateShowAtTheBottom = true;
        this.annotateTop = top;
        this.annotateLeft = (this.selectedInfo.left - left) %
            this.bookFrame.width + this.bookFrame.left +
            this.selectedInfo.width / 2 - 250;
      }
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
      this.openAnnotateDialog();
    },
    // 批注
    createAnnotate() {
      if (this.annotateWord === null) {
        this.message('批注内容不能为空!');
        this.closeAnnotateDialog();
        return true;
      } else if (this.annotateWord === '' && this.toolTipsMode === 'edit') {
        this.noteTipsList = this.noteTipsList.filter(val => {
          return !(val.cfi === this.selectedCfi);
        });
        setNote(this.id, {
          id: this.id + new Date().getTime(),
          bookId: this.id,
          cfi: this.selectedCfi,
          // location: this.selectedLocation,
          href: this.currentChapter.href,
          word: this.currentHandleWord,
          // index: this.bookInfo.currentPage ? this.bookInfo.currentPage : null,
          index: this.currentChapter ? this.currentChapter.index : null,
          type: 'underline',  // 'underline', 'annotation'
          underlineClass: this.selectedColorClassName
              ? this.selectedColorClassName
              : 'default',
          annotation: null,
          createTime: new Date().getTime(),
        });
      } else {
        this.bookRendition.annotations.remove(this.selectedCfi, 'underline');
        removeNote(this.id, this.selectedCfi);
        this.bookRendition.annotations.add('underline', this.selectedCfi, {
          cfiRange: this.selectedCfi,
          className: this.selectedColorClassName
              ? this.selectedColorClassName
              : 'default',
          annotation: this.annotateWord,
        }, () => {}, this.selectedColorClassName
            ? this.selectedColorClassName
            : 'default', {});
        setNote(this.id, {
          id: this.id + new Date().getTime(),
          bookId: this.id,
          cfi: this.selectedCfi,
          // location: this.selectedLocation,
          href: this.currentChapter.href,
          word: this.currentHandleWord,
          // index: this.bookInfo.currentPage ? this.bookInfo.currentPage : null,
          index: this.currentChapter ? this.currentChapter.index : null,
          type: 'annotation',  // 'underline', 'annotation'
          underlineClass: this.selectedColorClassName
              ? this.selectedColorClassName
              : 'default',
          annotation: this.annotateWord,
          createTime: new Date().getTime(),
        });
        this.noteChange()
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
      range = this.getRange(cfi);
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
      if (this.singlePageStatus) {
        if (Math.abs(otherRangeObj.left % this.bookFrame.width - 0.04 *
            this.bookFrame.width) < 10) {
          if (otherRangeObj.top <= (3 * lh / 0.4 + fs - 6)) {
            top = rangeObj.top + this.bookFrame.top + fs * 1.2 + 11 -
                this.surplusTop + rangeObj.height - fs * lh - 2;
            left = left + 0.92 * this.bookFrame.width - 5;
          } else {
            top = top - fs * lh;
            left = left + 0.92 * this.bookFrame.width - 5;
          }
        }
      } else {
        if (Math.abs(otherRangeObj.left % this.bookFrame.width - 0.04 *
            this.bookFrame.width) < 10
            || Math.abs(otherRangeObj.left % this.bookFrame.width - 0.54 *
                this.bookFrame.width) < 10) {
          if (otherRangeObj.top <= (3 * lh / 0.4 + fs - 6)) {
            if (Math.abs(otherRangeObj.left % this.bookFrame.width - 0.04 *
                this.bookFrame.width) < 10) {
              top = rangeObj.top + this.bookFrame.top + fs * 1.2 + 11 -
                  this.surplusTop + rangeObj.height - fs * lh - 2;
              left = left + 0.92 * this.bookFrame.width - 5;
            } else {
              top = rangeObj.top + this.bookFrame.top + fs * 1.2 + 11 -
                  this.surplusTop + rangeObj.height - fs * lh - 2;
              left = left - 0.08 * this.bookFrame.width - 3;
            }
          } else {
            top = top - fs * lh;
            left = left + 0.42 * this.bookFrame.width - 3;
          }
        }
      }
      let extraTop, extraLeft;
      if (getLS('fontFamily') === 'MicrosoftYaHei' || getLS('fontFamily') ===
          'PingFang SC, PingFang TC') {
        extraTop = 0;
      } else {
        extraTop = -5;
      }
      return {
        top: top + extraTop,
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
    // 书签变更
    bookmarksChange() {
      this.bookmarksStatus = false;
      this.bookmarksId = null;
      let minLeft, maxLeft, page = this.locations.start.displayed.page;
      minLeft = this.bookFrame.width * (page - 1) + 0.04 *
          this.bookFrame.width;
      maxLeft = minLeft + 0.92 * this.bookFrame.width;
      this.bookmarksStatus = getBookmarks(this.id).some(item => {
        if ( !this.getRangeRect(item.startCfi)) {
          return false;
        }
        let rangeObj = this.getRangeRect(item.startCfi);
        let left = rangeObj.left;
        // let location = this.book.locations.locationFromCfi(item.startCfi);
        // let startLocation = this.locations.start.location;
        // let endLocation = this.locations.end.location;
        // if (left >= minLeft && left <= maxLeft && location >=
            // startLocation && location <= endLocation) {
        if (left >= minLeft && left <= maxLeft) {
          this.bookmarksId = item.id;
          return true;
        } else {
          return false;
        }
      });
    },
    // 页面变化笔记回显
    noteChange(cfi, href) {
      let noteList = getNote(this.id);
      let cfiHref = href || this.currentChapter.href
      cfi && this.bookRendition.annotations.remove(cfi, 'underline');
      noteList.map(item => {
        this.bookRendition.annotations.remove(item.cfi, 'underline');
      });
      this.noteTipsList = [];
      this.toolTipsList = [];
      noteList.filter((item, index) => {
        return item.href.split('#')[0] === cfiHref.split('#')[0];
      }).map((item, index) => {
        this.toolTipsList.push(item.cfi);
        this.bookRendition.annotations.add('underline', item.cfi, {
          cfiRange: item.cfi,
          className: item.underlineClass,
          annotation: item.annotation,
        }, () => {}, item.underlineClass, {});
        this.createAnnotationDom();
      });
    },
    // 创建批注dom
    createAnnotationDom() {
      let svg = document.querySelector('svg');
      let gArr = document.querySelectorAll('svg g');
      let container = document.querySelector('.epub-view');
      this.$refs.note.style = svg.style.cssText;
      getNote(this.id).map((item, index) => {
        gArr.forEach(val => {
          if (item.type === 'annotation' && item.cfi === val.dataset['cfiRange']) {
            let line = val.querySelectorAll('line')[val.querySelectorAll(
                'line').length - 1];
            let left = line.x2.baseVal.value;
            let top = line.y2.baseVal.value;
            this.noteTipsList.push({
              isShowed: false,
              top: top - 10,
              left: left,
              cTop: top - 10 - 70 + this.bookFrame.top,
              cLeft: left % this.bookFrame.width + this.bookFrame.left - 140 + 10,
              ...item,
            });
          }
        });
      });
      container.appendChild(this.$refs.note);
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
      this.bookmarksChange();
      this.noteChange();
      this.bookRendition.display(this.locations.start.cfi);
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
    progressPrev() {
      if (this.progress > 1) {
        this.progress--;
        this.onProgressChange(this.progress);
      }
    },
    progressNext() {
      if (this.progress < 99) {
        this.progress++;
        this.onProgressChange(this.progress);
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
        removeBookmarks(this.id, this.bookmarksId);
        this.bookmarksStatus = false;
      } else {
        let objStart = this.locations && this.locations.start;
        let objEnd = this.locations && this.locations.end;
        let content = this.getRange(objStart.cfi) &&
            this.getRange(objStart.cfi).commonAncestorContainer;
        let word = content && content.data;
        let isSign = word.split(' ').some(val => val === '\n');
        let baseUrl = objStart.cfi.split('!')[0];
        let detailUrl = objStart.cfi.split('!')[1].split('/');
        if ( !isSign) {
          setBookmarks(this.id, {
            id: this.id + new Date().getTime(),
            bookId: this.id,
            startCfi: objStart.cfi,
            // location: objStart.location,
            endCfi: objEnd.cfi,
            href: objStart.href,
            word: word,
            // index: this.bookInfo.currentPage ? this.bookInfo.currentPage : null,
            index: this.currentChapter ? this.currentChapter.index : null,
            createTime: new Date().getTime(),
          });
          this.bookmarksId = this.id + new Date().getTime();
          this.bookmarksStatus = true;
        }
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
    // 章节href转为cfi
    async searchChapter(href) {
      let book = this.book;
      const id = href.split('#')[1];
      const item = book.spine.get(href);
      await item.load(book.load.bind(book));
      const el = id ? item.document.getElementById(id) : item.document.body;
      return item.cfiFromElement(el);
    },
    // 设置单/双页模式
    setPageType() {
      let cfi = this.locations.start.cfi;
      this.screenIsChange = true;
      this.singlePageStatus = !this.singlePageStatus;
      this.surplusTop = 21;
      setTimeout(() => {
        this.bookFrame = document.getElementById('book').
            getBoundingClientRect();
        if ( !this.singlePageStatus) {
          this.bookRendition.resize(this.bookFrame.width);
        } else {
          this.bookRendition.resize(630);
        }
        this.bookRendition.display(cfi);
        this.toolTipsStatus = false;
        this.annotateStatus = false;
      }, 100);
    },
    // 监听屏幕大小变化
    screenWidthChange() {
      window.onresize = () => {
        this.screenIsChange = true;
        this.surplusTop = 21;
        if (document.body.clientWidth >= 1200) {
          setTimeout(() => {
            this.bookFrame = document.getElementById('book').
                getBoundingClientRect();
            this.bookRendition.resize(this.bookFrame.width);
            this.toolTipsStatus = false;
            this.annotateStatus = false;
          }, 100);
        }
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
        this.menuDialogStatus = false;
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
    // 获取Range对象
    getRange(cfi) {
      let range;
      if (this.bookRendition.getRange(cfi)) {
        range = this.bookRendition.getRange(cfi);
        return range;
        // } else if (this.bookRendition.getContents()[0].range(cfi)) {
        //   range = this.bookRendition.getContents()[0].range(cfi);
        //   return range;
      } else {
        return false;
      }
    },
    // 获取矩形对象
    getRangeRect(cfi) {
      let range;
      if (this.bookRendition.getRange(cfi)) {
        range = this.bookRendition.getRange(cfi);
        return range && range.getBoundingClientRect();
        // } else if (this.bookRendition.getContents()[0].range(cfi)) {
        //   range = this.bookRendition.getContents()[0].range(cfi);
        //   return range && range.getBoundingClientRect();
      } else {
        return false;
      }
    },
  },
};

