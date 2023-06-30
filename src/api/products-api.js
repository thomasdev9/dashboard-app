import { api } from './configs/axios-configs';
import { defineCancelApiObject } from './configs/axios-utils';

export const ProductsAPI = {
  getAllProducts: async function (cancel = false) {
    const response = await api.request({
      url: '/products',
      method: 'GET',
      signal: cancel ? cancelApiObject[this.getAllProducts.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
  getSingleProduct: async function ({ id, cancel = false }) {
    const response = await api.request({
      url: `/products/${id}`,
      method: 'GET',
      signal: cancel ? cancelApiObject[this.getSingleProduct.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
  addProduct: async function ({ data, cancel = false }) {
    const response = await api.request({
      url: '/products',
      method: 'POST',
      data: {
        ...data,
      },
      signal: cancel ? cancelApiObject[this.addProduct.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
  updateProduct: async function ({ data, id, cancel = false }) {
    const response = await api.request({
      url: `/products/${id}`,
      method: 'PUT',
      body: {
        ...data,
      },
      signal: cancel ? cancelApiObject[this.updateProduct.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
  deleteProduct: async function ({ id, cancel = false }) {
    const response = await api.request({
      url: `/products/${id}`,
      method: 'DELETE',
      signal: cancel ? cancelApiObject[this.deleteProduct.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
};

const cancelApiObject = defineCancelApiObject(ProductsAPI);
