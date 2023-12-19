import api from '@/services/api';

export interface IApp {
  app_id: string;
  name: string;
  color: string;
  icon: string;
  link: string;
}

const getAll = (): Promise<IApp[]> =>
  api.get('/ferramentas_search.json').then((res) => res.data);

export default { getAll };
