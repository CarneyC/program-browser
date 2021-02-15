import { useApollo } from '../hooks/apollo-client';
import { ApolloProvider } from '@apollo/client';

import '../styles/globals.css';
import 'fontsource-roboto';

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
