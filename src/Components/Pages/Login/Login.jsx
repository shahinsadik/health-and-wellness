import { useContext } from "react";
import LogPic from "../../../assets/LogPic.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const { signInGoogle, signInUser, user } = useContext(AuthContext);
  
  

  const handleSignInUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success("Login Successfully");
        navigate(location.state ? location?.state : "/", { fromLogin: true })
        // e.target.reset()
      })
      .catch(() => {
        toast.error("Invalid email or passWord")
      });
  };

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then(() => {
        toast.success("Login Successfully")
        navigate(location?.state ? location?.state : "/", { fromLogin: true })
      })
      .catch(() => {
        toast.error("Invalid email or passWord")
      });
  };
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="">
            <img className="" src={LogPic} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full  max-w-lg ">
            <form
              onSubmit={handleSignInUser}
              className="card-body border-2 border-violet-400 rounded-2xl">
              <h1 className="text-3xl font-bold text-center text-[#6c63ff]">
                Login now!
              </h1>
              <div className="form-control mt-5">
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
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-[#6c63ff]">Login</button>{" "}
                <div className="divider">OR</div>
                <div className="flex gap-4 items-center justify-center mt-2">
                  <Link onClick={handleGoogleSignIn} className="" >
                    <AiOutlineGoogle className="text-center text-4xl text-[#6c63ff]"></AiOutlineGoogle>
                  </Link>
                  <Link className="text-[#6c63ff] " to="/login">
                    <AiFillGithub className="text-4xl"></AiFillGithub>
                  </Link>
                </div>
                <p className="my-2 font-semibold text-center text-[#706F6F]">
                  Do not have An Account ?{" "}
                  <Link to="/register" className="text-[#6c63ff] ">
                    Sign Up Now
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
