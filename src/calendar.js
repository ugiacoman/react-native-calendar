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
    this.active = []
    this.rows = {}
  }

  componentDidMount() {
    let data = generateYearOfData(this.props.startDate)
    this.setState({data: data})
  }

  _renderItem = ({item, index}) => {
    return(
      <Month
      data={item}
      size={this.size}
      ref={(row) => this.rows[item.key]= row}
      updateMonthManager={this._updateManager}
      />
    )
  }

  _updateManager = (day) => {
    this.active.push(day)
    if (this.active.length > 1) {
      let removalDay = this.active[0]
      let removalMonth = `${removalDay.split('-')[0]}-${removalDay.split('-')[1]}`
      this.rows[removalMonth]._deactivateDay(removalDay)
      this.active.splice(0, 1);
      console.log('item', this.state.data[0])
      // this.refs['calendar']._renderItem(this.state.data[0])
    }

  }

  render () {
    return (
      <View>
        <CalendarHeader />
        <FlatList
          keyExtractor={(item) => item.key}
          renderItem={this._renderItem}
          data={this.state.data}
          ref={'calendar'}
          disableVirtualization={true}
        />
      </View>
    )
  }
}
//
// const styles = StyleSheet.create({
// })
