/**
 * calendar.js
 * Parent component for Calendar component
 * @flow
 */

import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableHighlight } from 'react-native'
import moment from 'moment-timezone'
import { generateYearOfData, getFirstDayOfMonth } from './lib/utility'
import CalendarHeader from './calendarHeader'
import Month from './month'

export default class Calendar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      startDate: this.props.startDate,
      data: []
    }
  }

  componentDidMount() {
    let data = generateYearOfData(this.props.startDate)
    this.setState({data: data})
  }

  _renderItem = ({item}) => {
    return(
      <Month
      data={item}
      />
    )
  }

  render () {
    return (
        <FlatList
          style={styles.list}
          keyExtractor={(item) => item.key}
          renderItem={this._renderItem}
          data={this.state.data}
        />
    )
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    overflow: 'hidden'
  }
})
