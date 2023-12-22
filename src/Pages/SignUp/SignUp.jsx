import { Link, useLocation, useNavigate } from "react-router-dom";
import { PiGoogleLogoBold } from "react-icons/pi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { imageUpload } from "../../Hooks/utilis";
const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    console.log(name, email, password);

    try {
      // Upload the image
      const imageData = await imageUpload(image);
      const result = await createUser(email, password);
      console.log(result);
      if (result?.user?.email) {
        setLoading(false);
      }
      await updateUserProfile(name, imageData?.data?.display_url);
      navigate("/");
      toast.success("Create user successfully");
    } catch (e) {
      setLoading(false);
      toast.error(e?.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      console.log(result);
      navigate(from, { replace: true });
      toast.success("Login successfully");
    } catch (e) {
      toast.error(e?.message);
    }
  };

  return (
    <div className="flex justify-center items-center py-20">
      <div className="flex flex-col md:min-w-[500px] max-w-lg p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl text-[#1c4456] font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to StayVista</p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#1c4456] bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#1c4456] bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <div className="mb-4 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="new-password"
                  id="password"
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#1c4456] bg-gray-200 text-gray-900"
                />
                <span
                  className="absolute top-[14px] right-4"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#1c4456] w-full rounded-md transform font-semibold duration-100 hover:bg-[#316178] py-3 text-white"
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="flex mt-3 justify-center transform duration-300 w-full items-center py-3 px-3 border  border-gray-300 rounded-md cursor-pointer  hover:text-white hover:bg-[#1c4456]"
        >
          <PiGoogleLogoBold size={20} />

          <p className="font-medium">Continue with Google</p>
        </button>
        <p className="px-6 mt-3 text-sm text-center text-gray-400">
          Have an account?
          <Link
            to="/login"
            className="hover:underline hover:text-[#1c4456] text-gray-600"
          >
            Log In
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
