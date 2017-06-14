/**
 * calendar.js
 * Parent component for Calendar component
 */

import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import moment from 'moment-timezone'
import { generateYearOfData, getFirstDayOfMonth } from './lib/utility'
import CalendarHeader from './calendarHeader'
import Month from './month'
import Size from './lib/size'

export default class Calendar extends React.Component {
  size = Size
  active = []
  rows = {}
  data = []

  constructor (props) {
    super(props)
    this.state = {
      startDate: this.props.startDate,
      data: []
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    return false
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
    /* select first day
    * getFirstDayOfMonth returns the number of offset days for the month
    * subtract 1 for index
    * add padding to currentDate to go to correct index in days array
    */
    let padding = getFirstDayOfMonth(currentDate) - 1
    let day = this.data[0].days[currentDate.date() + padding]
    day.active = true
    this.active.push(day.key)
    this.props.selectedDate(day.key)

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
        invertColor={this.props.invertColor}
        selectColor={this.props.selectColor}
      />
    )
  }

  _updateManager = (day) => {
    this.active.push(day)

    if (this.active.length > 1) {
      if (day !== this.active[0]) {
        let removalDay = this.active[0]
        let removalMonth = `${removalDay.split('-')[0]}-${removalDay.split('-')[1]}`
        this.rows[removalMonth]._deactivateDay(removalDay)
      } else {
        this.active.splice(0, 1)
      }
      this.active.splice(0, 1)
    }
    if (this.active.length === 1) {
      this.props.selectedDate(day)
    } else {
      this.props.selectedDate('')
    }
  }
  render () {
    return (
      <View style={styles.container}>
        <CalendarHeader />
        <FlatList
          keyExtractor={(item) => item.key}
          renderItem={this._renderItem}
          data={this.state.data}
          ref={'calendar'}
          disableVirtualization
          ItemSeparatorComponent={() => <View style={{height: 40}} />}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews={false}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
