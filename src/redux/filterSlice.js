import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    update(state, action) {
      return action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { update } = filterSlice.actions;
