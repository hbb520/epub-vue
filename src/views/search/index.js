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
    };
  },
  computed: {
    arr() {

      return this.list.map( val => {
        return val()
      })
    }
  },
  created() {

  },
  methods: {
    close() {
      this.$emit('closeDialog');
    },
    search() {
      if (this.keyword) {
        this.$emit('search', this.keyword);
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
