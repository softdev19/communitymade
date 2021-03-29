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
import { getActiveWorkOrders, getAvailableWorkOrders, getAllSkills, getSkillsById } from '../../thunk';
import { setUiBlock } from '../../actions';

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
        key: 'Available Orders',
        title: 'Available Orders',
        props: this.props,
      },
      {
        key: 'Active Orders',
        title: 'Active Orders',
        props: this.props,
      }
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

  async componentDidUpdate(prevProps, prevState){
    if((prevProps.availableWorkOrdersFetchSuccess != this.props.availableWorkOrdersFetchSuccess) || (prevProps.activeWorkOrdersFetchSuccess != this.props.activeWorkOrdersFetchSuccess)){
      try{
        if(this.props.availableWorkOrdersFetchSuccess || this.props.activeWorkOrdersFetchSuccess){
          this.props.setUiBlock(false);
        }
      } catch (e){
        
      }
    }
  }

  // for webvew screen testing
  // this.props.navigation.navigate('WebViewScreen', {url: 'https://www.youtube.com/watch?v=hMy5za-m5Ew&list=RDwQ8cfdBzaHI&index=6', title: 'test' })
  componentDidMount(){
    this.props.setUiBlock(true);
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      let { user } = this.props;
      this.props.getActiveWorkOrders({
        podId: user?.user?.podId,
        userId: user?.user?.id
      });
  
      this.props.getAvailableWorkOrders({
        podId: 1,
        userId: 1
      });
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

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

const mapStateToProps = ({ auth, workOrders }) => {
  let { activeOrders, availableOrders, activeWorkOrdersFetchSuccess, availableWorkOrdersFetchSuccess } = workOrders;
  let { user } = auth;
  return {
    user, 
    activeOrders,
    availableOrders,
    activeWorkOrdersFetchSuccess,
    availableWorkOrdersFetchSuccess
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUiBlock: (value) => dispatch(setUiBlock(value)),
    getAllSkills:() => dispatch(getAllSkills()),
    getSkillsById:(id) => dispatch(getSkillsById(id)),
    getActiveWorkOrders: (data) => dispatch(getActiveWorkOrders(data)),
    getAvailableWorkOrders: (data) => dispatch(getAvailableWorkOrders(data)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllOrdersScreen)
