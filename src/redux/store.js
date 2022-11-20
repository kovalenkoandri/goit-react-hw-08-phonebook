import { contactsReducer } from 'redux/contactsSlice';
import { filterReducer } from 'redux/filterSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    contactsSlice: contactsReducer,
    filterSlice: filterReducer,
  },
});
