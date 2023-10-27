import { createSlice } from '@reduxjs/toolkit';

export interface AuthModalState {
  visible: boolean;
}

const intialState: AuthModalState = { visible: false };

const authModalSlice = createSlice({
  name: 'favorite',
  initialState: intialState,
  reducers: {
    showModal: (state) => {
      return { ...state, visible: true };
    },
    hideModal: (state) => {
      return { ...state, visible: false };
    },
  },
});

export const { showModal, hideModal } = authModalSlice.actions;

export { authModalSlice };
