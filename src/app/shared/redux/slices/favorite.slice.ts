import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const intialState: number[] = [];

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: intialState,
  reducers: {
    fill: (_, { payload }: PayloadAction<number[]>) => payload,
    add: (state, { payload }: PayloadAction<number>) => {
      return [...state, payload];
    },
    remove: (state, { payload }: PayloadAction<number>) => {
      const localState = state;
      const index = localState.indexOf(payload);
      localState.splice(index, 1);
    },
  },
});

export const { add, remove, fill } = favoriteSlice.actions;

export { favoriteSlice };
