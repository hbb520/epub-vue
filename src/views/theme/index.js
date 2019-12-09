import {
  getLS,
} from '../../utils/auth'

export default {
  components: {},
  data() {
    return {
      fontType: 'MicrosoftYaHei',
      fontsize: 16,
      lineHeight: 1.2,
      background: 'default',
      fontTypeList: [
        {
          label: '微软雅黑',
          value: 'MicrosoftYaHei',
        },
        {
          label: '黑体',
          value: 'SimHei',
        },
        {
          label: '宋体',
          value: 'SimSun, Songti SC, Songti TC',
        },
        {
          label: '楷体',
          value: 'KaiTi, Kaiti SC, Kaiti TC',
        },
        {
          label: '圆体',
          value: 'YouYuan, Yuanti SC, Yuanti TC',
        },
        {
          label: '方体',
          value: 'PingFang SC, PingFang TC',
        },
      ],
      backgroundList: [
        {
          value: {}
        },
      ]
    };
  },
  created() {
    this.getTheme()
  },
  methods: {
    close() {
      this.$emit('closeDialog', null, true);
    },
    getTheme() {
      this.fontType = getLS('fontFamily')
      this.fontsize = getLS('fontSize')
      this.lineHeight = getLS('lineHeight')
      this.background = getLS('background')
    },
    // 字体
    setFont(value) {
      console.log(value)
      this.$emit('setFont', value)
    },
    // 字体大小减一
    sub() {
      if (this.fontsize > 12) {
        this.fontsize--;
        this.$emit('setFontSize', this.fontsize)
      }
    },
    // 字体大小加一
    add() {
      if (this.fontsize < 50) {
        this.fontsize++;
        this.$emit('setFontSize', this.fontsize)
      }
    },
    // 设置字体行高
    setLineHeight(value) {
      this.lineHeight = value;
      this.$emit('setLineHeight', this.lineHeight, this.background)
    },
    // 设置背景
    setBackground(value) {
      this.background = value;
      this.$emit('setBackground', this.background)
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
