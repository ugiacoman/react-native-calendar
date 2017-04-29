import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Week extends React.Component {
  render () {
    if (this.props.days.length === 7) {
      justifyContentStyle = {
        justifyContent: 'space-between'
      }
    }
    else {
      justifyContentStyle = {
        justifyContent: 'flex-start'
        
      }
    }
    return (
      <View style={[styles.rowContainer, justifyContentStyle]}>
        {this.props.days}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',

  }
})
