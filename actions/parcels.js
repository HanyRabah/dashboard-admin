import axios from "axios";
import { useApiHandler, fetcher } from "@/actions";
import useSwr from "swr";

const createParcel = (data) => axios.post("/api/v1/parcels", data);

export const useCreateParcel = () => useApiHandler(createParcel);

export const useGetParcels = (id) => {
  const { data, error, ...rest } = useSwr(
    id ? `/api/v1/parcels/${id}` : null,
    fetcher
  );
  return { data, error, loading: !data && !error, ...rest };
};
