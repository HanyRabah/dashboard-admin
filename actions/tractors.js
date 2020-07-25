import axios from "axios";
import { useApiHandler, fetcher } from "@/actions";
import useSwr from "swr";

const createTractor = (data) => axios.post("/api/v1/tractors", data);

export const useCreateTractor = () => useApiHandler(createTractor);

export const useGetTractors = (id) => {
  const { data, error, ...rest } = useSwr(
    id ? `/api/v1/tractors/${id}` : null,
    fetcher
  );
  return { data, error, loading: !data && !error, ...rest };
};
