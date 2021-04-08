<template>
  <Header/>
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.2/css/all.css"/>
  <router-view/>
</template>

<style lang="scss">
  body{
    margin: 0;
    padding: 0;
    font-family: "Century Gothic", sans-serif;
  }
    @font-face {
      font-family: 'Old London';
      src: url('assets/fonts/oldLondon/OldLondon.ttf') format('truetype');
      src: url('assets/fonts/oldLondon/OldLondonAlternate.ttf') format('truetype');
      src: url('assets/fonts/oldLondon/Olondon_.otf');
      src: url('assets/fonts/oldLondon/Olondona.otf');
    }
</style>
<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { SUPPORT_LOCALES, i18n } from './i18n'
import { useRouter } from 'vue-router'
import Header from './components/Header'
export default defineComponent({
  name: 'HelloI18n',
  components: {
    Header
  },
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
