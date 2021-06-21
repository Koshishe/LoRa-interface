export const state = () => ({
  devicesList: [],
});

export const mutations = {
  GET_DEVICES_LIST(state, result) {
    state.devicesList = result.data.data;
  },
};

export const actions = {
  getDevicesList({ commit }, params) {
    this.$api.devices.getDevicesList(params).then((result) => {
      commit('GET_DEVICES_LIST', result);
    });
  },
};
