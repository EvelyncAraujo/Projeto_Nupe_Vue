export const location = {

  state: () => ({
    locations: []
  }),
  
  mutations: {
    setLocations(state, value) {
      state.locations = value;
    }
  },
  
  actions: {
    async fetchAllLocations({ commit }) {
      const data = await this.$axios.$get('api/v1/location/')
      commit("setLocations", data);
    }
  }
}