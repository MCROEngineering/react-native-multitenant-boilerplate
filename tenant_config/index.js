/* eslint-disable */

import Config from 'react-native-config';

const tenantConfigs = {
  main: require('./main/config'),
  apperizer: require('./apperizer/config'),
  cucubau: require('./cucubau/config')
};

export default tenantConfigs[Config.APP_PIN].default;
