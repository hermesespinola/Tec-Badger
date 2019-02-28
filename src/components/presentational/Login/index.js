/* eslint-disable no-console */
import React, { PureComponent } from 'react'
import { StyleSheet, View } from 'react-native'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const webClientId =
  '601145109828-hlehjvdklr96409p1kle7ctkmnevpt2n.apps.googleusercontent.com'

class LoginScreen extends PureComponent {
  state = {
    isSigninInProgress: false,
    /* userInfo: null, */
  }

  componentDidMount() {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      hostedDomain: 'itesm.mx',
      webClientId,
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
      console.log(userInfo)

      // this.setState({ userInfo })
    } catch (error) {
      this.setState({ isSigninInProgress: false })
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Cancelled the Login Flow')
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing In')
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services Not Available or Outdated')
      } else {
        console.log('Some Other Error Happened')
      }
    }
  }

  render() {
    const { isSigninInProgress } = this.state
    return (
      <View style={styles.container}>
        <GoogleSigninButton
          style={{ width: 312, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.signIn}
          disabled={isSigninInProgress}
        />
      </View>
    )
  }
}

export default LoginScreen
