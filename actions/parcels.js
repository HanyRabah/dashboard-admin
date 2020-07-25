import axios from 'axios';
import { useApiHandler, fetcher } from '@/actions';
import useSwr from 'swr';


const createParcel = (data) =>  axios.post('/api/v1/parcels', data)
//const updateParcel = (id, data) =>  axios.patch(`/api/v1/parcels/${id}`, data)
//const deleteParcel = (id) =>  axios.delete(`/api/v1/parcels/${id}`)

export const useCreateParcel = () => useApiHandler(createParcel);
//export const useUpdateParcel = () => useApiHandler(updateParcel);
//export const useDeleteParcel = () => useApiHandler(deleteParcel);

export const useGetParcels = (id) => {
  const {data, error, ...rest} =  useSwr( id ? `/api/v1/parcels/${id}` : null, fetcher);
  return { data, error, loading: !data && !error, ...rest }
}
