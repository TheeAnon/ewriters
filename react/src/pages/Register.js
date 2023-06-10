import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function Register() {
  return (
    <div>
      <Header />
      <div className="relative flex flex-col justify-center overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md sm:max-w-lg">
          <h1 className="text-4xl font-bold text-center mb-5">Sign up</h1>
          <form className="space-y-4">
            <div className="form-control w-full">
              <label className="label">First Name</label>
              <input
                required
                type="text"
                name="first_name"
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
