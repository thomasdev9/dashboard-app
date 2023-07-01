import { api } from './configs/axios-configs';
import { defineCancelApiObject } from './configs/axios-utils';

export const SettingsAPI = {
  updateSettings: async function ({ data, cancel = false }) {
    const response = await api.request({
      url: '/settings',
      method: 'PUT',
      data: { ...data },
      signal: cancel ? cancelApiObject[this.updateSettings.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
};

const cancelApiObject = defineCancelApiObject(SettingsAPI);
