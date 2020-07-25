import axios from 'axios';
import { useApiHandler, fetcher } from '@/actions';
import useSwr from 'swr';


const createProcess = (data) =>  axios.post('/api/v1/process', data)
//const updateProcess = (id, data) =>  axios.patch(`/api/v1/process/${id}`, data)
//const deleteProcess = (id) =>  axios.delete(`/api/v1/process/${id}`)

export const useCreateProcess = () => useApiHandler(createProcess);
//export const useUpdateProcess = () => useApiHandler(updateProcess);
//export const useDeleteProcess = () => useApiHandler(deleteProcess);

export const useGetProcess = (id) => {
  const {data, error, ...rest} =  useSwr( id ? `/api/v1/process/${id}` : null, fetcher);
  return { data, error, loading: !data && !error, ...rest }
}
