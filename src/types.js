/* eslint-disable import/prefer-default-export */
import { Badge, BadgeStore, User } from './state'

export type IUserInfo = typeof User.Type
export type IBadge = typeof Badge.Type
export type IBadgeStore = typeof BadgeStore.Type
export const degrees = ['ISC', 'ITE', 'ARQ', 'LAD', 'IMT', 'IMA']
