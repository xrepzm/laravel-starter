import { ADD_USER, GET_ALL_USERS } from '../mutation-types'

const state = {
  users: [],
}

const getters = {
  allUsers(state) {
    return state.users
  }
}

const mutations = {
  [ADD_USER] (state, user) {
    state.users.push(user)

    Vue.http.post('user', user).then(response => {
      console.log(response)
    }, error => console.error(error))
  },
  [GET_ALL_USERS] (state, users) {
    state.users = users
  }
}

const actions = {
  addUser ({ commit }, user) {
    commit(ADD_USER, user)
  },
  getAllUsers({ commit }, users) {
    Vue.http.get('users').then(response => {
      commit(GET_ALL_USERS, response.body.users)
    }, error => console.error(error))
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
