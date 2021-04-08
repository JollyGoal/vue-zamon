import { createRouter, createWebHistory } from 'vue-router'
import { getBrowserLocale, SUPPORT_LOCALES, i18n, loadLocaleMessages, setI18nLanguage } from '../i18n'

const routes = [
  {
    path: '/:locale',
    component: {
      template: '<router-view></router-view>'
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
      },
      {
        path: 'm',
        name: 'm',
        component: () => import('../components/HelloI18n.vue')
      },
      {
        path: 'about',

        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    redirect () {
      return getBrowserLocale()
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  window.scrollTo(0, 0)
  const paramsLocale = to.params.locale

  const locale = getBrowserLocale()

  // use locale if paramsLocale is not in SUPPORT_LOCALES
  if (!SUPPORT_LOCALES.includes(paramsLocale)) {
    return next(`/${locale}`)
  }

  // load locale messages
  if (!i18n.global.availableLocales.includes(paramsLocale)) {
    await loadLocaleMessages(i18n, paramsLocale)
  }

  // set i18n language
  setI18nLanguage(i18n, paramsLocale)

  return next()
})

export default router
