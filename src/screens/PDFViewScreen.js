import React, { useState } from 'react'
import PDFView from 'react-native-view-pdf';
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { Header } from '../components';
import { setUiBlock } from '../actions';

class PDFViewScreen extends React.Component {

  componentDidMount(){
    this.props.setUiBlock(true);
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    const resourceType = 'url';

    let { url, title } = this.props.route?.params;

    return (
      <View style={{ flex: 1 }}>
        <Header
          title={title}
          onBackPress={this.goBack}
         />
        <PDFView
          fadeInDuration={250.0}
          style={{ flex: 1 }}
          resource={url}
          resourceType={resourceType}
          onLoad={() =>     this.props.setUiBlock(false)}
          onError={(error) => console.log('Cannot render PDF', error)}
        />
      </View>
    );
  }
}

const mapStateToProps = ({}) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUiBlock: (value) => dispatch(setUiBlock(value)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(PDFViewScreen)
