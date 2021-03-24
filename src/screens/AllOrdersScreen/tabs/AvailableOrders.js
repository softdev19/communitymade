import React, { Component } from 'react';
import { View, Image, Text, FlatList, ActivityIndicator } from 'react-native';
import { images } from '../../../common';
import { commonStyle as cs, fullWidth } from '../../../common/styles';
import COLORS from '../../../common/colors';
import styles from '../styles';
import { TaskCard } from '../../../components';

const dataAvailable = [
  { name: "Serene Black Women's Pant", end_date: "03-21-2021", remaining: "50", est_time: "90", payment: "15", totalQty: 100, unclaimedQty: 50, minQty: 5, maxQty: 20 },
  { name: "Serene Black Women's Pant", end_date: "03-21-2021", remaining: "50", est_time: "90", payment: "15", totalQty: 100, unclaimedQty: 50, minQty: 5, maxQty: 20 },
  { name: "Serene Black Women's Pant", end_date: "03-21-2021", remaining: "50", est_time: "90", payment: "15", totalQty: 100, unclaimedQty: 50, minQty: 5, maxQty: 20 }
]

class AvailableOrders extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { availableOrders } = this.props;
    return (
      <>
        <View style={styles.scrollView}>
          {availableOrders.length > 0 ? (
            <FlatList
              data={availableOrders}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => {
                return (
                  <TaskCard
                  data={item}
                  onPress={() =>
                  this.props.navigation.navigate(
                    item.remaining ? 'OrderNewDetails' : 'OrderDetails',
                    { order: item }
                    )
                  }
                  showButton
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

export default AvailableOrders;
