import React, { Component } from 'react'
import { View } from 'react-native'
import ModalBox from 'react-native-modalbox'
import MediaHelper from './MediaHelper'

export default class ModalPicker extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  onOpen () {
    this.setState({ visible: true })
  }

  onClose () {
    this.setState({ visible: false })
  }

  render () {
    return (
      <ModalBox
        style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}
        swipeToClose={false}
        position={'center'}
        isOpen={this.state.visible}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <MediaHelper
            numPhotos={20}
            numVideos={20}
            onCancel={() => this.setState({visible: false})}
            // onSelectedItem={(item) => alert(JSON.stringify(`uri: ${item.node.image.uri}`))}
            onSelectedItem={(item) => alert(JSON.stringify(item))}
          />
        </View>
      </ModalBox>
    )
  }
}
