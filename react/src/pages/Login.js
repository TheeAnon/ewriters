import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import { login } from "../utils/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [remember_me, setRemember] = useState("");
  const [password, setPassword] = useState("");
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn()) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const resetForm = () => {
    setEmail("");
    setRemember("unchecked");
    setPassword("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await login(email, password);
    if (error) {
      alert(error);
    } else {
      navigate("/");
      resetForm();
    }
  };
  return (
    <div>
      <Header />
      <div className="relative flex flex-col justify-center overflow-hidden mt-3">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md sm:max-w-lg">
          <h1 className="text-4xl font-bold text-center mb-5">Login</h1>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div className="form-control w-full ">
              <label className="label">Email</label>
              <input
                required
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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
                  value={remember_me}
                  onChange={(e) => setRemember(e.target.value)}
                  checked="checked"
                  className="checkbox"
                />
              </label>
            </div>
            <div>
              <a
                href="/forgot-password"
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

export default Login;
