/* eslint-disable no-console */
import React, { PureComponent } from 'react'
import {
  StyleSheet,
  View,
  Picker,
  Text,
  ToastAndroid,
  AsyncStorage,
  ActivityIndicator,
  StatusBar,
} from 'react-native'
import { inject, PropTypes } from 'mobx-react'
import { WEBCLIENT_ID } from 'react-native-dotenv'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin'
import { getUser, createUser } from '../../../api'
import { degrees } from '../../../types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

@inject('user')
class LoginScreen extends PureComponent {
  static navigationOptions = {
    title: 'Tec Badger',
  }

  state = {
    isSigninInProgress: false,
    degree: degrees[0],
  }

  componentDidMount() {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      hostedDomain: 'itesm.mx',
      webClientId: WEBCLIENT_ID,
    })
  }

  signIn = async () => {
    // Prompts a modal to let the user sign in into your application.
    try {
      this.setState({ isSigninInProgress: true })
      await GoogleSignin.hasPlayServices({
        // Check if device has Google Play Services installed.
        // Always resolves to true on iOS.
        showPlayServicesUpdateDialog: true,
      })
      const userInfo = await GoogleSignin.signIn()

      // try getting user from server
      const { user } = this.props
      const { degree } = this.state
      try {
        user.setUser(await getUser(userInfo))
        AsyncStorage.setItem('idToken', userInfo.idToken)
        AsyncStorage.setItem('email', userInfo.user.email)
      } catch {
        const user = await createUser({ degree, ...userInfo })
        if (typeof user === 'object') {
          user.setUser(user)
        } else {
          ToastAndroid.show('Could not create user, please try later', ToastAndroid.SHORT)
          console.error('could not create user')
        }
      }

      // Successful login, redirect to feed
      // TODO: redirect to feed instead of profile
      this.props.navigation.navigate('Profile')
    } catch (error) {
      this.setState({ isSigninInProgress: false })
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Cancelled the Login Flow')
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing In')
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services Not Available or Outdated')
        ToastAndroid.show('Play Services not available or outdated', ToastAndroid.SHORT)
      } else {
        console.log('Some Other Error Happened')
        console.error(error)
        ToastAndroid.show(error.message, ToastAndroid.LONG)
      }
    }
  }

  updateDegree = degree => {
    this.setState({ degree })
  }

  render() {
    const { isSigninInProgress, degree } = this.state
    return (
      <View style={styles.container}>
        <View>
          {isSigninInProgress && (
            <View>
              <ActivityIndicator />
              <StatusBar barStyle="default" />
          </View>
          )}
          <Text>Please Select your major</Text>
          <Picker selectedValue={degree} onValueChange={this.updateDegree}>
            {degrees.map((degree, i) => (
              <Picker.Item
                label={degree}
                value={degree}
                key={`degree-select-${i}`}
              />
            ))}
          </Picker>
        </View>
        <GoogleSigninButton
          style={{ width: 264, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.signIn}
          disabled={isSigninInProgress}
        />
      </View>
    )
  }
}

LoginScreen.propTypes = {
  user: PropTypes.objectOrObservableObject.isRequired,
}

export default LoginScreen
