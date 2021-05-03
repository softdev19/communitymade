import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Header } from "../../components";
import { styles } from "./style";

export default class AccountConnectScreen extends Component {
  onPress = async () => {
    await this.props.navigation.replace("ConfirmAccountScreen");
    this.props.navigation.navigate("WebViewScreen", {
      url: "https://paskho-community-made-backend.herokuapp.com/stripe/connect",
      title: "Connect to Stripe",
    });
  };
  goback = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <View style={styles.container}>
        <Header title={""} onBackPress={this.goback} />
        <View style={[styles.container, styles.flexCenter]}>
          <Text style={[styles.title,styles.paddingTop]}>{"Payment Connect"}</Text>
          <Text style={styles.poweredBy}>
            {"Powered By"} <Text style={styles.bold}>{"Stripe"}</Text>
          </Text>
          <Text style={styles.text}>
            {
              "Paskho Community Made uses Stripe Connect to facilitate ACH payments directly to your bank account."
            }
          </Text>
          <Text style={styles.text}>
            {
              "Stripe is used by over 100,000 companies around the world to securely send and recieve payments. "
            }
          </Text>
          <Text style={styles.text}>
            {
              "Once you securely connect your bank account via Stripe, you will recieve direct deposite payments immediately upon tasks completion and approval."
            }
          </Text>
          <TouchableOpacity
            onPress={this.onPress}
            style={[styles.button, styles.blueButton]}
          >
            <Text style={styles.blueButtonText}>{"Connect My Account"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
