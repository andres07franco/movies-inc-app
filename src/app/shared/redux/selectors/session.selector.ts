import { useSelector } from 'react-redux';
import { SessionState } from '../slices';
import { RootState } from 'src/app/app.store';

export const useSessionSelector = (): SessionState =>
  useSelector((state: RootState) => state.session);
