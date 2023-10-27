import { RequestToken } from '@core/authentication/domain/dtos';
import { RequestTokenRaw } from '../dtos';

export function mapToRequestToken(data: RequestTokenRaw) {
  return {
    expiresAt: data.expires_at,
    requestToken: data.request_token,
  } as RequestToken;
}
