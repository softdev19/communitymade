import Toast from 'react-native-toast-message'
import i18n from 'i18next'
import _ from 'lodash'

export function getErrorMessage(error, ns) {
  let errorType = 'generic-error'

  if (error) {
    if (typeof error === 'string') {
      errorType = error
    } else if (typeof error.message === 'string') {
      errorType = error.message
    } else if (typeof error.name === 'string') {
      errorType = error.name
    } else if (typeof error.code === 'string') {
      errorType = `ERROR code: ${error.code}`
    } else if (Array.isArray(error)) {
      let _error = _.head(error)
      if (typeof _error === 'string') {
        errorType = _error
      }
    }
  }

  const t = i18n.getFixedT(null, ns || ['errors'])
  let text = t(errorType) || errorType
  return text
}

export default function ShowError(error, ns) {
  const text = getErrorMessage(error, ns)
  Toast.show({
    text1: text,
    type: 'error',
    position: 'top',
    visibilityTime: 5000
  })
}
