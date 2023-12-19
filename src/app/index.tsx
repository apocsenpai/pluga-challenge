import Routing from '@/app/routes';
import { GlobalStyle } from '@/app/styles';
import withProvider from '@/app/providers';

const AppWithProviders = withProvider(Routing);

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWithProviders />
    </>
  );
}

export default App;
