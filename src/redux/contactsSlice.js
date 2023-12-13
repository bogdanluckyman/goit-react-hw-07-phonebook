import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    add: {
      prepare(value) {
        const id = nanoid();
        return {
          payload: { ...value, id },
        };
      },
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
    },
    remove(state, action) {
      const idToRemove = action.payload;
      state.contacts = state.contacts.filter(item => item.id !== idToRemove);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { add, remove } = contactsSlice.actions;
