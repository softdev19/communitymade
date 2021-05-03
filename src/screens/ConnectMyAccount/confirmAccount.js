import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { GetOptimalHieght } from "../../common";
import { styles } from "./style";

export default class ConfirmAccountScreen extends Component {
  onCancelPress = () => {
    this.props.navigation.goBack();
  };
  onConfirmPress = () => {
    this.props.navigation.goBack();
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
