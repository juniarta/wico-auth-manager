const GRANT_TYPE = Object.freeze({
  AUTHORIZATION_CODE: 'authorization_code',
  CLIENT_CREDENTIALS: 'client_credentials',
  REFRESH_TOKEN: 'refresh_token',
});

export default class AuthEnum {
  static get GRANT_TYPE() {
    return GRANT_TYPE;
  }
}
