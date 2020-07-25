import axios from 'axios';
import { useApiHandler, fetcher } from '@/actions';
import useSwr from 'swr';


const createTractor = (data) =>  axios.post('/api/v1/tractors', data)
//const updateTractor = (id, data) =>  axios.patch(`/api/v1/parcels/${id}`, data)
//const deleteTractor = (id) =>  axios.delete(`/api/v1/parcels/${id}`)

export const useCreateTractor = () => useApiHandler(createTractor);
//export const useUpdateTractor = () => useApiHandler(updateTractor);
//export const useDeleteTractor = () => useApiHandler(deleteTractor);

export const useGetTractors = (id) => {
  const {data, error, ...rest} =  useSwr( id ? `/api/v1/tractors/${id}` : null, fetcher);
  return { data, error, loading: !data && !error, ...rest }
}
