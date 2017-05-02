import { Dimensions } from 'react-native'
const Size = {
  day: {
    size: Math.round(Dimensions.get('window').width/8),
    fontSize: Math.round(Dimensions.get('window').width/18),
    margin: Math.round(Dimensions.get('window').width/200)
  },
  month: {
    fontSize: 30
  }
}

export default Size
