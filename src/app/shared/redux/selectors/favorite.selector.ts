import { useSelector } from 'react-redux';
import { RootState } from 'src/app/app.store';

export const useFavoriteSelector = (): number[] =>
  useSelector((state: RootState) => state.favorite);
