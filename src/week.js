import React from 'react'
import { View, StyleSheet } from 'react-native'

export default class Week extends React.Component {
  render () {
    return (
      <View style={styles.rowContainer}>
        {this.props.days}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  }
})
