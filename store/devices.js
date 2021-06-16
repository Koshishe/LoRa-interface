export const state = () => ({
  devicesList: [],
});

export const mutations = {
  GET_DEVICES_LIST(state, result) {
    state.devicesList = result.data.data;
  }
};

export const actions = {
  getDevicesList({ commit }) {
    const params = {skip: 0, limit: 5};
    this.$api.devices.getDevicesList(params).then((result) => {
      commit('GET_DEVICES_LIST', result);
    });
  }
};
