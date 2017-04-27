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
import Size from './lib/size'

export default class Calendar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      startDate: this.props.startDate,
      data: []
    }
    this.size = Size
  }

  componentDidMount() {
    let data = generateYearOfData(this.props.startDate)
    this.setState({data: data})
  }

  _renderItem = ({item}) => {
    console.log(item.key)
    return(
      <Month
      data={item}
      size={this.size}
      ref={item.key}
      />
    )
  }

  render () {
    return (
      <View>
        <CalendarHeader />
        <FlatList
          keyExtractor={(item) => item.key}
          renderItem={this._renderItem}
          data={this.state.data}
          disableVirtualization={true}
        />
      </View>
    )
  }
}
//
// const styles = StyleSheet.create({
// })
