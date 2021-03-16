<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
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

export default defineComponent({
  name: 'HelloI18n',
  setup () {
    const { t, d, n, tm, locale } = useI18n({
      // inheritLocale: true,
      useScope: 'global'
    })

    const switchLanguage = async () => {
      locale.value = locale.value === 'en' ? 'ru' : 'en'
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
