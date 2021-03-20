import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Image, Platform, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Searchbar } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { images } from '../../common';
import COLORS from '../../common/colors';
import { commonStyle as cs, fullWidth, GetOptimalWidth, scaledFontSize, GetOptimalHieght } from '../../common/styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string,
    onBackPress: PropTypes.func,
    onMenuPress: PropTypes.func,
    onRightMostButtonPress: PropTypes.func,
    onChangeText: PropTypes.func,
    style: PropTypes.any,
    shadow: PropTypes.bool,
    menu: PropTypes.bool,
    search: PropTypes.bool,
    searchTerm: PropTypes.string,
    iconStyle: PropTypes.any,
    titleStyle: PropTypes.any,
    badgeCount: PropTypes.number,
    message: PropTypes.bool,
    back: PropTypes.bool,
  };

  static defaultProps = {
    onBackPress: () => {},
    onMenuPress: () => {},
    onRightMostButtonPress: () => {},
    onChangeText: () => {},
    title: null,
    style: null,
    shadow: true,
    menu: false,
    search: false,
    searchTerm: '',
    iconStyle: null,
    titleStyle: null,
    badgeCount: null,
    message: true,
    back: true,
  };

  render() {
    const {
      title,
      onBackPress,
      onChangeText,
      shadow,
      style,
      menu,
      search,
      searchTerm,
      onMenuPress,
      onRightMostButtonPress,
      iconStyle,
      titleStyle,
      message,
      isNotEditable,
      badgeCount,
      back,
    } = this.props;

    return (
      <View style={[styles.container, shadow && cs.elevatedShadow, style]}>
        <View style={styles.topContainer}>
          {!menu && back ? (
            <TouchableOpacity onPress={onBackPress}>
              <Image source={images.arrowLeft} resizeMode="contain" style={[styles.backButton, { ...iconStyle }]} />
            </TouchableOpacity>
          ) : menu ? (
            <TouchableOpacity onPress={onMenuPress}>
              <Image source={images.forgotPassword_image} resizeMode="contain" style={styles.backButton} />
            </TouchableOpacity>
          ) : (
            <View />
          )}

          {search ? (
            <TouchableOpacity
              onPress={() => {
                this.props.gotoSearch();
              }}>
              <Searchbar
                onSubmitEditing={this.props.onSubmitEditing}
                autoFocus={this.props.focused}
                onIconPress={this.props.searchContent}
                pointerEvents={isNotEditable && 'none'}
                onTouchStart={() => (isNotEditable ? this.props.gotoSearch() : null)}
                placeholder="Search"
                value={searchTerm}
                onChangeText={onChangeText}
                iconColor={COLORS.PRIMARY_BLUE}
                style={styles.searchbar}
                clearIcon={() =>
                  isNotEditable ? (
                    <View></View>
                  ) : (
                    <View /> // <AntDesign name="closecircle" size={GetOptimalHieght(23)} color={'#8491AD71'}></AntDesign>
                  )
                }
                // icon={() => <AntDesign name="search1" size={GetOptimalHieght(18)} color={COLORS.BLACK}></AntDesign>}
                inputStyle={{
                  color: COLORS.DARK_BUTTON,
                  padding: 0,
                  fontSize: scaledFontSize(14),
                 // fontFamily: 'Poppins',
                  fontWeight: '400',
                }}
              />
            </TouchableOpacity>
          ) : (
            <Text style={[styles.name, titleStyle && { ...titleStyle }]}>{title}</Text>
          )}
          {!menu || !message ? (
            <View />
          ) : (
            <TouchableOpacity onPress={onRightMostButtonPress}>
              <>
              {/* <SvgImages.MessageIconImage  style={styles.rightMostButton}/> */}
              </>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    paddingTop: Platform.OS == 'ios' ? 30 : null,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: GetOptimalWidth(16),
    borderBottomRightRadius: GetOptimalWidth(16),
  },
  name: {
    color: COLORS.POST_USERNAME,
    textAlign: 'center',
    fontSize: scaledFontSize(18),
   // fontFamily: 'Poppins',
    fontWeight: '600',
    paddingVertical: GetOptimalHieght(10),
  },
  topContainer: {
    width: fullWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: GetOptimalHieght(16),
    paddingHorizontal: GetOptimalWidth(24),
  },
  backButton: { height: GetOptimalHieght(20), width: GetOptimalWidth(20) },
  rightMostButton: { height: GetOptimalHieght(35), width: GetOptimalHieght(35) },
  imageContainer: {
    height: GetOptimalHieght(70),
    width: GetOptimalWidth(70),
    borderRadius: GetOptimalWidth(35),
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchbar: {
    width: GetOptimalWidth(256),
    height: GetOptimalHieght(36),
    borderRadius: GetOptimalWidth(30),
    elevation: 1.5,
    borderColor: COLORS.PLACE_HOLDER,
  },
});
