import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  filter: '',
};
const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    filterTask(state, action) {
      state.filter = action.payload;
    },
  },
});
export const filterReducer = filterSlice.reducer;
export const { filterTask } = filterSlice.actions;