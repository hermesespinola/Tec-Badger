import React, { PureComponent } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { inject, PropTypes } from 'mobx-react'
import commonStyles from '../../styles/common'

const headerStyles = StyleSheet.create({
  container: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: commonStyles.profileHeaderColor,
  },
  photo: {
    borderRadius: 100,
    height: 100,
    width: 100,
  },
  title: {
    color: commonStyles.colorText,
    fontWeight: 'bold',
    fontSize: 22,
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
  },
  subtitleBlack: {
    color: commonStyles.colorText,
    fontSize: 16,
  },
  badgeDisplay: {
    flex: 1,
    flexDirection: 'row',
  },
})

const ProfileHeader = ({ user }) => (
  <View style={headerStyles.container}>
    <Image style={headerStyles.photo} source={{ uri: user.photo || commonStyles.defaultProfileImage }} />
    <Text style={headerStyles.title}>{user.name || 'Welcome!'}</Text>
    <Text style={headerStyles.subtitle}>{user.degree || 'No degree'}</Text>
    <View>
      <Text style={headerStyles.subtitleBlack}>1,377</Text>
      <Text style={headerStyles.subtitle}>Badges</Text>
    </View>
  </View>
)

@inject('user')
class Profile extends PureComponent {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: commonStyles.profileHeaderColor,
      shadowColor: commonStyles.profileHeaderColor,
      shadowOpacity: 0,
      shadowOffset: {
        height: 0,
      },
      shadowRadius: 0,
      elevation: 0,
    },
    headerTitle: '',
  }

  render() {
    const { user } = this.props
    console.log(user)
    return (
      <View>
        <ProfileHeader user={user} />
      </View>
    )
  }
}

Profile.propTypes = {
  user: PropTypes.observableObject,
}

export default Profile
