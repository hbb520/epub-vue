import {
  getBookmarks,
  removeBookmarks,
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
      bookmarksList: []
    };
  },
  created() {
    this.getBookmarksList();
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
    },
    // 书签跳转
    getoBookmarks(cfi){
      this.$emit('closeDialog', () => {
        this.$emit('gotoBookmarks', cfi)
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
