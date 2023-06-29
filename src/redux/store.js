import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import customersSlice from './slices/customers';
import productsSlice from './slices/products';
import ordersSlice from './slices/orders';

const reducer = combineReducers({
  customers: customersSlice,
  products: productsSlice,
  orders: ordersSlice,
});

export const store = configureStore({
  reducer,
});
