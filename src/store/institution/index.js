// import { axios } from 'axios';

export const institution = {
  state: () => ({
    institutions: []
  }),

  mutations: {
    setInstitutions(state, value) {
      state.institutions = value;
    },
    addInstitution(state, value) {
      state.institution.push(value)
    }
  },

  actions: {
    async fetchAllInstitutions({ commit }) {
      const data = await this.axios.get('api/v1/institution')
      commit("setInstitutions", data);
    },
    async createInstitution({ commit }, institution) {
      const data = await this.axios.post('api/v1/institution/', institution)
      commit("addInstitution", data)
    }
}
}
