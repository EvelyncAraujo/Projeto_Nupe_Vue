export const state = () => ({
    locations: []
  });
  
  export const mutations = {
    setLocations(state, value) {
      state.locations = value;
    }
  };
  
  export const actions = {
    async fetchAllLocations({ commit }) {
      const data = await this.$axios.$get('api/v1/location/')
      commit("setLocations", data);
    }
  };