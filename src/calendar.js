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

export default class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: this.props.startDate
    }
    let firstDay = getFirstDayOfMonth(this.props.startDate)
    data = generateYearOfData(this.props.startDate)
    console.log(firstDay)
  }

  componentWillMount() {
  }

  _renderItem = ({item}) => {
    return (
      <View key={item}>
        <Text key>
          {item.title}
        </Text>
      </View>
    )
  }

  render () {
    let active
    if (this.state.highlight) {
      active = {
        backgroundColor: '#d3d3d3'
      }
    }
    return (
      <View style={styles.container}>
        <SectionList
          ListHeaderComponent={CalendarHeader}
          keyExtractor={(item) => item.title}
          SectionSeparatorComponent={() =>
            <View style={{height: 1, backgroundColor: 'red'}} />
          }
          renderItem={this._renderItem}
          sections={[ // heterogeneous rendering between sections
            {data: [{'title': 'apple'}], key: 'dog'},
            {data: [{'title': '2'}, {'title': '3'}], key: 'hello'},
            {data: [{'title': 'lets do it'}, {'title': 'whatup'}], key: 'month'}
          ]}
        />
        <TouchableHighlight
          onPress={this._renderHighlight}
          underlayColor={'#d3d3d3'}
          style={styles.day}
          disabled={true}
        >
          <Text>
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    top: 80
  },
  day :{
    width: 60,
    flex: 1
  }
})
