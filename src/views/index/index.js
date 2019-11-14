const ePub = window.ePub
const EPUBJS = window.EPUBJS
const QiuPen = window.QiuPen
export default {
  data() {
    return {
      book: null,
      drawer_open: false
    };
  },
  components: {},
  mounted() {
    this.loadBook('https://img1.yunser.com/epub/test.epub')
  },
  created() {


  },
  methods: {
    loadBook(content) {
      document.getElementById('area').style.height = window.innerHeight - 200 + 'px'
      this.book = ePub({
        bookPath: content,
        restore: false,
        spreads: false
      })
      this.book.renderTo('area').then(() => {
        // this.setStyle()
      })
    },
    setStyle() {
      // TODO ???
      if (!this.book) {
        return
      }
      // this.book.setStyle('font-size', this.options.fontSize + 'px')
      // this.book.setStyle('background-color', this.options.bgColor)
      // this.book.setStyle('font-family', this.options.fontFamily)
      // this.book.setStyle('line-height', 3)
      // this.book.renderer.forceSingle(false)
      // this.book.setStyle('color', this.themes[this.options.theme].color)
      // this.book.setStyle('background-color', this.themes[this.options.theme].bgColor)
    },
    prev() {
      this.book.prevPage()
    },
    next() {
      this.book.nextPage()
    },
    menu_click() {
      this.drawer_open = true
    },
    spellcheck_click() {
      this.drawer_open = true
    },
    library_books_click() {
      this.drawer_open = true
    },
    search_click() {
      this.drawer_open = true
    },
    bookmark_border_click() {
      this.drawer_open = true
    },
    crop_free_click() {
      this.drawer_open = true
    },
  }
}

