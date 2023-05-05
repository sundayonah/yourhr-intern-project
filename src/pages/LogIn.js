import { useState } from "react";
import { useRouter } from "next/router";
import { auth, provider } from "../firebase";
import Image from "next/image";
import GoogleSvg from "../images/google.svg";

const LogIn = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const result = await auth.signInWithPopup(provider);
      // Redirect the user to the dashboard page
      router.push("./InternForm");
    } catch (error) {
    }
    setLoading(false);
  };

  return (
    <div
      className="flex justify-between items-center cursor-pointer rounded border border-black py-1 px-7 md:px-4"
      onClick={handleLogin}
    >
      <Image src={GoogleSvg} width={40} height={40} alt="google" />
      <h1 className="text-1xl text-grey font-bold md:text-2xl px-4 whitespace-nowrap">
        Continue with Google
      </h1>
    </div>
  );
};

export default LogIn;
