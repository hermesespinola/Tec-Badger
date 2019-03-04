import { types } from 'mobx-state-tree'

const Badge = types.model('Badge', {
  name: types.string,
  description: types.string,
  imageURL: types.string,
})

export { Badge, Badge as default }
