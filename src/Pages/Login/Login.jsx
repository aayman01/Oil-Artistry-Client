import { FcGoogle } from "react-icons/fc";
import "./Login.css";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useState } from "react";




const Login = () => {


  const [showPassword, setShowPassword] = useState(false);


    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();


    const onSubmit = (data) => {
        // const {email, password} = data;
        console.log(data)

    };


    return (
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mt-7 text-center my-7">
          Login your account
        </h2>
        <div className=" lg:w-1/2 md:w-3/4 mx-auto shadow-2xl rounded-lg bg-image bg-cover mt-12 mb-20">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <p className="label-text text-lg font-medium">
                  E-mail <span className="text-red-600">*</span>{" "}
                </p>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered bg-white"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500 mt-2 font-medium">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control relative">
              <label className="label">
                <p className="label-text text-lg font-medium">
                  Password <span className="text-red-600">*</span>{" "}
                </p>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered bg-white"
                {...register("password", { required: true })}
              />
              <span
                className="absolute bottom-4 right-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye />}
              </span>
              {errors.password && (
                <span className="text-red-500 mt-2 font-medium">
                  This field is required
                </span>
              )}
              {/* <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label> */}
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#B81D33] hover:bg-white hover:text-[#B81D33] border-none text-lg text-white">
                Login
              </button>
            </div>
          </form>
          <p className="text-center text-white mb-4 font-medium">
            -Or login with-
          </p>
          <div className="flex text-2xl items-center gap-3 justify-center">
            <button>
              <FcGoogle />
            </button>
            <button>
              <FaGithub />
            </button>
          </div>
          <p className="text-center text-white mt-4 pb-10 font-medium">
            Do not have an account?
            <Link
              className="text-white font-medium underline decoration-[#B81D33]"
              to="/register"
            >
              {" "}
              Register
            </Link>{" "}
          </p>
          <Toaster position="top-right" reverseOrder={false} />
        </div>
      </div>
    );
};

export default Login;