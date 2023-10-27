import { useSelector } from 'react-redux';
import { RootState } from 'src/app/app.store';
import { AuthModalState } from '../slices';

export const useAuthModalSelector = (): AuthModalState =>
  useSelector((state: RootState) => state.authModal);
