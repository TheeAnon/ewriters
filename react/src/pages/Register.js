import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function Register() {
  return (
    <div>
      <Header />
      <div className="relative flex flex-col justify-center overflow-hidden p-4">
        <div className="w-full p-6 m-auto bg-white rounded-md sm:max-w-lg">
          <div className="flex flex-col mb-2">
            <div className="flex p-0">
              <a
                href="/login"
                className="btn btn-md rounded-none btn-ghost normal-case text-2xl font-bold text-center flex-1 hover:bg-white text-rose-500"
              >
                Login
              </a>
              <a
                href
                className="btn btn-md btn-ghost normal-case text-2xl font-bold text-center flex-1 hover:bg-white"
              >
                Sign up
              </a>
            </div>
            <div className="w-full">
              <progress className="progress w-1/2 float-right" value={50} />
            </div>
          </div>
          <form className="space-y-4 pt-10">
            <div className="form-control w-full">
              <input
                required
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <input
                required
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full ">
              <input
                required
                type="email"
                name="email"
                placeholder="Email address"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <input
                required
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered w-full"
                minLength={6}
              />
            </div>
            <div className="form-control w-full">
              <input
                required
                type="password"
                name="re_password"
                placeholder="Confirm password"
                className="input input-bordered w-full"
                minLength={6}
              />
            </div>
            <div>
              <button className="mt-4 btn w-full text-lg" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
