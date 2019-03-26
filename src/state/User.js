/* eslint-disable no-param-reassign */
import { types } from 'mobx-state-tree'
import { Badge } from './Badge'
import { IUserInfo, degrees } from '../types'

const User = types
  .model('User', {
    studentId: types.string,
    badges: types.array(Badge),
    name: types.string,
    degree: types.maybeNull(types.enumeration('degree', degrees)),
    email: types.string,
    photo: types.string,
    familyName: types.string,
    givenName: types.string,
  })
  .actions(self => ({
    setUser({
      studentId,
      badges,
      name,
      email,
      photo,
      familyName,
      degree,
      givenName,
    }: IUserInfo) {
      if (!studentId || studentId.length !== 9) {
        throw new Error('User studentId should not be empty and contain 9 characters')
      }
      self.studentId = studentId
      self.badges = badges
      self.name = name
      self.email = email
      self.photo = photo
      self.familyName = familyName
      self.degree = degree
      self.givenName = givenName
    },
  }))

const user = User.create({
  studentId: '',
  badges: [],
  name: '',
  degree: null,
  email: '',
  photo: '',
  familyName: '',
  givenName: '',
})

export { User, user, user as default }
