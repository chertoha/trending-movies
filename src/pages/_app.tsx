import "../styles/globals.css";
import Layout from "components/Layout";
import { Provider } from "react-redux";
import { store } from "redux/store";

import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default App;
