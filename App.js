import React from 'react';
import SplashScreen from './screens/splashScreen'
import RegisterScreen from './screens/registerScreen'
import ConnectScreen from './screens/connectScreen'
import NavigationQuest from './navigation/navigation'
import { Provider } from 'react-redux'
import Store from './store/configureStore'
import MainApp from './components/mainApp'

import { StyleSheet, View, Text } from 'react-native'


export default class App extends React.Component {
  render() {
    return (
        <Provider store={Store}>
            <MainApp/>
        </Provider>
    );
  }
}
