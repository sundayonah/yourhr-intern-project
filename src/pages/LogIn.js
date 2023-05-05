import { useState } from "react";
import { useRouter } from "next/router";
import { auth, provider } from "../firebase"; // importing Firebase authentication and Google provider
import Image from "next/image"; // importing Next.js Image component
import GoogleSvg from "../images/google.svg"; // importing Google logo

const LogIn = () => {
  const [loading, setLoading] = useState(false); // defining a state for loading
  const router = useRouter(); // using Next.js useRouter hook to navigate to other pages

  const handleLogin = async () => {
    setLoading(true); // setting the loading state to true
    try {
      const result = await auth.signInWithPopup(provider); // sign in with Google provider and wait for the result
      router.push("./InternForm"); // redirect the user to the InternForm page on successful login
    } catch (error) {
      // handle any errors
    }
    setLoading(false); // setting the loading state to false
  };

  // rendering the Google sign-in button
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
