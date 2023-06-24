import { UsernameContextProvider } from "@/context/UsernameContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <UsernameContextProvider>
      <Component {...pageProps} />
    </UsernameContextProvider>
  );
}
