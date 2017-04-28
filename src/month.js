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
    let count = 0
    for (const day of daysObj) {

      days.push(<Day
                  key={day.key}
                  data={day}
                  size={this.props.size}
                  ref={day.key}
                  updateManager={this._updateManager}
                />
              )
    }
    this.active = []
    return days
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
