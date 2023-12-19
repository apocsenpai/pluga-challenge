import api from '@/services/api';

const getAll = () => api.get('/ferramentas_search.json');

export default { getAll };
