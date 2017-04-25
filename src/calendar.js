/* @flow */

import React from 'react'
import { View, Text, SectionList, StyleSheet } from 'react-native'

export default class Calendar extends React.Component {
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
    return (
      <View style={styles.container}>
        <SectionList
          keyExtractor={(item) => item.title}
          SectionSeparatorComponent={() =>
            <View style={{height: 1, backgroundColor: 'red'}} />
          }
          sections={[ // heterogeneous rendering between sections
            {data: [{'title': 'apple'}], key: 'dog', renderItem: this._renderItem},
            {data: [{'title': 'homie'}, {'title': 'dog'}], key: 'hello', renderItem: this._renderItem},
            {data: [{'title': 'lets do it'}, {'title': 'whatup'}], key: 'month', renderItem: this._renderItem}
          ]}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    top: 20
  }
})
