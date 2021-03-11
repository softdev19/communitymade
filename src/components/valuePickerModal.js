import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import { COLORS, GetOptimalHieght, GetOptimalWidth, scaledFontSize } from '../common';

class ValuePickerModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: '',
      title: '',
      data: [],
    };
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          paddingVertical: GetOptimalHieght(10),
          borderBottomWidth: 0.4,
          borderBottomColor: COLORS.PLACE_HOLDER,
        }}
        onPress={() => {
          this.setState({
            selectedValue: item,
          });
          this.props.toggleModal();
        }}>
        <Text style={{ fontWeight: '500', color: COLORS.DARK_BUTTON }}>{item}</Text>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View>
        <Modal
          onModalHide={() => {}}
          onModalShow={() => {}}
          animationIn="slideInUp"
          animationInTiming={500}
          animationOutTiming={500}
          hasBackdrop={true}
          onBackdropPress={() => {
            this.props.toggleModal();
          }}
          backdropColor={COLORS.PRIMARY_BLUE}
          backdropOpacity={0.95}
          isVisible={this.props.valuePickerModalVisible}
          avoidKeyboard={true}
          onSwipeComplete={() => {
            this.props.toggleModal();
          }}
          onModalWillShow={() => {
            this.setState({
              selectedValue: '',
              title: this.props.title,
              data: this.props.data,
            });
          }}
          onModalWillHide={() => {
            if (this.state.selectedValue != '') {
              this.props.UpdateValue(this.state.selectedValue);
            }
          }}
          swipeThreshold={50}
          style={{ margin: 0, justifyContent: 'flex-end' }}>
          <View style={styles.container}>
            <View style={styles.upperContainer}>
              <View style={{ width: GetOptimalWidth(70) }}></View>
              <View style={{ alignItems: 'center' }}>
                <Text style={styles.modalTitle}>{this.state.title}</Text>
              </View>
              <View style={{ width: GetOptimalWidth(70) }}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.toggleModal();
                  }}>
                  <Text
                    style={{
                      color: '#8491AD',
                      fontSize: scaledFontSize(12),
                      // fontFamily: 'Poppins',
                      fontWeight: '400',
                    }}>
                    {'Close'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <FlatList data={this.state.data} keyExtractor={(item) => item.key} renderItem={this.renderItem}></FlatList>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
export default ValuePickerModal;

const styles = StyleSheet.create({
  title: { fontSize: scaledFontSize(14), fontWeight: '500', color: '#24345A' },
  description: { fontSize: scaledFontSize(8), color: '#24345A' },
  container: {
    width: '100%',
    paddingVertical: GetOptimalHieght(20),
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  upperContainer: {
    borderBottomColor: '#00000026',
    borderBottomWidth: 0.5,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: GetOptimalWidth(10),
  },
  bottomContainer: {
    height: GetOptimalHieght(300),
    paddingVertical: GetOptimalHieght(30),
    paddingHorizontal: GetOptimalWidth(44),
  },
  modalTitle: {
    fontSize: scaledFontSize(16),
    // fontFamily: 'Poppins',
    fontWeight: '600',
    marginVertical: GetOptimalHieght(10),
    color: COLORS.PRIMARY_BLUE,
  },
  itemStyle: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#00000026',
    borderBottomWidth: 0.5,
  },
  buttonText: {
    color: COLORS.DARK_BUTTON,
    fontSize: scaledFontSize(14),
    // fontFamily: 'Poppins',
    fontWeight: '500',
  },
  buttonSideText: {
    color: '#8491AD',
    fontSize: scaledFontSize(8),
    // fontFamily: 'Poppins',
    fontWeight: '500',
  },
  searchbar: {
    width: '100%',
    height: GetOptimalHieght(40),
    elevation: 1.5,
  },
  resultButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9ECFD8',
    borderRadius: GetOptimalHieght(10),
    marginHorizontal: GetOptimalWidth(44),
  },
});
