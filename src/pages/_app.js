import "@/styles/globals.css";
import { NotificationProvider } from "web3uikit";

export default function App({ Component, pageProps }) {
  return (
    <NotificationProvider>
      <Component {...pageProps} />
    </NotificationProvider>
  );
}
