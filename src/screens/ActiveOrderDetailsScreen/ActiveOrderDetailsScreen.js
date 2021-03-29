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
import InputScrollView from 'react-native-input-scroll-view'
import ScreenTitle from '../../components/molecules/ScreenTitle'
import OrderItem from '../../components/organisms/OrderItem'
import Spacer from '../../components/atoms/Spacer'
import CustomInput from '../../components/organisms/CustomInput'

let item = { name: "Serene Black Women's Pant", end_date: "04-01-2021", claimed: "10", completed: "2", payment: "15" };

class ActiveOrderDetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      message: ''
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
  
  onPressMessage = () => {

  }

  setMessage = (message) => {
    this.setState({ message })
  }

  render() {
    let { order } = this.props.route.params;
    let { message } = this.state;
    return (
      <ImageBackground source={images.appBackground} style={styles.container}>
        <View style={[{ flexDirection: 'column' }, cs.elevatedShadow]}>
          <Header
            title={'Active Order Details'}
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
          onPress={this.onPressPDF}
        />
        <Button
          raised
          style={{ container: styles.btn }}
          text={'View Instructions Video'}
          upperCase={false}
          onPress={this.onPressVideo}
        />
        <Button
          raised
          style={{ container: styles.btn }}
          text={'Mark Task Completed'}
          upperCase={false}
          onPress={this.onPressCompleted}
        />
        <Spacer size="XS" />
        <ScreenTitle title={'Questions ?  Problems ?'} />
        <Spacer size="S" />
        <CustomInput
          _value={message}
          _onChangeText={text => this.setMessage(text)}
          multiline
          numberOfLines={5}
          styleContainer={styles.inputContainer}
          styleBlock={styles.input}
        />
        <Spacer size="S" />
        <Button
          raised
          style={{ container: styles.smallBtn }}
          text={'Message paskho'}
          disabled={_.size(message) < 10}
          onPress={this.onPressMessage}
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

export default connect(mapStateToProps, mapDispatchToProps)(ActiveOrderDetailsScreen)
