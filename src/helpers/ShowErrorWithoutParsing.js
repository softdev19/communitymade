import Toast from 'react-native-toast-message'


export default function ShowError(text) {
  Toast.show({
    text1: text,
    type: 'error',
    position: 'top',
    visibilityTime: 5000
  })
}
