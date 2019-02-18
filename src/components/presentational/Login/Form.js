import React, { PureComponent } from 'react'
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from 'react-native'
import UserInput from '../../containers/UserInput'
import usernameImg from '../../../images/username.png'
import passwordImg from '../../../images/password.png'
import eyeImg from '../../../images/eye_black.png'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  btnEye: {
    position: 'absolute',
    top: 55,
    right: 28,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
})

class LoginForm extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      showPass: true,
      press: false,
    }
  }

  showPass = () => {
    const { press } = this.state
    if (press) {
      this.setState({ showPass: true, press: false })
    } else {
      this.setState({ showPass: false, press: true })
    }
  }

  render() {
    const { showPass } = this.state
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <UserInput
          source={usernameImg}
          placeholder="Username"
          returnKeyType="done"
        />
        <UserInput
          source={passwordImg}
          secureTextEntry={showPass}
          placeholder="Password"
          returnKeyType="done"
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnEye}
          onPress={this.showPass}
        >
          <Image source={eyeImg} style={styles.iconEye} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

export default LoginForm
