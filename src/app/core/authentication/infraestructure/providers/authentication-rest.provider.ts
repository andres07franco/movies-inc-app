import { HttpClient } from '@core/shared/domain';
import { SessionRaw, RequestTokenRaw } from '../dtos';
import { AuthenticationProvider } from '../../domain/interfaces/authentication.provider';
import { RequestToken } from '../../domain/dtos/request-token.dto';
import { LoginParams } from '../../domain/dtos/login-params.dto';
import { Session } from '../../domain/dtos/session.dto';
import { mapToRequestToken, mapToSession } from '../mappers';

export class AuthenticationRestProvider implements AuthenticationProvider {
  constructor(private httpClient: HttpClient) {}

  async createRequestToken(): Promise<RequestToken> {
    const data = await this.httpClient.get<RequestTokenRaw>(
      'authentication/token/new',
    );
    return mapToRequestToken(data);
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
    return mapToRequestToken(data);
  }

  async createSession(requestToken: string): Promise<Session> {
    const data = await this.httpClient.post<SessionRaw>(
      'authentication/session/new',
      {
        request_token: requestToken,
      },
    );
    return mapToSession(data, false);
  }

  async createGuestSession(): Promise<Session> {
    const data = await this.httpClient.get<SessionRaw>(
      'authentication/guest_session/new',
    );
    return mapToSession(data, true);
  }
}
