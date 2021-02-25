import Toast from 'react-native-toast-message'

export default function ShowSuccess(text) {
  Toast.show({
    text1: text,
    type: 'success',
    position: 'bottom',
    visibilityTime: 5000
  })
}
