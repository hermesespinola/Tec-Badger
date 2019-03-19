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
import { Router, Scene } from 'react-native-router-flux'
import { Provider } from 'mobx-react'
import { badgeStore, user } from './state'
import Login from './components/presentational/Login'
import Feed from './components/presentational/Feed'
import Profile from './components/presentational/Profile'

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

export default () => (
  <Provider badgeStore={badgeStore} user={user}>
    <Router>
      <Scene key="root">
        <Scene
          key="loginScreen"
          component={Login}
          animation="fade"
          hideNavBar
          initial
        />
        <Scene key="feedScreen" component={Feed} animation="fade" />
        <Scene key="profileScreen" component={Profile} animation="fade" />
      </Scene>
    </Router>
  </Provider>
)
