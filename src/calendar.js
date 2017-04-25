/* @flow */

import React from 'react'
import { View, Text, SectionList, StyleSheet, TouchableHighlight } from 'react-native'

export default class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      highlight: false
    }
  }

  _renderHighlight = () => {
    this.setState({highlight: !this.state.highlight})
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
          keyExtractor={(item) => item.title}
          SectionSeparatorComponent={() =>
            <View style={{height: 1, backgroundColor: 'red'}} />
          }
          renderItem={this._renderItem}
          sections={[ // heterogeneous rendering between sections
            {data: [{'title': 'apple'}], key: 'dog'},
            {data: [{'title': 'homie'}, {'title': 'dog'}], key: 'hello'},
            {data: [{'title': 'lets do it'}, {'title': 'whatup'}], key: 'month'}
          ]}
        />
        <TouchableHighlight
          onPress={this._renderHighlight}
          underlayColor={'#d3d3d3'}
        >
          <Text>
            my dude
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    top: 20
  }
})
