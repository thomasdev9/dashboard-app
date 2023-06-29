import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import customersSlice from './slices/customers';
import productsSlice from './slices/products';

const reducer = combineReducers({
  customers: customersSlice,
  products: productsSlice,
});

export const store = configureStore({
  reducer,
});
