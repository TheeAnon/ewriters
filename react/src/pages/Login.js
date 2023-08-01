import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { login } from "../actions/auth";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login({ login, isAuthenticated }) {
  const error = useSelector((state) => state.error);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password, remember_me } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);
  return (
    <div>
      <Header />
      <div className="relative flex flex-col justify-center overflow-hidden p-4">
        <div className="w-full p-6 m-auto bg-white rounded-md sm:max-w-lg">
          <div className="flex flex-col mb-2">
            <div className="flex p-0">
              <a
                href
                className="btn btn-md rounded-none btn-ghost normal-case text-2xl font-bold text-center flex-1 hover:bg-white"
              >
                Login
              </a>
              <a
                href="/signup"
                className="btn btn-md btn-ghost normal-case text-2xl font-bold text-center flex-1 text-rose-500 hover:bg-white"
              >
                Sign up
              </a>
            </div>
            <progress className="progress w-1/2" value={50} />
          </div>
          <form
            autoComplete="off"
            className="space-y-4 pt-10"
            onSubmit={(e) => onSubmit(e)}
          >
            <div className="form-control w-full ">
              <input
                required
                type="email"
                name="email"
                value={email}
                autoComplete="off"
                onChange={(e) => onChange(e)}
                placeholder="Email address or Phone number"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <input
                required
                type="password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                placeholder="Enter password"
                className="input input-bordered w-full"
                minLength={6}
              />
            </div>
            <label className="label-text-alt text-red-500">{error}</label>
            <div className="flex">
              <div className="flex flex-1">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    name="remember_me"
                    onChange={(e) => onChange(e)}
                    value={remember_me}
                    className="checkbox mr-4"
                  />
                  <span className="label-text">Remember me</span>
                </label>
              </div>
              <span>
                <a
                  href="/reset-password"
                  className="text-sm text-gray-600 hover:underline hover:text-blue-600"
                >
                  Forgot password?
                </a>
              </span>
            </div>
            <div>
              <button className="btn w-full text-lg" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
