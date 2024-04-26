import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { password, email, yourName, photoUrl } = data;
    // console.log(data);
    setError("");

    // password validation

    if (password.length < 6) {
      setError("Password should be atlest 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Your password should contain atleast one capital letter");
      return;
    } else if (!/^(?=.*[a-z]).+$/.test(password)) {
      setError("Your password should contain atleast one small letter");
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: yourName,
          photoURL: photoUrl,
        })
          .then()
          .catch();
        toast.success("Successfully registered!");
        setTimeout(() => navigate("/login"), 1500);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* #eaf7f4 */}
      <h2 className="text-3xl font-bold mt-7 text-center my-7">
        Register your account
      </h2>
      <div className=" lg:w-1/2 md:w-3/4 mx-auto shadow-2xl rounded-lg bg-image bg-cover bg-center mt-12 mb-20">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <p className="label-text text-white text-lg font-medium">
                Name <span className="text-red-600">*</span>{" "}
              </p>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input bg-white "
              {...register("yourName", { required: true })}
            />
            {errors.yourName && (
              <span className="text-red-500 mt-2 font-medium">
                This field is required
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <p className="label-text text-white text-lg font-medium">
                E-mail <span className="text-red-600">*</span>{" "}
              </p>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered bg-white"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 mt-2 font-medium">
                This field is required
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <p className="label-text text-white text-lg font-medium">
                PhotoURL <span className="text-red-600">*</span>{" "}
              </p>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered bg-white"
              {...register("photoUrl", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500 mt-2 font-medium">
                This field is required
              </span>
            )}
          </div>
          <div className="form-control relative">
            <label className="label">
              <p className="label-text text-white text-lg font-medium">
                Password <span className="text-red-600 font-medium">*</span>{" "}
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

            {/* <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label> */}
          </div>
          {error && <p className="text-red-700 text-sm">{error}</p>}
          {errors.password && (
            <span className="text-red-500 mt-2 font-medium">
              This field is required
            </span>
          )}
          <div className="form-control mt-6">
            <button className="btn border-none bg-[#B81D33] hover:bg-white hover:text-[#B81D33] text-lg text-white">
              Register
            </button>
          </div>
          <p className="text-center text-white mt-4 p-5 font-medium">
            Already have an account?
            <Link
              className="text-white font-medium underline decoration-[#B81D33]"
              to="/login"
            >
              {" "}
              Log in
            </Link>{" "}
          </p>
          <Toaster position="top-right" reverseOrder={false} />
        </form>
      </div>
    </div>
  );
};

export default Register;
