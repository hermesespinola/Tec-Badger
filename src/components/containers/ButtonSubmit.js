import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  Easing,
  Image,
  Dimensions,
  View,
} from 'react-native'
import { Actions } from 'react-native-router-flux'

import spinner from '../../images/loading.gif'

const { width: DEVICE_WIDTH } = Dimensions.get('window')
const MARGIN = 40

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: -95,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F035E0',
    height: MARGIN,
    borderRadius: 20,
    zIndex: 100,
  },
  circle: {
    height: MARGIN,
    width: MARGIN,
    marginTop: -MARGIN,
    borderWidth: 1,
    borderColor: '#F035E0',
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 99,
    backgroundColor: '#F035E0',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  image: {
    width: 24,
    height: 24,
  },
})

class ButtonSubmit extends Component {
  constructor() {
    super()

    this.state = {
      isLoading: false,
    }

    this.buttonAnimated = new Animated.Value(0)
    this.growAnimated = new Animated.Value(0)
  }

  onGrow() {
    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start()
  }

  onPress = () => {
    const { isLoading } = this.state
    if (isLoading) return

    this.setState({ isLoading: true })

    Animated.timing(this.buttonAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start()

    setTimeout(() => {
      this.onGrow()
    }, 2000)

    setTimeout(() => {
      Actions.FeedScreen()
      this.setState({ isLoading: false })
      this.buttonAnimated.setValue(0)
      this.growAnimated.setValue(0)
    }, 2300)
  }

  render() {
    const changeWidth = this.buttonAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
    })
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, MARGIN],
    })
    const { isLoading } = this.state

    return (
      <View style={styles.container}>
        <Animated.View style={{ width: changeWidth }}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.onPress}
            activeOpacity={1}>
            {isLoading ? (
              <Image source={spinner} style={styles.image} />
            ) : (
              <Text style={styles.text}>LOGIN</Text>
            )}
          </TouchableOpacity>
          <Animated.View
            style={[styles.circle, { transform: [{ scale: changeScale }] }]}
          />
        </Animated.View>
      </View>
    )
  }
}

export default ButtonSubmit
