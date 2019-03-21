import React from 'react'
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native'
import { inject } from 'mobx-react'
import { getUser } from '../../api'

@inject('user')
class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props)
    this._bootstrapAsync()
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const idToken = await AsyncStorage.getItem('idToken')
    const email = await AsyncStorage.getItem('email')

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    if (!idToken || !email) {
      return this.props.navigation.navigate('Login')
    }
    const { user } = this.props
    try {
      user.setUser(await getUser({ idToken, user: { email } }))
      this.props.navigation.navigate('Profile')
    } catch {
      this.props.navigation.navigate('Login')
    }
  }

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    )
  }
}

export default AuthLoadingScreen
