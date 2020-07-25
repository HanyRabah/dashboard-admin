import ProcessApi from '@/lib/api/ProcessClass';
import auth0 from '@/utils/auth0';

export default async function createProcess(req, res) {
  try {
    const { accessToken } = await auth0.getSession(req);
    const json = await new ProcessApi(accessToken).create(req.body);
    return res.status(200).json(json.data);
    
  } catch (e) {
    return res.status(e.status || 422).json(e.response.data)
  }
}

