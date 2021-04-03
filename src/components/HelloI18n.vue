<template>
  <p>{{ i18n.t('main.welcome', {company: "Radiant"}) }}</p>
  <p>{{ $t('main.welcome', {company: "Radiant"}) }}</p>
  <p>{{ i18n.t('main.new_messages', {n: 10}) }}</p>
  <p>{{ i18n.d(now, 'long') }}</p>
  <p>{{ i18n.n(money, 'currency') }}</p>
  <p>{{ i18n.t('main.new_messages', 1) }}</p>
  <p>{{ i18n.t('main.new_messages', 2) }}</p>
  <p>{{ i18n.t('main.new_messages', 4) }}</p>
  <p>{{ i18n.t('main.new_messages', 12) }}</p>
  <p>{{ i18n.t('main.new_messages', 21) }}</p>
  <p>{{ $t('main.new_messages', 21) }}</p>
  <p>{{ i18n.t('hello', {company: "dsdas"}) }}</p>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'HelloI18n',
  setup () {
    const i18n = useI18n({
      // inheritLocale: true,
      useScope: 'local'
    })
    const now = ref(new Date())

    const money = ref(1000)

    return { i18n, now, money }
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
