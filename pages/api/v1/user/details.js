import auth0 from '@/utils/auth0';

export default async function details(req, res) {
  try {
    await auth0.handleProfile(req, res);
  } catch (error) {
    res.status(error.status || 500).end(error.message);
    return Promise.reject(error.message)
  }
}
