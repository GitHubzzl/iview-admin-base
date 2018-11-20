import Main from '@/components/main'

export default [
  {
    path:'/login',
    name:'login',
    meta:{
      title:'Login - 登录',
      hideInMenu:true
    },
    component:()=>import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: false,
      notCache: true,
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: false,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '',
    name: 'doc',
    meta: {
      title: '文档',
      href: '#',
      icon: 'ios-book'
    }
  }
]
