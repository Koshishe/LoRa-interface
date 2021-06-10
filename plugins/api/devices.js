export default ($axios, tag) => ({
  getDevicesList(params) {
    return $axios.get(tag, {
      params,
    })
      .then(({ data }) => data);
  },
  setDevice() {
    return $axios.post(tag)
      .then(({ data }) => data);
  },
});
