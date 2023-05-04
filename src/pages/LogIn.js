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
      console.log(result, "result");
      router.push("./InternForm");
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  };

  return (
    <div
      className="flex justify-center items-center cursor-pointer rounded border border-black p-1"
      onClick={handleLogin}
    >
      <Image src={GoogleSvg} width={40} height={40} alt="google" />
      <h1 className="text-2xl text-grey font-bold">SignUp with Google</h1>
    </div>
  );
};

export default LogIn;
