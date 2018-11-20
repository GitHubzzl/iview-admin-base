import {
  getMenuByRouter,
} from '@/libs/util'
import router from '@/router'
import routers from '@/router/routers'
export default {
  state:{
    breadCrumbList: [],
    tagNavList: [],
    homeRoute: {},
    // local: localRead('local'),
    errorList: [],
    hasReadErrorPage: false
  },
  getters:{
    menuList: (state, getters) => getMenuByRouter(routers),
    errorCount: state => state.errorList.length
  }
}
