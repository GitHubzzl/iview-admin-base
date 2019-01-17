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
      title: '首页',
      notCache: true,
      icon: 'md-home'
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
        component: () => import('@/view/home'),
      },]
  },
  {
    path: '/',
    name: 'doc',
    component: Main,
    meta: {
      title: 'Demo',
      icon: 'ios-book'
    },
    children: [
      {
        path: '/rules',
        name: 'rules',
        meta: {
          hideInMenu: false,
          title: '校验',
          notCache: true,
          icon: 'ios-book'
        },
        component: () => import('@/view/doc/rules/rules.vue')
      },
      {
        path: '/tableArea',
        name: 'tableArea',
        meta: {
          hideInMenu: false,
          title: '动态表单',
          notCache: true,
          icon: 'ios-book'
        },
        component: () => import('@/view/doc/table-area/table-area.vue')
      },
      {
        path: '/tableArea2',
        name: 'tableArea2',
        meta: {
          hideInMenu: false,
          title: '动态表单v1.0.1',
          notCache: true,
          icon: 'ios-book'
        },
        component: () => import('@/view/doc/table-area2/table-area.vue')
      },
      {
        path: '/tableArea3',
        name: 'tableArea3',
        meta: {
          hideInMenu: false,
          title: '动态表单v1.0.2',
          notCache: true,
          icon: 'ios-book'
        },
        component: () => import('@/view/doc/table-area3/table-area.vue')
      },
      {
        path: '/tableArea4',
        name: 'tableArea4',
        meta: {
          hideInMenu: false,
          title: '动态表单v1.0.3',
          notCache: true,
          icon: 'ios-book'
        },
        component: () => import('@/view/doc/table-area4/table-area.vue')
      },
      {
        path: '/tableArea5',
        name: 'tableArea5',
        meta: {
          hideInMenu: false,
          title: '动态表单v1.0.4',
          notCache: true,
          icon: 'ios-book'
        },
        component: () => import('@/view/doc/table-area5/table-area.vue')
      },
      {
        path: '/tableArea6',
        name: 'tableArea6',
        meta: {
          hideInMenu: false,
          title: '动态表单v1.0.5',
          notCache: true,
          icon: 'ios-book'
        },
        component: () => import('@/view/doc/table-area6/table-area.vue')
      }
    ]
  }
]
