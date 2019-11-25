export default {
  components: {},
  props: {
    rendition: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      value: null,
      fontType: 1,
      fontsize: 12,
      lineHeight: null,
      background: null,
      fontTypeList: [
        {
          label: '仿宋',
          value: 1,
        },
        {
          label: '楷体',
          value: 2,
        },
        {
          label: '微软雅黑',
          value: 3,
        },
      ],
    };
  },
  created() {
    this.getCatalogList();
  },
  methods: {
    close() {
      this.$emit('closeDialog');
    },
    // 字体大小减一
    sub() {
      if (this.fontsize > 12) {
        this.fontsize--;
      }
    },
    // 字体大小加一
    add() {
      if (this.fontsize < 50) {
        this.fontsize++;
      }
    },
    // 设置字体行高
    setLineHeight(value) {
      this.lineHeight = value
    },
    // 设置背景
    setBackground(value) {
      this.background = value
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
