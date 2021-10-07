export const state = () => ({
  serviceProfileIDList: [],
  deviceProfileIDList: [],
  networkServersIDList: [],
  organizationsIDList: [],
});

export const mutations = {
  GET_SERVICE_PROFILE_ID_LIST(state, result) {
    state.serviceProfileIDList = result.data.data.map((item) => {
      return item.id;
    });
  },
  GET_DEVICE_PROFILE_ID_LIST(state, result) {
    state.deviceProfileIDList = result.data.data.map((item) => {
      return item.id;
    });
  },
  GET_NETWORK_SERVERS_LIST(state, result) {
    state.networkServersIDList = result.data.data.map((item) => {
      return item.id;
    });
  },
  GET_ORGANIZATIONS_LIST(state, result) {
    state.organizationsIDList = result.data.data.map((item) => {
      return item.id;
    });
  },
};

export const actions = {
  getServiceProfileId({ commit }) {
    const params = {skip: 0, limit: 5};
    this.$api.serviceProfiles.getServiceProfilesList(params).then((result) => {
      commit('GET_SERVICE_PROFILE_ID_LIST', result);
    });
  },
  getNetworkServersId({ commit }) {
    const params = {skip: 0, limit: 5};
    this.$api.networkServers.getNetworkServersList(params).then((result) => {
      commit('GET_NETWORK_SERVERS_LIST', result);
    });
  },
  getOrganizationsId({ commit }) {
    const params = {skip: 0, limit: 5};
    this.$api.organizations.getOrganizationsList(params).then((result) => {
      commit('GET_ORGANIZATIONS_LIST', result);
    });
  },
  getDeviceProfileId({ commit }) {
    const params = {skip: 0, limit: 5};
    this.$api.deviceProfiles.getDeviceProfilesList(params).then((result) => {
      commit('GET_DEVICE_PROFILE_ID_LIST', result);
    });
  }
};
