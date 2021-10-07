export default ($axios, tag, $router) => ({
  getGatewaysList(params) {
    console.log(tag);
    return $axios.get(tag, {
      params,
    });
  },
  setGateway(params) {
    return $axios.post(tag, params);
  },
  changeGateway(params) {
    return $axios.put(`${tag}/${localStorage.getItem('id')}`, params);
  },
  deleteGateway(params) {
    return $axios.delete(`${tag}/${localStorage.getItem('id')}`, params);
  },
});
