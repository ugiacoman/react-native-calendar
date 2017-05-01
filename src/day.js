/**
 * day.js
 * @flow
 */

import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'

export default class Day extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: this.props.data.day.active
    }
  }
  _onPressButton = () => {
    this.setState({active: !this.state.active})
    this.props.updateManager(this.props.data.key)
  }

  _deactivate = () => {
    this.setState({active: false})
  }

  render () {
    if (this.props.data.day === 0) {
      return (<View style={{width: 40}} />)
    }

    let active, disabledStyle, invert
    if (this.state.active) {
      active = {
        backgroundColor: '#d3d3d3'
      }
      invert = {
        color: this.props.invertColor
      }
    }
    if (this.props.data.disabled) {
      disabledStyle = {
        color: '#d3d3d3'
      }
    }
    return (
      <TouchableOpacity
        onPress={this._onPressButton}
        underlayColor={'#d3d3d3'}
        style={[this.styles.touch, active]}
        disabled={this.props.data.disabled}
      >
        <Text style={[this.styles.text, disabledStyle, invert]}>
          {`${this.props.data.day}`}
        </Text>
      </TouchableOpacity>
    )
  }
  styles = {
    text: {
      textAlign: 'center',
      fontSize: this.props.size.day.fontSize,
      width: this.props.size.day.size,
      height: this.props.size.day.size,
      lineHeight: this.props.size.day.size,
      fontWeight: '500'
    },
    touch: {
      width: this.props.size.day.size,
      height: this.props.size.day.size,
      borderRadius: this.props.size.day.size/2,
      overflow: 'hidden'
    }
  }
}
