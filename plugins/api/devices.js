export default ($axios, tag) => ({
  getDevicesList(params) {
    return $axios.get(tag, {
      params,
    })
      .then(({ data }) => data);
  },
  setDevice(params) {
    return $axios.get(`${tag}`, params)
      .then(({ data }) => data || [])
      .catch(() => []);
  },
});
