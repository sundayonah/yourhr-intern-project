import { useState } from "react";
import { useRouter } from "next/router";
import { auth, provider } from "../firebase"; // importing Firebase authentication and Google provider
import Image from "next/image"; // importing Next.js Image component
import GoogleSvg from "../images/google.svg"; // importing Google logo
import LogInLogo from "../images/logInLogo.svg";

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
    <div className="flex flex-col justify-center items-center ">
      <Image src={LogInLogo} alt="form" width={500} height={500} />
      <button
        className="flex justify-center items-center rounded border border-black py-1 px-7 md:px-4 mt-4"
        onClick={handleLogin}
      >
        <Image src={GoogleSvg} alt="google" className="w-8 h-8 mr-4" />
        <h1 className="text-xl font-bold md:text-2xl whitespace-nowrap">
          Continue with Google
        </h1>
      </button>
    </div>
  );
};

export default LogIn;
