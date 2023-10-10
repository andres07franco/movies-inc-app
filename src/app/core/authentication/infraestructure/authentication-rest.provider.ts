import { HttpClient } from '@core/shared/domain/interfaces/http.client';
import { SessionRaw } from './dtos/session-raw.dto';
import { RequestTokenRaw } from './dtos/request-token-raw.dto';
import { AuthenticationProvider } from '../domain/interfaces/authentication.provider';
import { RequestToken } from '../domain/dtos/request-token.dto';
import { LoginParams } from '../domain/dtos/login-params.dto';
import { Session } from '../domain/dtos/session.dto';

export class AuthenticationRestProvider implements AuthenticationProvider {
  constructor(private httpClient: HttpClient) {}

  async createRequestToken(): Promise<RequestToken> {
    const data = await this.httpClient.get<RequestTokenRaw>(
      'authentication/token/new',
    );
    return {
      expiresAt: data.expires_at,
      requestToken: data.request_token,
    };
  }

  async validateWithLogin(
    params: LoginParams,
    requestToken: string,
  ): Promise<RequestToken> {
    const data = await this.httpClient.post<RequestTokenRaw>(
      'authentication/token/validate_with_login',
      {
        username: params.username,
        password: params.password,
        request_token: requestToken,
      },
    );
    return {
      expiresAt: data.expires_at,
      requestToken: data.request_token,
    };
  }

  async createSession(requestToken: string): Promise<Session> {
    const data = await this.httpClient.post<SessionRaw>(
      'authentication/session/new',
      {
        request_token: requestToken,
      },
    );
    var fecha = new Date();
    fecha.setHours(fecha.getHours() + 1);
    return {
      expiresAt: data.expires_at ?? fecha.toISOString(),
      sessionId: data.session_id,
      isGuess: false,
      username: '',
    };
  }

  async createGuestSession(): Promise<Session> {
    const data = await this.httpClient.get<SessionRaw>(
      'authentication/guest_session/new',
    );
    return {
      expiresAt: data.expires_at,
      sessionId: data.guest_session_id,
      isGuess: true,
      username: 'Guest',
    };
  }
}
