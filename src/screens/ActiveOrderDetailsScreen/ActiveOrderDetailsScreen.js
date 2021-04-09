/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
// import { withTranslation } from 'react-i18next';
import { ImageBackground, View, Text } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';
import { images } from '../../common';
import COLORS from '../../common/colors';
import { commonStyle as cs, fullWidth, scaledFontSize, GetOptimalWidth } from '../../common/styles';
import { Header, TaskCard } from '../../components';
import platform from '../../helpers/platform'
import { Button } from 'react-native-material-ui'
import styles from './styles';
import { connect } from 'react-redux'
import { updateTask } from '../../thunk';
import _ from 'lodash'
import InputScrollView from 'react-native-input-scroll-view'
import Slider from "react-native-slider";
import ScreenTitle from '../../components/molecules/ScreenTitle'
import OrderItem from '../../components/organisms/OrderItem'
import Spacer from '../../components/atoms/Spacer'
import CustomInput from '../../components/organisms/CustomInput'


class ActiveOrderDetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      message: '',
      taskCount:1,
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

  onPressUpdateCompletedQty = () => {
    let { order } = this.props.route.params;
    this.props.updateTask({
      taskId: order?.id,
      userId: this.props.user?.id,
      claimedQuantity: this.state?.taskCount,
    })
  }
  
  onPressMessage = () => {

  }

  setMessage = (message) => {
    this.setState({ message })
  }

  render() {
    let { order } = this.props.route.params;
    let { message, taskCount } = this.state;
    return (
      <ImageBackground source={images.appBackground} style={styles.container}>
        <View style={[{ flexDirection: 'column' }, cs.elevatedShadow]}>
          <Header
            title={'Active Task Details'}
            onBackPress={this.goBack}
          />
        <InputScrollView
          keyboardOffset={platform.topSpace ? platform.topSpace + 20 : 40}
          keyboardShouldPersistTaps="always"
        >
          <View style={[styles.row, { marginTop: 20 }]}>
            <Text style={styles.title}>{'Amount Earned'}</Text>
            <Text style={styles.subtitle}>${'30'}</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <TaskCard
              data={order}
              showClaimedQuantity
            />
          </View>
        <Spacer />
        <Spacer size="XS" />
        <Spacer />
  
        <Button
          raised
          style={{ container: styles.btn }}
          text={'View Instructions PDF'}
          upperCase={false}
          onPress={() => this.onPressPDF(order)}
        />
        <Button
          raised
          style={{ container: styles.btn }}
          text={'View Instructions Video'}
          upperCase={false}
          onPress={() => this.onPressVideo(order)}
        />
        <Button
          raised
          style={{ container: styles.btn }}
          text={'Mark Task Completed'}
          upperCase={false}
          onPress={this.onPressCompleted}
        />
        <Spacer size="XS" />
        {/* <ScreenTitle title={'Questions ?  Problems ?'} />
        <Spacer size="S" /> */}
        {/* <CustomInput
          _value={message}
          _onChangeText={text => this.setMessage(text)}
          multiline
          numberOfLines={5}
          styleContainer={styles.inputContainer}
          styleBlock={styles.input}
        />
        <Spacer size="S" /> */}
        {/* <Button
          raised
          style={{ container: styles.smallBtn }}
          text={'Message paskho'}
          disabled={_.size(message) < 10}
          onPress={this.onPressMessage}
        /> */}
        <View style={{
            flex: 1,
            marginHorizontal: GetOptimalWidth(50),
            alignItems: "stretch",
            justifyContent: "center"
          }}>
          <Slider
            value={taskCount}
            minimumValue={0}
            maximumValue={order?.userTaskDetails?.claimedQuantity}
            step={1}
            thumbTintColor={'#343434'}
            maximumTrackTintColor={'#b3b3b3'}
            thumbTouchSize={{width: 40, height: 40}}
            onValueChange={value => this.setState({ taskCount: value })}
          />
          <Text>
            Items: {taskCount}
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Button
            raised
            style={{ container: styles.btn }}
            text={'Update Completed Quantity'}
            upperCase={false}
            onPress={this.onPressUpdateCompletedQty}
          />
        </View>
        <View style={styles.footer} />
      </InputScrollView>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  let { user } = auth?.user;
  return {
    user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTask: (data) => dispatch(updateTask(data)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveOrderDetailsScreen)
