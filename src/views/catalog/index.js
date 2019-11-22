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
