import React from 'react'
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native'

export default class Day extends React.Component {
  styles = {
    container: {
      width: this.props.size.day.width,
      height: this.props.size.day.height
    },
    text: {
      textAlign: 'center',
      fontSize: this.props.size.day.fontSize
    }
  }

  render () {
    if (this.props.data.day === 0) {
      return (<View style={this.styles.container} />)
    }
    return (
      <View style={this.styles.container}>
        <TouchableHighlight
        >
          <Text style={this.styles.text}>
            {this.props.data.day}
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}
