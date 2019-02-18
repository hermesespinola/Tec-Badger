import React from 'react'
import { node } from 'prop-types'
import { StyleSheet, ImageBackground } from 'react-native'

import bgSrc from '../../../images/wallpaper.png'

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
})

const Wallpaper = ({ children }) => (
  <ImageBackground style={styles.picture} source={bgSrc}>
    {children}
  </ImageBackground>
)

Wallpaper.propTypes = {
  children: node.isRequired,
}

export default Wallpaper
