import React from 'react'
import { Image } from 'react-native'
import platform from '../../helpers/platform'

export default function Icon({
  name = 'logo',
  size = 30,
  style,
  source,
  resizeMode,
  width,
  height,
  ...rest
}) {
  const _size = { width: width || size, height: height || size }
  return (
    <Image
      style={[_size, style]}
      source={source || { uri: name }}
      resizeMode={resizeMode || 'contain'}
    />
  )
}
