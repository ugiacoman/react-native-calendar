/**
 * month.js
 * @flow
 */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Day from './day'
import Week from './week'
import uuid from 'uuid/v4'

export default class Month extends React.Component {
  _renderDays = (daysObj) => {
    let days = []
    let weeks = []
    for (const day of daysObj) {

      days.push(<Day
                  key={day.key}
                  data={day}
                  size={this.props.size}
                  ref={day.key}
                  updateManager={this._updateManager}
                />
              )
      if ((days.length % 7 === 0)) {
        weeks.push(<Week key={uuid()} days={days} />)
        days = []
      }
    }
    weeks.push(<Week key={uuid()} days={days} />)
    this.active = []
    return weeks
  }

  _updateManager = (activeDay) => {
    this.active.push(activeDay)

    if (this.active.length > 1) {
      let removalDay = this.active[0]
      if (this.active[0] !== activeDay) {
        this.refs[removalDay]._deactivate()
      }
      this.active.splice(0, 1);
    }
    this.props.updateMonthManager(activeDay)
  }

  _deactivateDay = (day) => {
    this.refs[day]._deactivate()
  }

  render () {
    let days = this._renderDays(this.props.data.days)
    return (
      <View>
        <Text style={{fontSize: this.props.size.month.fontSize}}>
          {this.props.data.month}
        </Text>
        <View>
          {days}
        </View>
      </View>
    )
  }
}
