import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import customersSlice from './slices/customers';

const reducer = combineReducers({
  customers: customersSlice,
});

export const store = configureStore({
  reducer,
});
