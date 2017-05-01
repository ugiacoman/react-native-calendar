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

    let active, disabledStyle
    if (this.state.active) {
      active = {
        backgroundColor: '#d3d3d3'
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
        <Text style={[this.styles.text, disabledStyle]}>
          {`${this.props.data.day}`}
        </Text>
      </TouchableOpacity>
    )
  }

  styles = {
    text: {
      textAlign: 'center',
      fontSize: 20,
      width: 40,
      height: 40,
      lineHeight: 40
    },
    touch: {
      width: 40,
      height: 40,
      borderRadius: 20,
      overflow: 'hidden'
    }
  }
}
