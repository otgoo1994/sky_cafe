import { useEffect, useState, Suspense } from 'react';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter } from 'react-router-dom';
import Routes from '~/routes/Router';
import { useApiError } from './error/useApiError';
import { useNetworkOffline } from './error/useNetworkOffline';

import { LoaderProvider } from '~/shared/contexts';
import { Loading } from '~/shared/components';

const App = () => {
  useEffect(() => {
    document.title = import.meta.env.VITE_WINDOW_TITLE;
  }, []);
  const isNetworkOffline = useNetworkOffline();
  const { handleError } = useApiError();
  (window as any).global = window;
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        mutations: {
          onError: handleError,
          networkMode: 'always',
        },
        queries: {
          networkMode: 'always',
        },
      },
      queryCache: new QueryCache({
        onError: handleError,
      }),
    }),
  );

  useEffect(() => {}, []);
  return (
    <LoaderProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <Routes />
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    </LoaderProvider>
  );
};

export default App;
