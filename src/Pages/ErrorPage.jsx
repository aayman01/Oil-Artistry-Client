import Lottie from "lottie-react";

import Ai from "../assets/Ai.json"
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div>
      <div className="flex h-[450px] justify-center items-center">
        <Lottie className=" w-[400px]" animationData={Ai}></Lottie>
      </div>
      <h2 className="text-center font-bold text-4xl">Page Not Found</h2>
      <Link className="flex justify-center mt-4 font-bold " to="/">
        <button className=" text-white rounded-lg hover:bg-stone-200 hover:text-black font-medium px-5 py-2 bg-[#B81D33]">
          Go to homepage
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
