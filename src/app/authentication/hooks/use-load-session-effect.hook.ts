import { useCallback, useEffect } from 'react';
import { useAtom } from 'jotai';
import { authenticationProvider } from '@core';
import { sessionAtom } from '@shared/states/session.state';
import { isDateExpired } from '@shared/utils/dates/date.functions';

export const useLoadSessionEffect = () => {
  const [session, setSession] = useAtom(sessionAtom);
  const loadSession = useCallback(async () => {
    try {
      if (session && !isDateExpired(session.expiresAt)) {
        return;
      }
      const response = await authenticationProvider.createGuestSession();
      if (!response.sessionId) {
        throw new Error('error on get session');
      }
      setSession((prev) => ({ ...prev, ...response }));
    } catch (error) {
      console.log('Error on load session', error);
    }
  }, [session, setSession]);

  useEffect(() => {
    loadSession();
  }, [loadSession]);
};
