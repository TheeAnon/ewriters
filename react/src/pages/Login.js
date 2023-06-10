import React, { useState } from "react";
import Header from "../components/Header";
import { login } from "../actions/auth";

function Login({ login }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div>
      <Header />
      <div className="relative flex flex-col justify-center overflow-hidden mt-3">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md sm:max-w-lg">
          <h1 className="text-4xl font-bold text-center mb-5">Login</h1>
          <form className="space-y-4" onSubmit={(e) => onSubmit(e)}>
            <div className="form-control w-full ">
              <label className="label">Email</label>
              <input
                required
                type="email"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                placeholder="Email address"
                className="input input-bordered w-full"
              />
              <label className="label-text-alt text-red-500 hidden">
                Error
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">Password</label>
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
              <label className="label-text-alt text-red-500 hidden">
                Error
              </label>
            </div>
            <div className="w-1/2">
              <label className="label cursor-pointer">
                <span className="label-text">Remember me</span>
                <input
                  type="checkbox"
                  name="remember_me"
                  checked="checked"
                  className="checkbox"
                />
              </label>
            </div>
            <div>
              <a
                href="/reset-password"
                className="text-sm text-gray-600 hover:underline hover:text-blue-600"
              >
                Forgot password?
              </a>
            </div>
            <div>
              <button className="btn" type="submit">
                Login
              </button>
            </div>
            <div>
              <a
                href="/register"
                className="text-sm text-gray-600 hover:underline hover:text-blue-600"
              >
                Don't have an account? Sign up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});

export default connect(null, { login })(Login);
