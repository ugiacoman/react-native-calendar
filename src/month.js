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

  _updateManager = (key) => {

    this.active.push(key)
    console.log(this.active)
    if (this.active.length > 1) {
      console.log("popping")
      let day = this.active[0]
      this.refs[day]._deactivate()
      this.active.splice(0, 1);
    }
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
