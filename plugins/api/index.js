import apiDevices from './devices';

export default ({ $axios }, inject) => {
  const prefix = 'api/v1/';

  inject('api', {
    devices: apiDevices($axios, `${prefix}devices`),
  });
};
