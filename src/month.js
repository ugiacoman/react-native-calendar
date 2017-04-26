/**
 * month.js
 * @flow
 */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
export default class Month extends React.Component {

  _renderDays = (daysObj) => {
    let days = []
    for (const day of daysObj) {
      console.log(day)
      if (day.day === 0) {
        days.push(
          <Text key={day.key} style={styles.day}> </Text>
        )
      } else {
        days.push(
          <Text key={day.key} style={styles.day} > {day.day}</Text>
        )
      }

    }
    return days
  }

  render () {
    let days = this._renderDays(this.props.data.days)
    return (
      <View>
        <Text>
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
    flexWrap: 'wrap'
  },
  day: {
    padding: 8
  }
})
