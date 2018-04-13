import { AppRegistry } from 'react-native'
import App from './App'
import './ReactotronConfig'
console.ignoredYellowBox = [
  'Setting a timer'
]

AppRegistry.registerComponent('MediaPicker', () => App)
