export const getUsers = state => {
  return state.users
}

export const getUser = state => {
  return state.users.map(({ id }) => {
    const user = state.users.all.find(u => u.id === id)

    return {
      name: user.name,
      email: user.email,
    }
  })
}
