import React, { Component } from 'react';
import {
    View,
    Dimensions,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    Image,
    Platform,
    Linking,
    I18nManager
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
// import {
//     Spinner
// } from '../../components/common'
import { WebView } from 'react-native-webview';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';


const { height, width } = Dimensions.get('window');
const IS_IPHONE_X = height === 812 || height === 896;
import { images } from '../common';
import COLORS from '../common/colors';

let WEBVIEW_REF = 'webview';

class WebViewScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            refreshing: false,
        }
    }

    onBackwardOptionClick() {
        this.refs[WEBVIEW_REF].goBack();
    }

    onForwardOptionClick() {
        this.refs[WEBVIEW_REF].goForward();
    }

    onRefreshOptionClicked() {
        this.setState({ refreshing: true, isLoading: false })
        this.refs[WEBVIEW_REF].reload();
    }

    onOpenInChromeOptionClicked() {
        Linking.openURL(this.props.route?.params?.url).catch();
    }

    onCopyLinkOptionClicked() {
      Clipboard.setString(this.props.route?.params?.url);
    }

    renderForwardOption(isFromBottomBar) {
      return (
        <TouchableOpacity
            onPress={() => this.onForwardOptionClick()}
            style={isFromBottomBar ? styles.bottomButtonViewStyle : styles.rewindButtonStyle}>
            <Image
                source={images.arrowLeft}
                style={[isFromBottomBar ? styles.backwardButtonImageStyle : styles.rewindButtonImageStyle, { transform: [{ rotate: '180deg' }] }]}
            />
        </TouchableOpacity>
      )
    }

    renderBackwardOption(isFromBottomBar) {
      return (
        <TouchableOpacity
          onPress={() => this.onBackwardOptionClick()}
          style={isFromBottomBar ? styles.bottomButtonViewStyle : styles.rewindButtonStyle}>
            <Image
              source={images.arrowLeft}
              style={isFromBottomBar ? styles.backwardButtonImageStyle : styles.rewindButtonImageStyle}
            />
        </TouchableOpacity>
      )
    }

    render() {
        const url = this.props.route?.params?.url;
        const title = this.props.route?.params?.title;
        return (
          <View style={{ flex: 1, backgroundColor: '#F0F0F0' }}>
            <StatusBar
                barStyle="dark-content"
                translucent={false}
                backgroundColor='#FFF'
            />

            <View style={styles.headerBarViewStyle}>
              <View style={styles.headerCloseOptionViewStyle}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                    style={styles.closeButtonStyle}
                >
                    <Image
                        source={images.arrowLeft}
                        style={styles.closeButtonImageStyle}
                    />
                </TouchableOpacity>
                <Text numberOfLines={1} lineBreakMode={'tail'} style={styles.headerTitleTextStyle}> {title ? title : url}</Text>
              </View>
            {
              Platform.OS === 'android' &&
              <Menu style={{ width: 30 }}>
                  <MenuTrigger style={styles.moreButtonStyle}>
                      <Image
                          source={images.backCircle}
                          style={styles.moreButtonImageStyle}
                      />
                  </MenuTrigger>

                  <MenuOptions optionsContainerStyle={{ width: 150, marginEnd: 10 }}>
                    <MenuOption disabled={true}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            {/* backward option */}
                            {I18nManager.isRTL ? this.renderForwardOption(false) : this.renderBackwardOption(false)}

                            <View style={{ width: 2, height: 20, backgroundColor: '#F0F0F0' }} />

                            {/* fwrd option */}
                            {I18nManager.isRTL ? this.renderBackwardOption(false) : this.renderForwardOption(false)}
                        </View>
                    </MenuOption>

                    <View style={styles.dividerLineStyle} />

                      <MenuOption onSelect={() => this.onRefreshOptionClicked()}>
                          <Text style={styles.menuOptionsStyle}>{'Refresh'}</Text>
                      </MenuOption>

                      <View style={styles.dividerLineStyle} />

                      <MenuOption onSelect={() => this.onOpenInChromeOptionClicked()}>
                          <Text style={styles.menuOptionsStyle}>{'Open In Chrome'}</Text>
                      </MenuOption>

                      <View style={styles.dividerLineStyle} />

                      <MenuOption onSelect={() => this.onCopyLinkOptionClicked()}>
                          <Text style={styles.menuOptionsStyle}>{'Copy Link'}</Text>
                      </MenuOption>

                      <View style={styles.dividerLineStyle} />

                  </MenuOptions>
              </Menu>
            }
            </View>

            <WebView
                ref={WEBVIEW_REF}
                style={{ flex: 1 }}
                source={{ uri: url }}
                onLoadStart={() => this.onLoadStart()}
                onLoadEnd={() => this.onLoadEnd()}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                decelerationRate="normal"
                scalesPageToFit={true}
                startInLoadingState={false}
                onNavigationStateChange={navState => {
                    this.setState({ currentLoadedUrl: navState.url })
                }}

            />
            {/* {this.state.isLoading && <Spinner fullScreen style={{ position: 'absolute', alignSelf: 'center', top: height * 0.4 }} />} */}

            {
                Platform.OS === 'ios' &&
                <View style={styles.bottomContainerStyle}>
                    {/* backward option */}
                    {I18nManager.isRTL ? this.renderForwardOption(true) : this.renderBackwardOption(true)}

                    {/* fwrd option */}
                    {I18nManager.isRTL ? this.renderBackwardOption(true) : this.renderForwardOption(true)}

                    {/* reload option */}
                    <TouchableOpacity
                        onPress={() => this.onRefreshOptionClicked()}
                        style={styles.bottomButtonViewStyle}
                    >
                        <Image
                            source={images.refresh}
                            style={styles.shareButtomImageStyle}
                        />
                    </TouchableOpacity>
                </View>
            }
        </View>
      );
    }

    onLoadStart() {
        if (this.state.refreshing) {
            this.setState({ refreshing: false })
        }
        else {
            this.setState({ isLoading: true });
        }
    }

    onLoadEnd() {
        this.setState({ isLoading: false });
    }

  }

const styles = StyleSheet.create({

    headerBarViewStyle: {
        width: width,
        paddingTop: Platform.OS === 'ios' ? (IS_IPHONE_X ? 40 : 20) : 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.WHITE,
        paddingBottom:10
    },
    closeButtonStyle: {
        paddingStart: 12, paddingVertical: 5, justifyContent: 'center', alignItems: 'center'
    },
    closeButtonImageStyle: {
        tintColor: COLORS.BLACK, resizeMode: 'contain', height: 30, width: 30
    },
    moreButtonStyle: {
        paddingEnd: 12, paddingVertical: 5, justifyContent: 'center', alignItems: 'center'
    },
    moreButtonImageStyle: {
        tintColor: COLORS.BLACK, resizeMode: 'contain', height: 20, width: 20
    },
    headerCloseOptionViewStyle: {
        flexDirection: 'row', paddingVertical: 5, justifyContent: 'center', alignItems: 'center'
    },
    headerTitleTextStyle: {
       fontSize: 17, color: COLORS.BLACK,marginHorizontal:10,width:width-12-30-10-10-12-20,textAlign:'left'
    },
    bottomContainerStyle: {
        paddingBottom: Platform.OS === 'ios' ? (IS_IPHONE_X ? 30 : 20) : 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: COLORS.WHITE, paddingTop: 15, paddingHorizontal: 15
    },
    backwardButtonImageStyle: {
        tintColor: COLORS.BLACK, resizeMode: 'contain', height: 24, width: 24
    },
    bottomButtonViewStyle: {
        paddingHorizontal: 12, paddingVertical: 5, justifyContent: 'center', alignItems: 'center'
    },
    shareButtomImageStyle: {
        tintColor: COLORS.BLACK, resizeMode: 'contain', height: 18, width: 20
    },
    rewindButtonStyle: {
        flex: .4, justifyContent: 'center', alignItems: 'center',height:27
    },
    rewindButtonImageStyle: {
        tintColor: COLORS.BLACK, resizeMode: 'contain', height: 13, width: 10
    },
    dividerLineStyle: {
        height: 1, backgroundColor: '#F0F0F0', marginHorizontal: 8
    },
    menuOptionsStyle: {
       fontSize: 14, color: COLORS.BLACK, paddingVertical: 3, paddingHorizontal: 3
    }



});

export default WebViewScreen;
