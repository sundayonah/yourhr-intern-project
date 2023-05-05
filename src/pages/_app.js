import "@/styles/globals.css";
// Importing NotificationProvider from web3uikit library
import { NotificationProvider } from "web3uikit";

// Defining App component and passing in Component and pageProps as props
export default function App({ Component, pageProps }) {
  // Rendering the NotificationProvider component and passing the Component and pageProps as children
  return (
    <NotificationProvider>
      <Component {...pageProps} />
    </NotificationProvider>
  );
}
