import _ from 'lodash';
import { constantSettings } from '../settings';

const filterCollectionByCostantValues = objectData => {
  return _.pick(JSON.parse(objectData), constantSettings.packageFilterData);
};

export default {
  filterCollectionByCostantValues
};
