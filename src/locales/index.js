import zhJSON from './zh-CN.json'
import enJSON from './en.json'

let localeMessage = {}

const setLocale = (lang) => {
  localeMessage = lang === 'zh-CN' ? zhJSON : enJSON
}

setLocale(navigator.language ?? navigator.languages?.[0])

export { setLocale }

export default function (key) {
  return localeMessage[key] ?? ''
}
