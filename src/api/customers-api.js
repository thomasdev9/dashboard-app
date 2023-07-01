import { api } from './configs/axios-configs';
import { defineCancelApiObject } from './configs/axios-utils';

export const CustomersAPI = {
  getAllCustomers: async function (cancel = false) {
    const response = await api.request({
      url: '/customers',
      method: 'GET',
      signal: cancel ? cancelApiObject[this.getAllCustomers.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
  getSingleCustomer: async function ({ id, cancel = false }) {
    const response = await api.request({
      url: `/customers/${id}`,
      method: 'GET',
      signal: cancel ? cancelApiObject[this.getSingleCustomer.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
  addCustomer: async function ({ data, cancel = false }) {
    const response = await api.request({
      url: '/customers',
      method: 'POST',
      data: {
        ...data,
      },
      signal: cancel ? cancelApiObject[this.addCustomer.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
  updateCustomer: async function ({ data, id, cancel = false }) {
    const response = await api.request({
      url: `/customers/${id}`,
      method: 'PUT',
      data: {
        ...data,
      },
      signal: cancel ? cancelApiObject[this.updateCustomer.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
  deleteCustomer: async function ({ id, cancel = false }) {
    const response = await api.request({
      url: `/customers/${id}`,
      method: 'DELETE',
      signal: cancel ? cancelApiObject[this.deleteCustomer.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
};

const cancelApiObject = defineCancelApiObject(CustomersAPI);
