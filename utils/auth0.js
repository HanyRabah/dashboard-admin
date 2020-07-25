import { initAuth0 } from '@auth0/nextjs-auth0';

const auth0 = initAuth0({
  domain: process.env.AUTH_DOMAIN,
  clientId: process.env.AUTH_CLIENT_ID,
  clientSecret: process.env.AUTH_CLIENT_SECRET,
  scope: 'openid profile',
  audience: process.env.AUTH_AUDIENCE,
  redirectUri: process.env.AUTH_REDIRECT_URI,
  postLogoutRedirectUri: process.env.AUTH_POST_LOGOUT_REDIRECT_URI,
  session: {
    cookieSecret: process.env.AUTH_COOKIE_SECRET,
    cookieLifetime: 60 * 60 * 8,
    storeAccessToken: true
  }
});

export default auth0;

export const isAuthorizedUser = (user, role) => {
  return user && user[process.env.AUTH_NAMESPACE].includes(role);
}

 export const authorizeUser = async (req, res) => { 
  const session = await auth0.getSession(req);
  
  if(!session || !session.user) {
    res.writeHead(302, { Location: '/api/v1/user/login' });
    res.end();
    return null
  }

  return session.user;
}

export const withAuth = () => role => async ({req, res}) => {
  const session = await auth0.getSession(req);

  if(!session || !session.user || (role && !isAuthorizedUser(session.user, role)) ) {
    res.writeHead(302, { Location: '/api/v1/user/login' });
    res.end();
    return { props: {} }
  }

  return { props: {user: session.user} };
}

