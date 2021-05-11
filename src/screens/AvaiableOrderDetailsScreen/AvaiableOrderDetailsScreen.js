/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
// import { withTranslation } from 'react-i18next';
import { ImageBackground, View, Text } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';
import { images } from '../../common';
import COLORS from '../../common/colors';
import { commonStyle as cs, fullWidth, scaledFontSize } from '../../common/styles';
import { Header, TaskCard } from '../../components';
import platform from '../../helpers/platform'
import { Button } from 'react-native-material-ui'
import styles from './styles';
import { connect } from 'react-redux'
import _ from 'lodash'
import moment from 'moment'
import InputScrollView from 'react-native-input-scroll-view'
import ScreenTitle from '../../components/molecules/ScreenTitle'
import OrderItem from '../../components/organisms/OrderItem'
import Spacer from '../../components/atoms/Spacer'
import CustomInput from '../../components/organisms/CustomInput'
import ClaimQuantity from '../../components/organisms/ClaimQuantity'
import OrderNewDetailsItem from '../../components/organisms/OrderNewDetailsItem'
import { createTask, userSilentLogin } from '../../thunk';
import { setUiBlock } from '../../actions';

let item = { name: "Serene Black Women's Pant", end_date: "04-01-2021", claimed: "10", completed: "2", payment: "15" };

class AvaiableOrderDetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      quantity: this.props.route?.params?.order?.minTaskQuantity,
    }
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  onPressPDF = item => {
    this.props.navigation.navigate('PDFViewScreen', {url: item?.instructionsPdfLink, title: item?.name })
   }
   
  onPressVideo = item => {
  this.props.navigation.navigate('WebViewScreen', {url: item?.instructionsVideoLink, title: item?.name })
  }
  
  onPressCompleted = () => {

  }

  setMessage = (message) => {
    this.setState({ message })
  }

  componentDidMount(){
    this.props.setUiBlock(true);
    let { userLoginInfo } = this.props;
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.props.dispatchUserSilentLogin({ email: userLoginInfo?.email, password: userLoginInfo?.password })
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  onPressClaim = (order, quantity ) => {
    let { stripePayoutsEnabled } = this.props?.user;
    let userId = this.props?.user?.id;
    let workOrderId = order?.id;
    let claimedQuantity = parseInt(quantity);
    if(stripePayoutsEnabled){
      this.props.createTask({
        userId,
        workOrderId,
        claimedQuantity
       }, order, this.props.navigation)
    } else {
      this.props.navigation.navigate('AccountConnectScreen', {
        userId,
        workOrderId,
        claimedQuantity,
        order
      });
    }
  }

  setQuantity = quantity => {
    this.setState({ quantity })
  }

  render() {
    let { order } = this.props.route.params;
    let { quantity } = this.state;
    let { activeOrders } = this.props;
    return (
      <ImageBackground source={images.appBackground} style={styles.container}>
        <View style={[{ flexDirection: 'column' }, cs.elevatedShadow]}>
          <Header
            title={'Avaialable Task Details'}
            onBackPress={this.goBack}
          />
        <InputScrollView
          keyboardOffset={platform.topSpace ? platform.topSpace + 20 : 40}
          keyboardShouldPersistTaps="always">
        <Spacer />
        <ScreenTitle title={'Tasks Details'} />
        <Spacer />
        <OrderNewDetailsItem
          task_name={order.name}
          end_date={moment(order.endDate).format('MM/DD/YY')}
          payment={order.paymentTerms}
          totalQty={order.totalQuantity}
          est_time={order.timeEstimateMin}
          unclaimedQty={order.availableQuantity}
          minQty={order.minTaskQuantity}
          maxQty={order.maxTaskQuantity}
        />
        <Text style={styles.text}>{'*Please only claim a task quantity you can comfortable complete before the project end date. Failure to complete your tasks on time may impact the Tasks available to you in the future.'}</Text>
        <Spacer />
        <Button
          raised
          upperCase={false}
          style={{ container: styles.btn }}
          text={'View Instructions PDF'}
          upperCase={false}
          onPress={() => this.onPressPDF(order)}
        />
        <Button
          raised
          upperCase={false}
          style={{ container: styles.btn }}
          text={'View Instructions Video'}
          upperCase={false}
          onPress={() => this.onPressVideo(order)}
        />
        <Spacer />
        {
          activeOrders?.length == 0 && <ClaimQuantity
            minQty={order.minTaskQuantity}
            maxQty={order.maxTaskQuantity}
            quantity={quantity}
            setQuantity={this.setQuantity}
            onPressClaim={() => this.onPressClaim(order, quantity)}
        />
        }
        <View style={styles.footer} />
        </InputScrollView>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = ({ auth, workOrders }) => {
  let { user, userLoginInfo } = auth?.user;
  let { activeOrders } = workOrders;
  return {
    user,
    activeOrders,
    userLoginInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUiBlock: (value) => dispatch(setUiBlock(value)),
    createTask: (data, taskDetails, navigation) => dispatch(createTask(data, taskDetails, navigation)),
    dispatchUserSilentLogin: (data) => dispatch(userSilentLogin(data)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(AvaiableOrderDetailsScreen)
