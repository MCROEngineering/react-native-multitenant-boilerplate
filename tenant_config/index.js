/* eslint-disable */

import Config from 'react-native-config';
import main from './main/config';
import apperizer from './apperizer/config';
import cucubau from './cucubau/config';

const tenantConfigs = {
  main,
  apperizer,
  cucubau
};

export default { ...tenantConfigs[Config.APP_PIN], ...Config };

