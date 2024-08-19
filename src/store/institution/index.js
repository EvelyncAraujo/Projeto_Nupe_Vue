// import axios from 'axios'

export const state = () => ({
  institutions: []
});

export const mutations = {
  setInstitutions(state, value) {
    state.institutions = value;
  },
  addInstitution(state, value) {
    state.institution.push(value)
  }
};

export const actions = {
  async fetchAllInstitutions({ commit }) {
    const data = await this.$axios.$get('api/v1/institution')
    commit("setInstitutions", data);
  },
  async createInstitution({ commit }, institution) {
    const data = await this.$axios.$post('api/v1/institution/', institution)
    commit("addInstitution", data)
  }
};
