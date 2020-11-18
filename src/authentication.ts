import { AUTHORIZATION_HEADER, setHeader } from './http/httpHeaders';
import { passThroughInterceptor } from './http/httpInterceptor';
import { AuthenticatorInterface } from './http/requestBuilder';

/** None authentication provider */
export const noneAuthenticationProvider = () => passThroughInterceptor;

export const accessTokenAuthenticationProvider = ({
  accessToken,
}: {
  accessToken: string;
}): AuthenticatorInterface<boolean> => {
  return (requiresAuth?: boolean) => {
    if (!requiresAuth) {
      return passThroughInterceptor;
    }

    return (request, options, next) => {
      request.headers = request.headers ?? {};
      setHeader(request.headers, AUTHORIZATION_HEADER, `Bearer ${accessToken}`);

      return next(request, options);
    };
  };
};
