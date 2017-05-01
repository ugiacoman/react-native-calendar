/**
 * calendar.js
 * Parent component for Calendar component
 * @flow
 */

import React from 'react'
import { View, FlatList } from 'react-native'
import moment from 'moment-timezone'
import { generateYearOfData } from './lib/utility'
import CalendarHeader from './calendarHeader'
import Month from './month'
import Size from './lib/size'

export default class Calendar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: this.props.startDate,
      data: []
    }

    this.size = Size
    this.active = []
    this.rows = {}
    this.data = []
  }

  componentWillMount () {
    this.data = generateYearOfData(this.props.startDate)

    // disable all days prior to current day
    let currentDate = moment(this.props.startDate)
    for (const day of this.data[0].days) {
      if (day.day < currentDate.date()) {
        day.disabled = true
      }
    }
    this.setState({data: this.data})
  }

  _generateAnotherTwoMonthsOfData = () => {
    let dateObj = moment().month(this.data[this.data.length - 1].month).year(this.data[this.data.length - 1].year)
    dateObj.add(1, 'months')
    this.data = this.data.concat(generateYearOfData(dateObj))
    this.setState({data: this.data})
  }

  _renderItem = ({item, index}) => {
    return (
      <Month
        data={item}
        size={this.size}
        // eslint-disable-next-line
        ref={(row) => this.rows[item.key] = row}
        updateMonthManager={this._updateManager}
      />
    )
  }

  _updateManager = (day) => {
    this.active.push(day)
    if (this.active.length > 1) {
      let removalDay = this.active[0]
      let removalMonth = `${removalDay.split('-')[0]}-${removalDay.split('-')[1]}`
      if (day !== this.active[0]) {
        this.rows[removalMonth]._deactivateDay(removalDay)
      }
      this.active.splice(0, 1)
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
          disableVirtualization
          removeClippedSubviews={false}
        />
      </View>
    )
  }
}
