import * as types from './mutation-types'

export const addUser = ({ commit }, user) => {
  commit(types.ADD_USER, user)
}
