import { LoginParams } from '../dtos/login-params.dto';
import { Session } from '../dtos/session.dto';
import { AuthenticationProvider } from '../interfaces/authentication.provider';

export class LoginService {
  constructor(private authenticationProvider: AuthenticationProvider) {}

  /**
   * execute the login flow
   * @param param user and password
   * @returns session
   */
  async execute(param: LoginParams): Promise<Session> {
    const { requestToken } =
      await this.authenticationProvider.createRequestToken();

    const validatedToken = await this.authenticationProvider.validateWithLogin(
      param,
      requestToken,
    );

    const session = await this.authenticationProvider.createSession(
      validatedToken.requestToken,
    );

    session.username = param.username;
    return session;
  }
}
