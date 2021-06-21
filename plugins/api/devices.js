export default ($axios, tag, $router) => ({
  getDevicesList(params) {
    return $axios.get(tag, {
      params,
    });
  },
  setDevice(params) {
    return $axios.post(tag, params);
  },
  changeDevice(params) {
    return $axios.put(`${tag}/${localStorage.getItem('dev_id')}`, params);
  },
  deleteDevice(params) {
    return $axios.delete(`${tag}/${localStorage.getItem('dev_id')}`, params);
  },
});
