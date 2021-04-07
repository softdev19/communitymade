import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size, style, color, fullScreen }) => {
  return (
    <View style={[styles.spinnerStyle, style, fullScreen && { flex: 1 }]}>
      <ActivityIndicator color={color || '#F6B74A'} size={size || 'large'} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  }
};

export { Spinner };
