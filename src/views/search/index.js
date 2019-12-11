export default {
  components: {},
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      keyword: null,
      loading: false,
    };
  },
  computed: {
    result() {
      if (this.list.length > 0) {
        return this.list.map(val => {
          let htmlArr = val.excerpt.split(this.keyword)
          htmlArr[0] = '...'
          let html = htmlArr.join(`<span style="color: #048D01">${ this.keyword }</span>`);
          return {
            html: html,
            ...val,
          };
        });
      } else {
        return [];
      }
    },
  },
  created() {
  },
  methods: {
    close() {
      this.$emit('closeDialog', null, true);
    },
    search() {
      if (this.keyword) {
      this.loading = true
      this.$emit('search', this.keyword, () => {
        this.loading = false
      });
      }
    },
    gotoResult(cfi) {
      this.$emit('gotoResult', cfi);
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
