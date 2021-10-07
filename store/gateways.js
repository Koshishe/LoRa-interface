export const state = () => ({
  gatewaysList: [],
});

export const mutations = {
  GET_GATEWAYS_LIST(state, result) {
    state.gatewaysList = result.data.data;
  },
};

export const actions = {
  getGatewaysList({ commit }, params) {
    this.$api.gateways.getGatewaysList(params).then((result) => {
      commit('GET_GATEWAYS_LIST', result);
    });
  },
};
