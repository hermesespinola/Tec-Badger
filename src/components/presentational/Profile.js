import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { inject, PropTypes } from 'mobx-react'

@inject('user')
class Profile extends PureComponent {
  render() {
    const { user } = this.props
    return (
      <View>
        <Text>{user.name}</Text>
      </View>
    )
  }
}

Profile.propTypes = {
  user: PropTypes.objectOrObservableObject.isRequired,
}

export default Profile
