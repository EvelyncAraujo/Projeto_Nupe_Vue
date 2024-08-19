// import axios from 'axios'

export const state = () => ({
  campus: []
});

export const mutations = {
  setCampus(state, value) {
    state.campus = value;
  },
  addCampus(state, value){
    state.campus.push(value)
  }
};

export const actions = {
  async fetchAllCampus({ commit }) {
    const data = await this.$axios.$get('api/v1/campus/')
    commit("setCampus", data);
  },
  async createCampus({commit}, campus) {
    const data = await this.$axios.$post('api/v1/campus/', campus)
    commit("addCampus", data)
  }
};
