import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginService } from '@core';
import { LoginParams } from '@core/authentication/domain/dtos/login-params.dto';
import { signIn as signInAction } from '@shared/redux/slices';
import { useToast } from '@shared/hooks/use-toast.hook';

export const useSignIn = () => {
  const dispatch = useDispatch();
  const { showSuccess, showError } = useToast();
  const [loading, setLoading] = useState<boolean>(false);

  const signIn = useCallback(
    async (params: LoginParams, successCallback: () => void) => {
      try {
        const session = await loginService.execute(params);
        dispatch(signInAction(session));
        showSuccess('Sign In Success');
        successCallback();
      } catch (error) {
        showError(`${(error as any)?.response?.data?.status_message}`);
        console.log('Error on sign in', error);
      } finally {
        setLoading(false);
      }
    },
    [dispatch, showError, showSuccess],
  );

  return {
    signIn,
    loading,
  };
};
