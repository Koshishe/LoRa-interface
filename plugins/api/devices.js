export default ($axios, tag) => ({
  getDevicesList(params) {
    return $axios.get(tag, {
      params,
    });
  },
  setDevice(params) {
    return $axios.post(tag, params);
  },
});
