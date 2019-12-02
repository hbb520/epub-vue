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
      bookWidth: 0,
      bookHeight: 0,
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
      selectedContents: null,
      selectedColorClassName: null,
      currentHandleWord: null,
      currentHandleAnnotateWrod: null,
      annotateStatus: false,
      annotateShowAtTheBottom: true,
      annotateTop: 0,
      annotateLeft: 0,
      annotateWord: null,
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
        ignoreClass: 'annotator-hl',
      });
      this.display = this.bookRendition.display();
      this.bookWidth = document.getElementById('book').clientWidth;
      this.bookHeight = document.getElementById('book').clientHeight;
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
        this.bookmarksStatus = false;
        let startLocations = this.book.locations.locationFromCfi(
            location.start.cfi);
        let endLocations = this.book.locations.locationFromCfi(
            location.end.cfi);

        Promise.all(getBookmarks(this.id).map(item => {
          return new Promise((resolve, reject) => {
            this.chapterSearch(item.word, location.start.index, results => {
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

        let noteList = getNote(this.id);
        for (let i = 0; i < noteList.length; i++) {
          new Promise((resolve, reject) => {
            this.chapterSearch(noteList[i].word, location.start.index,
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
              this.bookRendition.annotations.add('underline', noteList[i].cfi, {
                cfiRange: noteList[i].cfi,
                className: noteList[i].underlineClass,
                annotation: noteList[i].annotation,
              }, () => {}, 'default', {});
            }
          });
        }

        // Promise.all(getNote(this.id).map(item => {
        //   return new Promise((resolve, reject) => {
        //     this.chapterSearch(item.annotation, location.start.index, results => {
        //       resolve(results);
        //     });
        //   });
        // })).then(results => {
        //   this.bookmarksStatus = results.reduce((item1, item2) => {
        //     return item1.concat(item2);
        //   }, []).some( obj => {
        //     let resultLocations = this.book.locations.locationFromCfi(obj.cfi);
        //     return resultLocations >= startLocations && resultLocations < endLocations
        //   })
        // });

      });
      // 布局变化
      this.bookRendition.on('layout', function(layout) {
        console.log(44444444);
      });

      // this.bookRendition.hooks.content.register(function(contents){
      //   var loaded = Promise.all([
      //     contents.addScript("https://code.jquery.com/jquery-2.1.4.min.js"),
      //     contents.addStylesheet("http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.css")
      //   ]);
      //   return loaded;
      // });

      // let timer = null
      let isSelected = false;
      let that = this;
      // 选中文字
      this.bookRendition.on('selected', (cfiRange, contents) => {
        let range = contents.range(cfiRange);
        // let otherRange = range.cloneRange()
        // otherRange.collapse(false)
        let rangeObj = range.getBoundingClientRect();
        // let otherRangeObj = otherRange.getBoundingClientRect();
        // console.log(rangeObj)
        // this.top = otherRangeObj.top + 186
        // this.left = otherRangeObj.left + 178
        this.selectedCfi = cfiRange;
        this.selectedContents = contents;
        this.selectedInfo = rangeObj;
        this.toolTipsTop = rangeObj.top + 55;
        this.toolTipsLeft = rangeObj.left + 30 + rangeObj.width / 2;
        this.toolTipsStatus = true;
        this.toolTipsMode = 'add';
        this.book.getRange(cfiRange).then((range) => {
          this.currentHandleWord = range.toString();
        });
      });
      //   isSelected = true
      //   console.log(this.bookRendition.annotations)
      //   // clearTimeout(timer)
      //   console.log(5555);
      //   console.log(contents.window.querySelector('svg'));
      //   contents.window.addEventListener('mouseup', e => {
      //     if(!isSelected){
      //       return true
      //     }

      // this.bookRendition.annotations.underline(cfiRange, {},
      //     (val) => {
      //       console.log(1234567)
      //     }, 'annotation', {
      //       'stroke': 'red',
      //     });
      // timer = setTimeout(() => {
      //   console.log(9999)
      //   that.bookRendition.annotations.add('underline', cfiRange, {},
      //       (e) => {
      //         console.log(101010)
      //
      //         console.log(e.target)
      //         // console.log('highlight clicked', e.target);
      //         console.log(e.target.querySelector('line').style)
      //         e.target.querySelector('line').style.stroke = 'red'
      //         e.target.querySelector('line').style.strokeOpacity = '1'
      //         e.target.querySelector('rect').style.stroke = 'none'
      //       }, 'hl',
      //       {
      //         'fill-opacity': '1', 'mix-blend-mode': 'multiply',
      //         'line': {
      //           'stroke': 'red',
      //         },
      //       });
      //   isSelected = false
      // });
      // }, 100)

      // this.bookRendition.themes.add('underline', contents)

      this.bookRendition.on('mouseup', (event, contents) => {
        this.toolTipsStatus = false;
        this.annotateStatus = false;
      });

      // 点击选中文字
      this.bookRendition.on('markClicked', (cfiRange, object, contents) => {
        console.log(cfiRange);
        console.log(object);
        console.log(contents);
        let range = contents.range(cfiRange);
        let rangeObj = range.getBoundingClientRect();
        this.selectedCfi = cfiRange;
        this.selectedContents = contents;
        this.selectedInfo = rangeObj;
        this.selectedColorClassName = object && object.className;
        this.currentHandleAnnotateWrod = object.annotate
            ? object.annotate
            : null;
        this.toolTipsTop = rangeObj.top + 55;
        this.toolTipsLeft = rangeObj.left + 30 + rangeObj.width / 2;
        this.toolTipsStatus = true;
        this.toolTipsMode = 'edit';
        this.book.getRange(cfiRange).then((range) => {
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
      this.toolTipsStatus = false;
      this.$message.info('复制成功！');
    },
    // 分享
    share() {
      this.toolTipsStatus = false;
      this.$message.info('分享成功！');
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
        type: 'underline',  // 'underline', 'annotation'
        underlineClass: value,
        annotation: this.currentHandleAnnotateWrod,
        createTime: new Date().getTime(),
      });
      this.toolTipsStatus = false;
    },
    // 清除划线
    clearUnderline() {
      this.bookRendition.annotations.remove(this.selectedCfi, 'underline');
      removeNote(this.id, this.selectedCfi);
      this.toolTipsStatus = false;
    },
    // 打开批注编辑框
    openAnnotateDialog() {
      this.toolTipsStatus = false;
      let top = this.selectedInfo.top + 195 + this.selectedInfo.height;
      if ((top + 270) > document.body.clientHeight) {
        this.annotateShowAtTheBottom = false;
        this.annotateTop = top - 270 - this.selectedInfo.height - 20;
      } else {
        this.annotateShowAtTheBottom = true;
        this.annotateTop = top;
      }
      this.annotateLeft = this.selectedInfo.left + 180 +
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
        className: 'default',
        annotation: this.annotateWord,
      }, () => {}, 'default', {});
      setNote(this.id, {
        id: this.id + new Date().getTime(),
        bookId: this.id,
        cfi: this.selectedCfi,
        word: this.currentHandleWord,
        type: 'underline',  // 'underline', 'annotation'
        underlineClass: 'default',
        annotation: this.annotateWord,
        createTime: new Date().getTime(),
      });
      this.annotateStatus = false;
      this.currentHandleWord = null;
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
        this.toolTipsStatus = false;
        this.annotateStatus = false;
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

