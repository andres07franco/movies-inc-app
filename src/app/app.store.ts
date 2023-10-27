import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '@shared/redux';
import thunk from 'redux-thunk';

const middlewares = [thunk];

const store = configureStore({ reducer: rootReducer, middleware: middlewares });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
