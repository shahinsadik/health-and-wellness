
import { useContext, useState } from "react";
import LogPic from "../../../assets/SignPic.png";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const location =useLocation()
  console.log(location);
  const [error, setError] = useState();
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate()
  const { crateNewUser } = useContext(AuthContext);

  const handleUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(password)) {
      setError(
        "Minimum 8 characters, at least one uppercase letter, one lowercase letter and one number"
      );
    } else {
      if (email) {
        crateNewUser(email, password).then(() => {
          toast.success("Sign Up Successfully");
          // e.target.reset()
          // navigate(location?.state ? location.state : "/")
          navigate("/", { fromRegister: true });
          })
          .catch((error) => {
            if (error.code === "auth/email-already-in-use") {
              setEmailError("Email is already in use.");
            } else {
              setEmailError(""); }
        });
      }
    }
  };

  return (
    <div>
      <Toaster />
      <div className="hero min-h-screen mt-5">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="lg:mt-20">
            <img className="h-full" src={LogPic} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full  max-w-lg ">
            <form
              onSubmit={handleUser}
              className="card-body border-2 border-violet-400 rounded-2xl ">
              <h1 className="text-3xl font-bold text-center text-[#6c63ff]">
                Sign Up now!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Your full name
                  </span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Your photo link
                  </span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Image ink"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
                <p>{emailError && <p className="text-red-700">{emailError}</p>}</p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  className="input input-bordered"
                  required
                />
                <p className="text-red-700">{error}</p>
              </div>
              <div className="form-control mt-6">
                <button className="mb-2 btn btn-primary bg-[#6c63ff]">
                  Sign Up
                </button>
                <div></div>
                <div className="divider">OR</div>
                <div className="flex gap-4 items-center justify-center mt-2">
                  <Link className="">
                    <AiOutlineGoogle className="text-[#6c63ff] text-4xl"></AiOutlineGoogle>
                  </Link>
                  <Link className="">
                    <AiFillGithub className="text-4xl text-[#6c63ff]"></AiFillGithub>
                  </Link>
                </div>
                <p className=" font-semibold text-center text-[#706F6F] ">
                  Have An Account ?{" "}
                  <Link to="/login" className="text-[#6c63ff]  ">
                    Login Please
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
