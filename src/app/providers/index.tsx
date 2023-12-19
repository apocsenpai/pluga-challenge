import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import { queryClient } from '@/services/api';
import React from 'react';

const withProvider = <P extends object>(Component: React.ComponentType<P>) => {
  const WithProvider: React.FC<P> = (props) => (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Component {...props} />
      </BrowserRouter>
    </QueryClientProvider>
  );

  return WithProvider;
};

export default withProvider;
