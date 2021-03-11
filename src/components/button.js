import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, TouchableNativeFeedback, Platform, Image, ActivityIndicator, Text } from 'react-native';
// import { Text } from './';
// import { images } from '../common';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class Button extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string.isRequired,
    badgeText: PropTypes.any,
    badgeStyle: PropTypes.any,
    badgeTextStyle: PropTypes.any,
    style: PropTypes.any.isRequired,
    textStyle: PropTypes.any.isRequired,
    imageSource: PropTypes.any,
    imageStyle: PropTypes.any,
    isLoading: PropTypes.bool,
    showDot: PropTypes.bool,
    notificationCount: PropTypes.number,
    disabled: PropTypes.bool,
    loadingColor: PropTypes.any,
    next: PropTypes.bool,
  };

  static defaultProps = {
    onPress: () => {},
    imageSource: null,
    imageStyle: null,
    isLoading: false,
    disabled: false,
    loadingColor: null,
    next: false,
  };

  render() {
    const TouchableWrapper = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;
    const {
      isLoading,
      onPress,
      text,
      style,
      imageSource,
      imageStyle,
      badgeText,
      badgeStyle,
      disabled,
      showDot,
      notificationCount,
      badgeTextStyle,
      loadingColor,
      textStyle,
      next,
    } = this.props;
    return (
      <TouchableWrapper disabled={isLoading || disabled} onPress={onPress}>
        <View style={style}>
          {badgeText ? (
            <View style={badgeStyle}>
              <Text style={badgeTextStyle} numberOfLines={1}>
                {badgeText}
              </Text>
            </View>
          ) : null}
          <View style={{ flexDirection: 'row' }}>
            {imageSource ? <Image source={imageSource} style={imageStyle} /> : null}
            {showDot && (
              <View
                style={{
                  height: 7,
                  width: 7,
                  backgroundColor: '#D0021B',
                  borderRadius: 5,
                }}
              />
            )}
            {notificationCount > 0 && (
              <View
                style={{
                  position: 'absolute',
                  left: 16,
                  backgroundColor: '#D0021B',
                  borderRadius: 9,
                  width: 19,
                  height: 19,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>{notificationCount}</Text>
              </View>
            )}
          </View>
          {!isLoading ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={textStyle}>{text}</Text>
              {/* {next && <AntDesign name={'arrowright'} size={22} color={'white'} style={{ paddingLeft: 5 }} />} */}
            </View>
          ) : (
            <ActivityIndicator size={'small'} color={loadingColor} />
          )}
        </View>
      </TouchableWrapper>
    );
  }
}
