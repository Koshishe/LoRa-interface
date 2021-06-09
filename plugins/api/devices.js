export default ($axios, tag) => ({
  getDevicesList(params) {
    console.log(tag);
    return $axios.get(tag, {
      params,
    })
      .then(({ data }) => data);
  },
});
