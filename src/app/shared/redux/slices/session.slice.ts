import { Session } from '@core/authentication/domain/dtos/session.dto';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface SessionState {
  sessionStarted: boolean;
  session: Session;
}

const intialState: SessionState = {
  sessionStarted: false,
  session: {
    username: 'Guest',
    expiresAt: '',
    sessionId: '',
    isGuess: true,
  },
};

const sessionSlice = createSlice({
  name: 'session',
  initialState: intialState,
  reducers: {
    signInGuest: (state, { payload }: PayloadAction<Session>) => {
      return {
        ...state,
        sessionStarted: false,
        session: {
          ...payload,
          username: 'Guest',
        },
      };
    },
    signIn: (state, { payload }: PayloadAction<Session>) => {
      return {
        ...state,
        sessionStarted: true,
        session: payload,
      };
    },
    logOut: (state) => {
      return {
        ...state,
        ...intialState,
      };
    },
  },
});

export const { signInGuest, signIn, logOut } = sessionSlice.actions;

export { sessionSlice };
