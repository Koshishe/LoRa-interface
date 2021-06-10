export const state = () => ({
  devicesList: [],
  deviceAdd: '',
});

export const mutations = {
  GET_DEVICES_LIST(state, items) {
    state.devicesList = items;
  },
  SET_DEVICE(state, result) {
    state.deviceAdd = result.data.devEUI;
  }
};

export const actions = {
  getDevicesList({ commit }) {
    const params = {skip: 0, limit: 5};
    this.$api.devices.getDevicesList(params).then((result) => {
      commit('GET_DEVICES_LIST', result);
    });
  },
  setDevice() {
    this.$api.devices.getDevicesList(params).then((result) => {
      commit('SET_DEVICE', result);
    });
  }
};
