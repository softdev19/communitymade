import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, commonStyle as cs, GetOptimalHieght, GetOptimalWidth, scaledFontSize, withTheme } from '../../common';
import moment from 'moment'

class TaskCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, onPress, showButton, showClaimedQuantity = false } = this.props;
    return (
      <View style={[styles.authBox, cs.elevatedShadow]}>
        <View style={styles.topContainer}>
          <View style={{paddingVertical:GetOptimalHieght(5)}}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.text}>{'Task Name:  '}</Text>
              <Text style={styles.text}>{data?.name || 'Name'}</Text>
            </View>
            <Text style={styles.durationText}> {'End Date:'} {moment(data?.endDate).format('MM-DD-YY') || '0'} </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Text style={styles.bottomText}>Payment:</Text>
                <Text style={[styles.bottomText, { fontWeight: '500', color: '#F46270' }]}>{`$${data?.paymentTerms} / per` || '0'}</Text>
              </View>
              {
                showClaimedQuantity &&  <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Text style={styles.bottomText}>Qty Claimed:</Text>
                <Text style={[styles.bottomText, { fontWeight: '500', color: '#F46270'}]}>{data?.userTaskDetails?.claimedQuantity}</Text>
              </View>
              }
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Text style={styles.bottomText}>{'Unclaimed Qty'}</Text>
                <Text style={[styles.bottomText, { fontWeight: '500', color: '#F46270' }]}>{data?.availableQuantity}</Text>
              </View>
          </View>
          {
            showButton && <TouchableOpacity
              onPress={onPress}
              style={[styles.button, styles.blueButton, { flexDirection: 'row' }]}>
              <Text style={styles.editText}>{'Details'}</Text>
            </TouchableOpacity>
          }
        </View>

        <View style={styles.bottomContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.bottomText}>Qty Total:</Text>
            <Text style={[styles.bottomText, { fontWeight: '500', color: '#F46270' }]}>{data?.totalQuantity || '1'}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.bottomText}>Qty Completed:</Text>
            <Text style={[styles.bottomText, { fontWeight: '500', color: '#F46270' }]}>{data?.completedQuantity || '0'}</Text>
          </View>
        </View>

        <View style={[styles.bottomContainer, { borderTopWidth: 0 }]}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.bottomText}>Max Task Quantity:</Text>
            <Text style={[styles.bottomText, { fontWeight: '500', color: '#F46270' }]}>{data?.maxTaskQuantity || '0'}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.bottomText}>Max Est Time:</Text>
            <Text style={[styles.bottomText, { fontWeight: '500', color: '#F46270' }]}>{data?.timeEstimateMax || ''}</Text>
          </View>
        </View>
      </View>

    );
  }
}

export default TaskCard;

const styles = StyleSheet.create({
  authBox: {
    backgroundColor: COLORS.WHITE,
    marginVertical: GetOptimalHieght(10),
    paddingTop: GetOptimalHieght(16),
    borderRadius: GetOptimalHieght(16),
    marginHorizontal: GetOptimalWidth(16),
    height: GetOptimalHieght(180),
  },
  editText: {
    fontSize: scaledFontSize(10),
    color: COLORS.WHITE,
    fontWeight: '500',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: GetOptimalHieght(12),
    paddingHorizontal: GetOptimalWidth(24),
    paddingTop: GetOptimalHieght(10),
    flex: 1,
  },
  bottomContainer: {
    paddingHorizontal: GetOptimalWidth(24),
    justifyContent: 'space-between',
    height: GetOptimalHieght(37),
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F4F4EE',
  },
  text: {
    fontSize: scaledFontSize(12),
    color: COLORS.PRIMARY_BLUE,
    fontWeight: '600',
  },
  bottomText: {
    paddingHorizontal: GetOptimalWidth(2),
    fontSize: scaledFontSize(10),
    fontWeight: '300',
    color: COLORS.PLACE_HOLDER,
  },
  durationText: {
    paddingTop: GetOptimalHieght(8),
    fontSize: scaledFontSize(10),
    color: COLORS.PLACE_HOLDER,
    fontWeight: '300',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueButton: {
    backgroundColor: COLORS.PRIMARY_LIGHT_BLUE,
    paddingHorizontal: GetOptimalWidth(15),
    paddingVertical: GetOptimalHieght(4),
    borderRadius: GetOptimalHieght(20),
  },
  blueButtonText: {
    textAlign: 'center',
    fontSize: scaledFontSize(12),
  //   fontFamily: 'Poppins',
    fontWeight: '600',
    color: COLORS.WHITE,
  },
});
