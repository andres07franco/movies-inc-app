import { LoginParams } from '../dtos/login-params.dto';
import { RequestToken } from '../dtos/request-token.dto';
import { Session } from '../dtos/session.dto';

export interface AuthenticationProvider {
  createRequestToken(): Promise<RequestToken>;
  validateWithLogin(
    params: LoginParams,
    requestToken: string,
  ): Promise<RequestToken>;
  createSession(requestToken: string): Promise<Session>;
  createGuestSession(): Promise<Session>;
}
