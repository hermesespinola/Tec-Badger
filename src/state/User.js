/* eslint-disable no-param-reassign */
import { types } from 'mobx-state-tree'
import { IUserInfo, degrees } from '../types'

const User = types
  .model('User', {
    id: types.string,
    name: types.string,
    degree: types.enumeration(degrees), // TODO: Add more
    email: types.string,
    photo: types.string,
    familyName: types.string,
  })
  .actions(self => ({
    setUser({ id, name, email, photo, familyName, degree }: IUserInfo) {
      if (!id || id.length !== 9) {
        throw new Error('User id should not be empty and contain 9 characters')
      }
      self.id = id
      self.name = name
      self.email = email
      self.photo = photo
      self.familyName = familyName
      self.degree = degree
    },
  }))

const user = User.create({
  id: null,
  name: null,
  email: null,
  photo: null,
  familyName: null,
})

export { User, user, user as default }
