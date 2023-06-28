import { api } from './configs/axios-configs';
import { defineCancelApiObject } from './configs/axios-utils';

export const UsersAPI = {
  getAllUsers: async function ({ cancel = false }) {
    const response = await api.request({
      url: '/users',
      method: 'GET',
      signal: cancel ? cancelApiObject[this.getAllUsers.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
  getSingleUser: async function ({ id, cancel = false }) {
    const response = await api.request({
      url: `/users/${id}`,
      method: 'GET',
      signal: cancel ? cancelApiObject[this.getSingleUser.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
  getUsersByLimit: async function ({ limit = '5', cancel = false }) {
    const response = await api.request({
      url: '/users',
      method: 'GET',
      params: {
        limit: limit,
      },
      signal: cancel ? cancelApiObject[this.getUsersByLimit.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
  getSortedUsers: async function ({ sort = 'asc', cancel = false }) {
    const response = await api.request({
      url: '/users',
      method: 'GET',
      params: {
        sort: sort,
      },
      signal: cancel ? cancelApiObject[this.getSortedUsers.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
  addUser: async function ({ data, cancel = false }) {
    const response = await api.request({
      url: '/users',
      method: 'POST',
      body: {
        ...data,
      },
      signal: cancel ? cancelApiObject[this.addUser.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
  updateUser: async function ({ data, id, cancel = false }) {
    const response = await api.request({
      url: `/users/${id}`,
      method: 'PUT',
      body: {
        ...data,
      },
      signal: cancel ? cancelApiObject[this.updateUser.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
  deleteUser: async function ({ id, cancel = false }) {
    const response = await api.request({
      url: `/users/${id}`,
      method: 'DELETE',
      signal: cancel ? cancelApiObject[this.deleteUser.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
};

const cancelApiObject = defineCancelApiObject(UsersAPI);
