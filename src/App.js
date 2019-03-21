/**
 * Tec de Monterrey Badge application
 * https://github.com/hermesespinola/tec-badger
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import 'core-js/es6/symbol'
import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Provider } from 'mobx-react'
import { badgeStore, user } from './state'
import AuthLoading from './components/presentational/AuthLoading'
import Login from './components/presentational/Login'
import Feed from './components/presentational/Feed'
import Profile from './components/presentational/Profile'
import commonStyles from './styles/common';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

const AppNavigator = createStackNavigator({ AuthLoading, Login, Profile, Feed }, {
  initialRouteName: 'AuthLoading',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: commonStyles.colorPrimary,
    },
    headerTintColor: '#fff',
    tabBarLabel: 'Tec Badger',
  },
})

const AppContainer = createAppContainer(AppNavigator)

export default () => (
  <Provider badgeStore={badgeStore} user={user}>
    <AppContainer />
  </Provider>
)
