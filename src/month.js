/**
 * month.js
 * @flow
 */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Day from './day'
export default class Month extends React.Component {

  _renderDays = (daysObj) => {
    let days = []
    for (const day of daysObj) {
      days.push(<Day key={day.key} data={day} size={this.props.size}/>)
    }
    return days
  }

  render () {
    let days = this._renderDays(this.props.data.days)
    return (
      <View>
        <Text style={{fontSize: this.props.size.month.fontSize}}>
          {this.props.data.month}
        </Text>
        <View style={styles.days}>
          {days}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  days: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
})
