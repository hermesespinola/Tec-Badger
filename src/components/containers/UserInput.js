import React from 'react'
import { bool, number, string } from 'prop-types'
import { StyleSheet, View, TextInput, Image, Dimensions } from 'react-native'

const { width: DEVICE_WIDTH } = Dimensions.get('window')

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH - 40,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    color: '#ffffff',
  },
  inputWrapper: {
    flex: 1,
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9,
  },
})

const UserInput = ({
  source,
  placeholder,
  secureTextEntry,
  autoCorrect,
  autoCapitalize,
  returnKeyType,
}) => (
  <View style={styles.inputWrapper}>
    <Image source={source} style={styles.inlineImg} />
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      autoCorrect={autoCorrect}
      autoCapitalize={autoCapitalize}
      returnKeyType={returnKeyType}
      placeholderTextColor="white"
      underlineColorAndroid="transparent"
    />
  </View>
)

UserInput.propTypes = {
  source: number.isRequired,
  placeholder: string.isRequired,
  secureTextEntry: bool,
  autoCorrect: bool,
  autoCapitalize: string,
  returnKeyType: string.isRequired,
}

UserInput.defaultProps = {
  autoCorrect: false,
  autoCapitalize: 'none',
  secureTextEntry: false,
}

export default UserInput
