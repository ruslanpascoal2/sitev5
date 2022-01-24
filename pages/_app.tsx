import "../styles/tailwind.scss";
import "../styles/globals.scss";

import type { AppProps } from "next/app";
import { Container, PageLayout } from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Navbar />
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </Container>
  );
}

export default MyApp;
