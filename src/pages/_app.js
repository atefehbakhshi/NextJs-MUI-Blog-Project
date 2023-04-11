import Layout from "@/components/layout";
import { ThemeProvider } from "@mui/material";
import "@/styles/globals.css";
import { theme } from "@/theming";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
