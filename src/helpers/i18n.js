import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import json from '../language/en.json'

i18n.use(initReactI18next).init({
  resources: {},
  lng: 'en-GB',
  fallbackLng: 'en-GB',
  // debug: true,
  interpolation: { escapeValue: false }
})
Object.keys(json).map(val => {
  i18n.addResourceBundle('en-GB', val, json[val], true, true)
})

export default i18n
