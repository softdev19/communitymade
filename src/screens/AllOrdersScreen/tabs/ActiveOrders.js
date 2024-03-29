import React, { Component } from 'react';
import { View, Image, Text, FlatList, ActivityIndicator } from 'react-native';

import { images } from '../../../common';
// import { DoneCardUser } from '../../../components';
import { commonStyle as cs, fullWidth } from '../../../common/styles';
import COLORS from '../../../common/colors';
import styles from '../styles';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { TaskCard } from '../../../components';

class ActiveOrders extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { activeOrders } = this.props;
    return (
      <>
        <View style={styles.scrollView}>
          {activeOrders?.length > 0 ? (
            <FlatList
              data={activeOrders}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => {
                return (
                  <TaskCard
                    data={item}
                    onPress={() =>
                    this.props.navigation.navigate('OrderDetails',{ order: item })
                    }
                    showButton
                    showClaimedQuantity
                  />
                )
              }}
              showsVerticalScrollIndicator={true}
            />) :
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
              <Text> No data available </Text>
            </View>
          }
        </View>
      </>
    );
  }
}

export default ActiveOrders;
