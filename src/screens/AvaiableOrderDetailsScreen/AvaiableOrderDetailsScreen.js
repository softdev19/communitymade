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

  onPressPDF = () => {

  }
  
  onPressVideo = () => {

  }
  
  onPressCompleted = () => {

  }

  setMessage = (message) => {
    this.setState({ message })
  }

  onPressClaim = (order, quantity ) => {
    this.props.navigation.navigate('OrderSuccess', { order, quantity })
  }

  setQuantity = quantity => {
    this.setState({ quantity })
  }

  render() {
    let { order } = this.props.route.params;
    let { quantity } = this.state;
    return (
      <ImageBackground source={images.appBackground} style={styles.container}>
        <View style={[{ flexDirection: 'column' }, cs.elevatedShadow]}>
          <Header
            title={'Avaialable Order Details'}
            onBackPress={this.goBack}
          />
        <InputScrollView
          keyboardOffset={platform.topSpace ? platform.topSpace + 20 : 40}
          keyboardShouldPersistTaps="always">
        <Spacer />
        <ScreenTitle title={'Work Order Details'} />
        <Spacer />
        <OrderNewDetailsItem
          task_name={order.name}
          end_date={moment(order.endDate).format('MM/DD/YY')}
          payment={order.paymentTerms}
          totalQty={order.totalQuantity}
          est_time={order.timeEstimateMin}
          unclaimedQty={order.unclaimedQty} // need to link
          minQty={order.minTaskQuantity}
          maxQty={order.maxTaskQuantity}
        />
        <Text style={styles.text}>{'*Please only claim a task quantity you can comfortable complete before the project end date. Failure to complete your tasks on time may impact the Work Orders available to you in the future.'}</Text>
        <Spacer />
        <Button
          raised
          upperCase={false}
          style={{ container: styles.btn }}
          text={'View Instructions PDF'}
          upperCase={false}
          onPress={this.onPressPDF}
        />
        <Button
          raised
          upperCase={false}
          style={{ container: styles.btn }}
          text={'View Instructions Video'}
          upperCase={false}
          onPress={this.onPressVideo}
        />
        <Spacer />
        <ClaimQuantity
          minQty={order.minTaskQuantity}
          maxQty={order.maxTaskQuantity}
          quantity={quantity}
          setQuantity={this.setQuantity}
          onPressClaim={() => this.onPressClaim(order, quantity)}
        />
        <View style={styles.footer} />
        </InputScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(AvaiableOrderDetailsScreen)
