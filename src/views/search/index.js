export default {
  components: {},
  props: {
    rendition: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      keyword: null,
    };
  },
  created() {
    this.getCatalogList()
  },
  methods: {
    close() {
      this.$emit('closeDialog');
    },
    search(value) {

    },
    getCatalogList() {
      // console.log(this.rendition)
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
