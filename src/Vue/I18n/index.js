import Vue from 'vue'
import VueI18n from "vue-i18n";
Vue.use(VueI18n)

const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  }
}

export default new VueI18n({
  locale: 'ja',
  fallbackLocale: 'en',
  messages
})