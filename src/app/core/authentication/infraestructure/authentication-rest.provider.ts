import { HttpClient } from '@core/shared/services/interfaces/http.client';
import { RequestToken } from '../services/dtos/request-token.dto';
import { Session } from '../services/dtos/session.dto';
import { AuthenticationProvider } from '../services/interfaces/authentication.provider';
import { SessionRaw } from './dtos/session-raw.dto';

export class AuthenticationRestProvider implements AuthenticationProvider {
  constructor(private httpClient: HttpClient) {}

  createRequestToken(): Promise<RequestToken> {
    throw new Error('Method not implemented.');
  }
  async createGuestSession(): Promise<Session> {
    const data = await this.httpClient.get<SessionRaw>(
      'authentication/guest_session/new',
    );
    return {
      expiresAt: data.expires_at,
      sessionId: data.guest_session_id,
    };
  }
}
