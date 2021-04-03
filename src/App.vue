<template>
  <div id="nav">
    <router-link :to="$i18nRoute({name: 'Home'})">Home</router-link> |
    <router-link :to="$i18nRoute({name: 'About'})">About</router-link>
  </div>
  <router-view/>
  <button @click="switchLanguage">change </button>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { SUPPORT_LOCALES, i18n } from './i18n'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'HelloI18n',
  setup () {
    const { t, d, n, tm, locale } = useI18n({
      // inheritLocale: true,
      useScope: 'global'
    })

    const router = useRouter()
    // const route = useRoute()

    const switchLanguage = async () => {
      for (const lang in SUPPORT_LOCALES) {
        if (SUPPORT_LOCALES[lang] === i18n.global.locale.value) {
          let newLangId = parseInt(lang) + 1
          if (newLangId >= SUPPORT_LOCALES.length) {
            newLangId = 0
          }
          // const locale = SUPPORT_LOCALES[newLangId]
          const to = router.resolve({
            params: { locale: SUPPORT_LOCALES[newLangId] }
          })
          router.push(to.path)
        }
      }
    }

    return { t, d, n, tm, locale, switchLanguage }
  }
})
</script>

<i18n>
{
  "en": {
    "hello": "Hello i18n in SFC! {company}"
  }
}
</i18n>
