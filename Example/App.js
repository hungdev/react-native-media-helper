/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  CameraRoll,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
var { height, width } = Dimensions.get('window')
import ModalPicker from './ModalPicker'

export default class App extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  onPicker() {
    this.refs.MediaHelper.onPicker()
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.refs.ModalPicker.onOpen()}
          style={{ borderWidth: 1, backgroundColor: 'orange', borderRadius: 5, padding: 10, borderColor: '#bbb' }}>
          <Text style={{color: 'blue'}}>Get Item Camera Roll</Text>
        </TouchableOpacity>
        <ModalPicker
          ref='ModalPicker'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  checkIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'transparent',
  }
});
