/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
// import { withTranslation } from 'react-i18next';
import { ImageBackground, View, Text } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';
import { images } from '../../common';
import COLORS from '../../common/colors';
import { commonStyle as cs, fullWidth, scaledFontSize } from '../../common/styles';
import { Header, TaskCard } from '../../components';
import styles from './styles';
import { connect } from 'react-redux'

let item = { name: "Serene Black Women's Pant", end_date: "04-01-2021", claimed: "10", completed: "2", payment: "15" };

class OrderDetailsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    let { order } = this.props.route.params;
    return (
      <ImageBackground source={images.appBackground} style={styles.container}>
        <View style={[{ flexDirection: 'column' }, cs.elevatedShadow]}>
          <Header
            title={'Order Details'}
            onBackPress={this.goBack}
          />
          <View style={{ marginTop: 10 }}>
          <TaskCard
            data={order}
          />
          </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetailsScreen)
