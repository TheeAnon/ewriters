import React, { useState, useEffect } from "react";
import Header from "../components/Header";

function ResetPassword() {
  return (
    <div>
      <Header />
      <div className="relative flex flex-col justify-center overflow-hidden mt-3">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md sm:max-w-lg">
          <h1 className="text-4xl font-bold text-center mb-5">
            Reset Password
          </h1>
          <form className="space-y-4">
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
            <div>
              <button className="btn" type="submit">
                Send Email
              </button>
            </div>
            <div>
              <a
                href="/login"
                className="text-sm text-gray-600 hover:underline hover:text-blue-600"
              >
                Remembered password? Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
