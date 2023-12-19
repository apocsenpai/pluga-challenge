import axios from 'axios';
import { QueryClient } from 'react-query';
import { REFETCH_INTERVAL } from '@/utils';

const instance = axios.create({
  baseURL: 'https://pluga.co',
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: REFETCH_INTERVAL,
    },
  },
});

export default instance;
