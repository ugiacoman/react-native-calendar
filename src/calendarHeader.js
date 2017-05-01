/**
 * calendarHeader.js
 * Header for SectionList
 * @flow
 */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class CalendarHeader extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.day}>
          S
        </Text>
        <Text style={styles.day}>
          M
        </Text>
        <Text style={styles.day}>
          T
        </Text>
        <Text style={styles.day}>
          W
        </Text>
        <Text style={styles.day}>
          T
        </Text>
        <Text style={styles.day}>
          F
        </Text>
        <Text style={styles.day}>
          S
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4
  },
  day: {
    textAlign: 'center',
    fontSize: 20,
    width: 40,
    height: 40,
    lineHeight: 40
  }
})
