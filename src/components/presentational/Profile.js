import React, { PureComponent } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { inject, PropTypes } from 'mobx-react'
import commonStyles from '../../styles/common'
import { FlatList } from 'react-native-gesture-handler'
import { IBadge } from '../../types'

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

const badgesStyles = StyleSheet.create({
  noBadges: {
    flex: 1,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  badgeListItemContainer: {
    padding: 10,
    backgroundColor: '#eff2f7',
    flex: 1,
    flexDirection: 'row',
  },
  badgeImage: {
    borderRadius: 100,
    height: 80,
    width: 80,
  },
  badgeListItemContent: {
    paddingLeft: 10,
  },
  badgeDescription: {
    color: commonStyles.colorTextLight,
  },
  badgeName: {
    color: commonStyles.colorText,
    fontSize: 16,
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

const renderBadgeListItem = ({ item: badge, index }) => (
  <View style={badgesStyles.badgeListItemContainer} key={`badge-${index}`}>
    <Image style={badgesStyles.badgeImage} source={{ uri: badge.imageURL || commonStyles.defaultBadgeImage }} />
    <View style={badgesStyles.badgeListItemContent}>
      <Text style={badgesStyles.badgeName}>{badge.name}</Text>
      <Text style={badgesStyles.badgeDescription}>{badge.description}</Text>
    </View>
  </View>
)

const BadgeListItemSeparator = () => (
  <View
    style={{
      height: 1,
      width: "100%",
      backgroundColor: "#CED0CE",
    }}
  />
)

const EmptyBadgeList = (
  <View style={badgesStyles.noBadges}>
    <Text>You have no badges :(</Text>
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
    return (
      <View>
        <ProfileHeader user={user} />
        <View>
          <FlatList
            data={user.badges}
            renderItem={renderBadgeListItem}
            ListEmptyComponent={EmptyBadgeList}
            ItemSeparatorComponent={BadgeListItemSeparator}
          />
        </View>
      </View>
    )
  }
}

Profile.propTypes = {
  user: PropTypes.observableObject,
}

export default Profile
