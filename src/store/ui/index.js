export const ui = {
  state: () => ({
    isFooterBarVisible: true,
    isNavBarVisible: true,
    isAsideMobileExpanded: false,
    isAsideVisible: true,
    userName: 'Eduardo'
  }),

  mutations: {
    setAsideVisible(state, value) {
      state.isAsideVisible = value
    }
  },

  actions: {
    noAsideVisible({ commit }) {
      commit('setAsideVisible', false)
    },

    asideVisible({ commit }) {
      commit('setAsideVisible', true)
    }
  }
}
