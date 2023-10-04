import { Session } from '@core/authentication/services/dtos/session.dto';
import { atom } from 'jotai';

export const sessionAtom = atom<Session | undefined>(undefined);
sessionAtom.debugLabel = 'sessionAtom';
