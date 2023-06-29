import { api } from './configs/axios-configs';
import { defineCancelApiObject } from './configs/axios-utils';

export const OrdersAPI = {
  getAllOrders: async function (cancel = false) {
    const response = await api.request({
      url: '/orders',
      method: 'GET',
      signal: cancel ? cancelApiObject[this.getAllOrders.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
  addOrder: async function ({ id, data, cancel = false }) {
    const response = await api.request({
      url: `/orders/${id}`,
      method: 'POST',
      data: { ...data },
      signal: cancel ? cancelApiObject[this.addOrder.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
  updateOrder: async function ({ id, data, cancel = false }) {
    const response = await api.request({
      url: `/orders/${id}`,
      method: 'PUT',
      data: { ...data },
      signal: cancel ? cancelApiObject[this.updateOrder.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
  deleteOrder: async function ({ id, cancel = false }) {
    const response = await api.request({
      url: `/orders/${id}`,
      method: 'DELETE',
      signal: cancel ? cancelApiObject[this.deleteOrder.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
};

const cancelApiObject = defineCancelApiObject(OrdersAPI);
