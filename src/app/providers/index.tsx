import { AppProvider } from '@/app/providers/appProvider';
import { queryClient } from '@/services/api';

import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './modalProvider';

const withProvider = <P extends object>(Component: React.ComponentType<P>) => {
  const WithProvider: React.FC<P> = (props) => (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <ModalProvider>
          <BrowserRouter>
            <Component {...props} />
          </BrowserRouter>
        </ModalProvider>
      </AppProvider>
    </QueryClientProvider>
  );

  return WithProvider;
};

export default withProvider;
