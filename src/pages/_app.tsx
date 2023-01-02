import "../styles/globals.css";
import Layout from "components/Layout";
import theme from "utils/theme";
import { Provider } from "react-redux";
import { store } from "redux/store";

import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
