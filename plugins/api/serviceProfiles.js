export default ($axios, tag) => ({
  getServiceProfilesList(params) {
    return $axios.get(tag, {
      params,
    });
  },
});
