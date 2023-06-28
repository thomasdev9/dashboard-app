import { api } from './configs/axios-configs';
import { defineCancelApiObject } from './configs/axios-utils';

export const ProductsAPI = {
  getAllProducts: async function ({ cancel = false }) {
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
  getProductsByLimit: async function ({ limit = '5', cancel = false }) {
    const response = await api.request({
      url: '/products',
      method: 'GET',
      params: {
        limit: limit,
      },
      signal: cancel ? cancelApiObject[this.getProductsByLimit.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
  getSortedProducts: async function ({ sort, cancel = false }) {
    const response = await api.request({
      url: '/products',
      method: 'GET',
      params: {
        sort: sort,
      },
      signal: cancel ? cancelApiObject[this.getSortedProducts.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
  getProductsCategories: async function ({ cancel = false }) {
    const response = await api.request({
      url: '/products/categories',
      method: 'GET',
      signal: cancel ? cancelApiObject[this.getProductsCategories.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
  getProductsByCategory: async function ({ category, cancel = false }) {
    const response = await api.request({
      url: `/products/category/${category}`,
      method: 'GET',
      signal: cancel ? cancelApiObject[this.getProductsByCategory.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
  addProduct: async function ({ data, cancel = false }) {
    const response = await api.request({
      url: '/products',
      method: 'POST',
      body: {
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
