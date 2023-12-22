import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";

import { useState } from "react";

const Login = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const from = location.state?.from?.pathname || "/";
  console.log(from);
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  return (
    <div className="flex justify-center items-center py-20">
      <div className="flex flex-col md:min-w-[500px] max-w-xl p-7  rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl text-[#1c4456] font-bold">Log In</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
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
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#1c4456] bg-gray-200 text-gray-900"
              />
              <button className="text-xs hover:underline hover:text-[#1c4456] text-gray-400">
                Forgot password?
              </button>
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

        <div className="flex items-center pt-3 space-x-1"></div>

        <p className="px-6 pt-3 text-sm text-center text-gray-400">
          Don’t have an account?
          <Link
            to="/signUp"
            className="hover:underline hover:text-[#1c4456] text-gray-600"
          >
            Create Account
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
