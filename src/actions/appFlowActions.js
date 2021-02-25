import * as actionTypes from '../constants/actionTypes'
import { BackHandler } from 'react-native'

let backHandlerEvent

export function setUiBlock(block) {
  if (block)
    backHandlerEvent = BackHandler.addEventListener('hardwareBackPress', () => {
      console.log('BLOCKED BACK BUTTON')
      return true
    })
  if (!block && backHandlerEvent && backHandlerEvent.remove)
    backHandlerEvent.remove()
  return {
    type: actionTypes.UI_BLOCK,
    payload: block
  }
}
