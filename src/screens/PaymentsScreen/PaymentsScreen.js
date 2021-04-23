/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import { ImageBackground, View, Text, FlatList, ScrollView } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';
import { images } from '../../common';
import COLORS from '../../common/colors';
import { commonStyle as cs, fullWidth, scaledFontSize, GetOptimalWidth, GetOptimalHieght } from '../../common/styles';
import { Header, PaymentCard } from '../../components';
import platform from '../../helpers/platform'
import { Button } from 'react-native-material-ui'
import styles from './styles';
import { connect } from 'react-redux'

class PaymentsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      message: '',
      taskCount:1,
    }
  }

  render() {
    let { approvedWorkOrders, lifetimeEarnings } = this.props;
    return (
      <ImageBackground source={images.appBackground} style={styles.container}>
        <View style={[{ flexDirection: 'column' }, cs.elevatedShadow]}>
          <Header
            title={'Payments'}
            back={false}
          />
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', marginTop: GetOptimalHieght(20), marginBottom: GetOptimalHieght(20) }}>
          <Text style={styles.text}>{'Lifetime Earnings:  '}</Text>
          <Text style={styles.text}>{`$ ${lifetimeEarnings}`}</Text>
        </View>
        
        <ScrollView style={{ }}>
           {approvedWorkOrders?.length > 0 ? (
            <FlatList
              data={approvedWorkOrders}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => {
                return (
                  <PaymentCard
                    data={item}
                    onPress={() =>
                    this.props.navigation.navigate(
                      'AvaiableOrderDetailsScreen',
                      { order: item }
                      )
                    }
                  />
                )
              }}
              showsVerticalScrollIndicator={true}
            />) :
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
              <Text> No data available </Text>
            </View>
          }
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = ({ auth, workOrders }) => {
  let { approvedWorkOrders, lifetimeEarnings } = workOrders;
  let { user } = auth;
  return {
    user, 
    approvedWorkOrders,
    lifetimeEarnings
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUiBlock: (value) => dispatch(setUiBlock(value)),
    getAllSkills:() => dispatch(getAllSkills()),
    getSkillsById:(id) => dispatch(getSkillsById(id)),
    getActiveWorkOrders: (data) => dispatch(getActiveWorkOrders(data)),
    getAvailableWorkOrders: (data) => dispatch(getAvailableWorkOrders(data)),
    getWaitingReviewWorkOrders: (data) => dispatch(getWaitingReviewWorkOrders(data)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentsScreen)
