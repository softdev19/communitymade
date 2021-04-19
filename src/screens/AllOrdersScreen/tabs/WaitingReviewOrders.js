import React, { Component } from 'react';
import { View, Image, Text, FlatList, ActivityIndicator } from 'react-native';
import { images } from '../../../common';
import { commonStyle as cs, fullWidth } from '../../../common/styles';
import COLORS from '../../../common/colors';
import styles from '../styles';
import { TaskCard } from '../../../components';

class WaitingReviewOrders extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { waitingForReviewOrders } = this.props;
    console.log('waitingForReviewOrders', waitingForReviewOrders)
    console.log('this.props',this.props)
    return (
      <>
        <View style={styles.scrollView}>
          {waitingForReviewOrders?.length > 0 ? (
            <FlatList
              data={waitingForReviewOrders}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => {
                return (
                  <TaskCard
                  data={item}
                  onPress={() =>
                  this.props.navigation.navigate(
                     'AvaiableOrderDetailsScreen',
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

export default WaitingReviewOrders;
