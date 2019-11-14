import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // getToken from cookie

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach(() => {

})
