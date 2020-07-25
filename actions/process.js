import axios from "axios";
import { useApiHandler, fetcher } from "@/actions";
import useSwr from "swr";

const createProcess = (data) => axios.post("/api/v1/process", data);

export const useCreateProcess = () => useApiHandler(createProcess);

export const useGetProcess = (id) => {
  const { data, error, ...rest } = useSwr(
    id ? `/api/v1/process/${id}` : null,
    fetcher
  );
  return { data, error, loading: !data && !error, ...rest };
};
