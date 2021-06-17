import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { connect } from 'react-redux'
import { GetOptimalHieght } from "../../common";
import { createTask, userSilentLogin } from '../../thunk';
import { setUiBlock } from '../../actions';
import { styles } from "./style";

class ConfirmAccountScreen extends Component {
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
  onCancelPress = () => {
    this.props.navigation.goBack();
  };
  onConfirmPress = () => {
    let { userId, workOrderId, claimedQuantity, order } = this.props.route?.params;
    __DEV__ && console.log('ConfirmAccountScreen', this.props.route?.params)
    let { stripePayoutsEnabled } = this.props?.user;
    if(stripePayoutsEnabled){
      this.props.setUiBlock(true);
      this.props.createTask({
        userId,
        workOrderId,
        claimedQuantity
      }, order, this.props.navigation)
    } else {
      this.props.navigation.navigate("WebViewScreen", {
        // url: "https://communitymade.paskho.com/stripe/connect",
        url: `https://communitymade.paskho.com/stripe/connect?token=${this.props.token}`,
        title: "Connect to Stripe",
        authToken: this.props?.token
      });
    }
  };
  render() {
    return (
      <View style={[styles.container, styles.flexCenter,{paddingTop:GetOptimalHieght(80)}]}>
        <Text style={styles.title}>Payment Connect</Text>
        <Text style={[styles.text, styles.maginVer]}>
          {
            "Please confirm that you have successfully connected your bank account via Stripe."
          }
        </Text>
        <TouchableOpacity
          onPress={this.onConfirmPress}
          style={[styles.button, styles.confirmButton, styles.maginVer]}
        >
          <Text style={styles.blueButtonText}>{"Confirm"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.onCancelPress}
          style={[styles.button, styles.cancelButton]}
        >
          <Text style={styles.cancelButtonText}>{"Cancel"}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  let { user, userLoginInfo, token } = auth?.user;
  return {
    user,
    token,
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

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmAccountScreen)
