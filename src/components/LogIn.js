import Image from "next/image";
import GoogleSvg from "../images/google.svg";

const LogIn = () => {
  return (
    <div className="flex justify-center items-center cursor-pointer rounded border border-black p-1 ">
      <Image src={GoogleSvg} width={40} height={40} alt="google" />
      <h1 className=" text-2xl text-grey font-bold">SignUp with Google</h1>
    </div>
  );
};
export default LogIn;
