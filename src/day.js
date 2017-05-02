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
      active: false
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
      return (<View style={{width: this.props.size.day.size}} />)
    }

    let active, disabledStyle, invert
    if (this.state.active) {
      active = {
        backgroundColor: this.props.selectColor
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
        style={[this.styles.touch, active]}
        disabled={this.props.data.disabled}
        underlayColor={'#red'}
      >
        <Text style={[this.styles.text, disabledStyle, invert]}>
          {`${this.props.data.day}`}
        </Text>
      </TouchableOpacity>
    )
  }
  // Add text vertiacal for android
  styles = {
    text: {
      textAlign: 'center',
      textAlignVertical: 'center',
      fontWeight: '500',
      fontSize: this.props.size.day.fontSize,
      width: this.props.size.day.size,
    },
    touch: {
      marginTop: this.props.size.day.margin,
      marginBottom: this.props.size.day.margin,
      overflow: 'hidden',
      width: this.props.size.day.size,
      paddingTop: this.props.size.day.size/5,
      paddingBottom: this.props.size.day.size/5,
      borderRadius: this.props.size.day.size/2
    }
  }
}
