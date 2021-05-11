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
import Spacer from '../../components/atoms/Spacer'
import ReviewDetailsItem from '../../components/organisms/ReviewDetailsItem'


class ReviewTaskDetailsScreen extends React.Component {
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

  setQuantity = quantity => {
    this.setState({ quantity })
  }

  render() {
    let { order } = this.props.route.params;
 
    return (
      <ImageBackground source={images.appBackground} style={styles.container}>
        <View style={[{ flexDirection: 'column' }, cs.elevatedShadow]}>
          <Header
            title={'Review Task Details'}
            onBackPress={this.goBack}
          />
        <InputScrollView
          keyboardOffset={platform.topSpace ? platform.topSpace + 20 : 40}
          keyboardShouldPersistTaps="always">
        <Spacer />
        <ScreenTitle title={'Tasks Details'} />
        <Spacer />
        <ReviewDetailsItem
          task_name={order.name}
          end_date={moment(order.endDate).format('MM/DD/YY')}
          payment={order.paymentTerms}
          totalPayment={order?.userTaskDetails?.completedQuantity * order?.paymentTerms || '0'}
          totalCompleted={order?.userTaskDetails?.completedQuantity}
        />

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

        <View style={styles.footer} />
        </InputScrollView>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = ({ }) => {}

const mapDispatchToProps = (dispatch) => {
  return {

   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewTaskDetailsScreen)
