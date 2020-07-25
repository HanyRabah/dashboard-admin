import ParcelsApi from "@/lib/api/ParcelsClass";
import auth0 from "@/utils/auth0";

export default async function handleParcels(req, res) {
  if (req.method === "GET") {
    try {
      const json = await new ParcelsApi().getById(req.query.id);
      return res.status(200).json(json.data);
    } catch (e) {
      return res.status(e.status || 422).json(e.response.data);
    }
  }

  if (req.method === "PATCH") {
    try {
      const { accessToken } = await auth0.getSession(req);
      const json = await new ParcelsApi(accessToken).update(
        req.query.id,
        req.body,
      );
      return res.status(200).json(json.data);
    } catch (e) {
      return res.status(e.status || 422).json(e.response.data);
    }
  }

  if (req.method === "DELETE") {
    try {
      const { accessToken } = await auth0.getSession(req);
      const json = await new ParcelsApi(accessToken).delete(req.query.id);
      return res.status(200).json(json.data);
    } catch (e) {
      return res.status(e.status || 422).json(e.response.data);
    }
  }
}
