export const namespaced = true

export const state = () => ({
  token: '',
})

export const getters = {
  loggedInUser(state, getters, rootState) {
    return rootState.auth.user
  },
}

export const mutations = {
  setToken(state, data) {
    state.token = data
  },
}

export const actions = {
  async login({ commit, dispatch }, data) {
    try {
      const res = await this.$auth.loginWith('local', {
        data: {
          email: data.email,
          password: data.password,
        },
      })
      commit('setToken', res.data.token)
      this.$router.push({ path: '/example' })
    } catch (e) {
      // eslint-disable-next-line
      console.log(e.response.data.message)
    }
  },
  async logout({ commit }) {
    await this.$auth.logout()
    commit('setToken', '')
    this.$router.push('/')
  },
}
