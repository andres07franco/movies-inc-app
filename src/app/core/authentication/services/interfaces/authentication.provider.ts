import { RequestToken } from '../dtos/request-token.dto';
import { Session } from '../dtos/session.dto';

export interface AuthenticationProvider {
  createRequestToken(): Promise<RequestToken>;
  createGuestSession(): Promise<Session>;
}
