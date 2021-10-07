import apiDevices from './devices';
import apiGateways from './gateways';
import apiServicesProfile from './serviceProfiles';

export default ({ $axios }, inject) => {
  const prefix = 'api/v1/';

  inject('api', {
    devices: apiDevices($axios, `${prefix}devices`),
    gateways: apiGateways($axios, `${prefix}gateways`),
    serviceProfiles: apiServicesProfile($axios, `${prefix}service_profiles`),
    deviceProfiles: apiServicesProfile($axios, `${prefix}device_profiles`),
    networkServers: apiServicesProfile($axios, `${prefix}/network_servers`),
    organizations: apiServicesProfile($axios, `${prefix}/organizations`),
  });
};
