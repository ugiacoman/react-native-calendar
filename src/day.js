import React from 'react'
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native'

export default class Day extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      highlight: false
    }
  }
  _onPressButton = () => {
    this.setState({highlight: !this.state.highlight})
  }

  render () {
    if (this.props.data.day === 0) {
      return (<View style={this.styles.container} />)
    }

    let active
    if (this.state.highlight) {
      active = {
        backgroundColor: '#d3d3d3'
      }
    }
    return (
      <View style={this.styles.container}>
        <TouchableHighlight
        onPress={this._onPressButton}
        underlayColor={'#d3d3d3'}
        style={[this.styles.touch, active]}
        >
          <Text style={this.styles.text}>
            {this.props.data.day}
          </Text>
        </TouchableHighlight>
      </View>
    )
  }

  styles = {
    container: {
      width: this.props.size.day.width,
      height: this.props.size.day.height,
    },
    text: {
      top: 8,
      textAlign: 'center',
      height: this.props.size.day.height,
      fontSize: this.props.size.day.fontSize
    },
    touch: {
      borderRadius: this.props.size.day.height,
      overflow: 'hidden'
    }
  }
}
