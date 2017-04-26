/**
 * calendar.js
 * Parent component for Calendar component
 * @flow
 */

import React from 'react'
import { View, Text, SectionList, StyleSheet, TouchableHighlight } from 'react-native'
import moment from 'moment-timezone'
import { generateYearOfData, getFirstDayOfMonth } from './lib/utility'
import CalendarHeader from './calendarHeader'
import Month from './month.js'

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

  _renderItem = ({month}) => {
    return(
      <Month
      data={month}
      />
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <CalendarHeader />
        <SectionList
          keyExtractor={(item) => item.key}
          SectionSeparatorComponent={() =>
            <View style={{height: 1, backgroundColor: 'red'}} />
          }
          renderItem={this._renderItem}
          sections={this.state.data}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    top: 80,
    width: 200
  }
})
