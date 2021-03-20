/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
// import { withTranslation } from 'react-i18next';
import { ImageBackground, View, Text } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';
import { images } from '../../common';
import COLORS from '../../common/colors';
import { commonStyle as cs, fullWidth, scaledFontSize } from '../../common/styles';
import { Header } from '../../components';
import styles from './styles';
import { connect } from 'react-redux'
import ActiveOrders from './tabs/ActiveOrders';
import AvailableOrders from './tabs/AvailableOrders';


class AllOrdersScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  tabsConfig = () => {
    const routes = [
      {
        key: 'Active Orders',
        title: 'Active Orders',
        props: this.props,
      },
      {
        key: 'Available Orders',
        title: 'Available Orders',
        props: this.props,
      },
    ];

    let tabData = [];

    return { routes, tabData };
  };

  goBack = () => {
    this.props.navigation.goBack();
  };

  editProfile = () => {
    this.props.navigation.navigate('ConsultantEditProfile');
  };

  render() {
    const { index } = this.state;
    const { routes, tabData } = this.tabsConfig();
    console.log('App Data:.....', this.props);
    return (
      <ImageBackground source={images.appBackground} style={styles.container}>
        <View style={[{ flexDirection: 'column', height: '100%'}, cs.elevatedShadow]}>
          <Header
            title={'Your Workspace'}
            onBackPress={this.goBack}
            back={false}
            style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
          />
            <TabView
              style={{ borderTopWidth: 1, borderColor: COLORS.BORDER_COLOR }}
              swipeEnabled={true}
              navigationState={{ index: index, routes: routes }}
              renderScene={(route) => {
                switch (route.route.key) {
                  case 'Active Orders':
                    return <ActiveOrders   {...this.props} />;
                  case 'Available Orders':
                    return <AvailableOrders {...this.props} />;
                  default:
                    return null;
                }
              }}
              initialLayout={{ width: fullWidth }}
              removeClippedSubViews={true}
              onIndexChange={(index) => {
                this.setState({ index });
              }}
              renderTabBar={(props) => (
                <TabBar
                  {...props}
                  indicatorStyle={{
                    backgroundColor: COLORS.WHITE,
                    borderBottomWidth: 3,
                    borderColor: COLORS.PRIMARY_LIGHT_BLUE,
                    width: 150,
                    marginHorizontal: 30,
                  }}
                  renderLabel={({ route, focused, color }) => (
                    <Text style={{ color: COLORS.PRIMARY_BLUE, fontSize: scaledFontSize(12) }}>{route.title}</Text>
                  )}
                  tabStyle={styles.tab}
                  renderLabel={(scene) => {
                    return (
                      <View style={[styles.tabLabelContainer]}>
                        <Text style={styles.tabText}>{scene.route.title}</Text>
                      </View>
                    );
                  }}
                  style={{
                    backgroundColor: COLORS.WHITE,
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                  }}
                  labelStyle={{ color: COLORS.RED }}
                /> 
              )}
            />
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllOrdersScreen)
