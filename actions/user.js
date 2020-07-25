import useSwr from 'swr';
import { fetcher } from './index'

export const useGetUser = () => {
  const {data, error, ...rest} =  useSwr('/api/v1/user/details', fetcher);
  return { data, error, loading: !data && !error, ...rest }
}
