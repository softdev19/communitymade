import React, { Component } from 'react';
import { View, Image, Text, FlatList, ActivityIndicator } from 'react-native';

import { images } from '../../../common';
// import { DoneCardUser } from '../../../components';
import { commonStyle as cs, fullWidth } from '../../../common/styles';
import COLORS from '../../../common/colors';
import styles from '../styles';
import AntIcon from 'react-native-vector-icons/AntDesign';
// import { AllCaughtUp } from '../../../components/AllCaughtUp';
import OrderItem from '../../../components/organisms/OrderItem'
import moment from 'moment'

const dataActive = [
  { name: "Serene Black Women's Pant", end_date: "04-01-2021", claimed: "10", completed: "2", payment: "15" }
]

class ActiveOrders extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(' this.props', this.props);
    return (
      <>
          <View style={styles.scrollView}>
            {dataActive.length > 0 && (
              <FlatList
                data={dataActive}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => {
                  return (
                    <OrderItem
                      task_name={item.name}
                      end_date={moment(item.end_date).format('MM/DD/YY')}
                      payment={item.payment}
                      claimed={item.claimed}
                      completed={item.completed}
                      remaining={item.remaining}
                      est_time={item.est_time}
                      onPress={() =>
                        this.props.navigation.navigate(
                          item.remaining ? 'OrderNewDetails' : 'OrderDetails',
                          { order: item }
                        )
                      }
                    />
                  )
                }}
                showsVerticalScrollIndicator={true}
              />) 
            }
          </View>
      </>
    );
  }
}

export default ActiveOrders;
