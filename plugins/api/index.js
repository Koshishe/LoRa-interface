import apiDevices from './devices';
import apiServicesProfile from './serviceProfiles';

export default ({ $axios }, inject) => {
  const prefix = 'api/v1/';

  inject('api', {
    devices: apiDevices($axios, `${prefix}devices`),
    serviceProfiles: apiServicesProfile($axios, `${prefix}service_profiles`)
  });
};
