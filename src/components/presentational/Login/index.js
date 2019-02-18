import React from 'react'
import { View } from 'react-native'
import Form from './Form'
import Wallpaper from './Wallpaper'
import ButtonSubmit from '../../containers/ButtonSubmit'

const LoginScreen = () => (
  <Wallpaper>
    <Form />
    <ButtonSubmit />
  </Wallpaper>
)

export default LoginScreen
