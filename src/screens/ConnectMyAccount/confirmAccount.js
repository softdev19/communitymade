import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { connect } from 'react-redux'
import { GetOptimalHieght } from "../../common";
import { createTask } from '../../thunk';
import { setUiBlock } from '../../actions';
import { styles } from "./style";

class ConfirmAccountScreen extends Component {
  onCancelPress = () => {
    this.props.navigation.goBack();
  };
  onConfirmPress = () => {
    let { userId, workOrderId, claimedQuantity, order } = this.props.route?.params;
    console.log('ConfirmAccountScreen', this.props.route?.params)
    this.props.setUiBlock(true);
    this.props.createTask({
      userId,
      workOrderId,
      claimedQuantity
     }, order, this.props.navigation)
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

const mapStateToProps = ({}) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUiBlock: (value) => dispatch(setUiBlock(value)),
    createTask: (data, taskDetails, navigation) => dispatch(createTask(data, taskDetails, navigation)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmAccountScreen)
