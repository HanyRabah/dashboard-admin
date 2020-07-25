import TractorsApi from "@/lib/api/TractorsClass";
import auth0 from "@/utils/auth0";

export default async function createTractor(req, res) {
  try {
    const { accessToken } = await auth0.getSession(req);
    const json = await new TractorsApi(accessToken).create(req.body);
    return res.status(200).json(json.data);
  } catch (e) {
    return res.status(e.status || 422).json(e.response.data);
  }
}
