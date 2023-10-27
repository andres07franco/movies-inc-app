import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authenticationProvider } from '@core';
import { isDateExpired } from '@shared/utils/dates/date.functions';
import { useSessionSelector } from '@shared/redux/selectors';
import { signInGuest } from '@shared/redux/slices';

export const useLoadSessionEffect = () => {
  const dispatch = useDispatch();
  const { session } = useSessionSelector();
  const loadSession = useCallback(async () => {
    try {
      if (session && !isDateExpired(session.expiresAt)) {
        return;
      }
      const response = await authenticationProvider.createGuestSession();
      if (!response.sessionId) {
        throw new Error('error on get session');
      }

      dispatch(signInGuest(response));
    } catch (error) {
      console.log('Error on load session', error);
    }
  }, [dispatch, session]);

  useEffect(() => {
    loadSession();
  }, [loadSession]);
};
