import { combineReducers } from '@reduxjs/toolkit';
import { sessionSlice, favoriteSlice, authModalSlice } from './slices';

const rootReducer = combineReducers({
  session: sessionSlice.reducer,
  favorite: favoriteSlice.reducer,
  authModal: authModalSlice.reducer,
});

export { rootReducer };
