import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { register } from "../utils/auth";

function Register() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn()) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await register(first_name, last_name, email, password);
    if (error) {
      alert(JSON.stringify(error));
    } else {
      navigate("/");
      resetForm();
    }
  };

  return (
    <div>
      <Header />
      <div className="relative flex flex-col justify-center overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md sm:max-w-lg">
          <h1 className="text-4xl font-bold text-center mb-5">Sign up</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="form-control w-full">
              <label className="label">First Name</label>
              <input
                required
                type="text"
                name="first_name"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter First Name"
                className="input input-bordered w-full"
              />
              <label className="label-text-alt text-red-500 hidden">
                Error
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">Last Name</label>
              <input
                required
                type="text"
                name="last_name"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter Last Name"
                className="input input-bordered w-full"
              />
              <label className="label-text-alt text-red-500 hidden">
                Error
              </label>
            </div>
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
              <label className="label-text-alt">
                Atleast 6 characters long
              </label>
              <label className="label-text-alt text-red-500 hidden">
                Error
              </label>
            </div>
            <div>
              <button className="btn" type="submit">
                Register
              </button>
            </div>
            <div>
              <a
                href="/login"
                className="text-sm text-gray-600 hover:underline hover:text-blue-600"
              >
                Already have an account? Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
