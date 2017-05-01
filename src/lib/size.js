import { Dimensions } from 'react-native'
const Size = {
  day: {
    size: Dimensions.get('window').width/8,
    fontSize: Dimensions.get('window').width/18,
    margin: Dimensions.get('window').width/200
  },
  month: {
    fontSize: 30
  }
}

export default Size
