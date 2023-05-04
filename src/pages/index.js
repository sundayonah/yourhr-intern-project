import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import firebase from "firebase/compat/app";
import { InternForm } from "./InternForm";
import LogIn from "./LogIn";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  // Check if user is authenticated
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setAuthenticated(true);
      router.push("./InternForm");
    } else {
      setAuthenticated(false);
    }
  });

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {authenticated ? <InternForm /> : <LogIn />}
    </main>
  );
}
