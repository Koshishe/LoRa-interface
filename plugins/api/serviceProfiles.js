export default ($axios, tag) => ({
  getServiceProfilesList(params) {
    return $axios.get(tag, {
      params,
    });
  },
  getDeviceProfilesList(params) {
    return $axios.get(tag, {
      params,
    });
  },
  getNetworkServersList(params) {
    return $axios.get(tag, {
      params,
    });
  },
  getOrganizationsList(params) {
    return $axios.get(tag, {
      params,
    });
  },
});
