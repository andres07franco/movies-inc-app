import { Session } from '@core/authentication/domain/dtos';
import { SessionRaw } from '../dtos';

export function mapToSession(data: SessionRaw, isGuess: boolean) {
  var fecha = new Date();
  fecha.setHours(fecha.getHours() + 1);
  return {
    expiresAt: data.expires_at ?? fecha.toISOString(),
    sessionId: isGuess ? data.guest_session_id : data.session_id,
    isGuess: isGuess,
    username: isGuess ? 'Guest' : '',
  } as Session;
}
