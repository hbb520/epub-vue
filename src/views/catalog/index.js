import {
  getBookmarks,
  removeBookmarks,
  getNote,
  removeNote,
} from '../../utils/auth';

export default {
  components: {},
  props: {
    id: {
      type: Number,
      default: () => {
        return null;
      },
    },
    chapterList: {
      type: Array,
      default: () => {
        return [];
      },
    },
    currentChapter: {
      type: Object,
      default: () => {
        return {};
      },
    }
  },
  data() {
    return {
      menu: 1,
      bookmarksList: [],
      noteList: []
    };
  },
  created() {
    this.getBookmarksList();
    this.getNoteList();
  },
  methods: {
    toggleMenu(value) {
      if (value === 0) {
        this.$emit('closeDialog', null, true);
      }
    },
    goToChapter(chapter) {
      this.$emit('closeDialog', () => {
        this.$emit('goToChapter', chapter);
      }, true);
    },
    //  获取书签
    getBookmarksList() {
      this.bookmarksList = getBookmarks(this.id)
    },
    //  删除书签
    delBookmarks(id) {
      removeBookmarks(this.id, id)
      this.getBookmarksList()
      this.$emit('closeDialog', () => {
        this.$emit('bookmarksChange')
      }, true);
    },
    // 书签跳转
    getoBookmarks(cfi){
      this.$emit('closeDialog', () => {
        this.$emit('gotoBookmarks', cfi)
      }, true);
    },
    //  获取笔记
    getNoteList() {
      this.noteList = getNote(this.id)
    },
    //  删除笔记
    delNote(cfi) {
      removeNote(this.id, cfi)
      this.getNoteList()
      this.$emit('closeDialog', () => {
        this.$emit('noteChange', cfi)
      }, true);
    },
    // 笔记跳转
    getoNote(cfi){
      this.$emit('closeDialog', () => {
        this.$emit('gotoNote', cfi)
      }, true);
    },
    parseTime(time) {
      let timer = new Date(time)
      return timer.getMonth() + 1 + '-' + timer.getDate() + ' ' + timer.getHours() + ':' + timer.getMinutes()
    },
    init() {

    },
  },
  mounted() {
    this.$nextTick(function() {
      this.init();
    });
  },
};
