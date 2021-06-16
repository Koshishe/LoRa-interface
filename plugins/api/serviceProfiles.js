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
});
