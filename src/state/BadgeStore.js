import { types } from 'mobx-state-tree'
import { IBadge } from '../types'
import { Badge } from './Badge'

const BadgeStore = types
  .model('BadgeStore', {
    badges: types.array(Badge),
  })
  .actions(self => ({
    addBadge(newBadge: IBadge) {
      if (!newBadge.name || newBadge.name.length === 0) {
        throw new Error('Badge name should not be empty')
      }
      if (!newBadge.description || newBadge.description.length === 0) {
        throw new Error('Badge description should not be empty')
      }
      if (!newBadge.imageURL || newBadge.imageURL.length === 0) {
        throw new Error('Badge imageURL should not be empty')
      }
      self.badges.push(newBadge)
    },

    deleteBadge(index: number) {
      if (index < 0 || index > self.badges.length) {
        throw new Error('BadgeStore Model Action Error: badge not found')
      }
      self.badges.splice(index, 1)
    },
  }))

const badgeStore = BadgeStore.create({
  badges: [],
})

export { BadgeStore, badgeStore }
