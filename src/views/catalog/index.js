export default {
  components: {},
  props: {
    chapterList: {
      type: Array,
      default: () => {
        return []
      }
    },
    currentChapter: {
      type: Object,
      default: () => {
        return {}
      }
    },

  },
  data() {
    return {
      menu: 1,
    };
  },
  created() {
    this.getCatalogList()
  },
  methods: {
    toggleMenu(value) {
      if (value === 0) {
        this.$emit('closeDialog');
      }
    },
    goToChapter(chapter) {
      this.$emit('goToChapter', chapter)
    },
    getCatalogList() {
      // 章节变化
      console.log(this.chapterList)
      console.log(this.currentChapter)
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
