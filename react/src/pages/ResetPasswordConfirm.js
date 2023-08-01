import React, { useState } from "react";
import Header from "../components/Header";
import { redirect } from "react-router-dom";
import { reset_password_confirm } from "../actions/auth";
import { connect } from "react-redux";

function ResetPasswordConfirm({ match, reset_password_confirm }) {
  const [passwordSaved, setPasswordSaved] = useState(false);
  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password: "",
  });

  const { new_password, re_new_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const uid = match.params.uid;
    const token = match.params.token;

    reset_password_confirm(uid, token, new_password, re_new_password);
    setPasswordSaved(true);
  };

  if (passwordSaved) {
    redirect("/");
  }

  return (
    <div>
      <Header />
      <div className="relative flex flex-col justify-center overflow-hidden mt-3">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md sm:max-w-lg">
          <h1 className="text-4xl font-bold text-center mb-5">
            SET NEW PASSWORD
          </h1>
          <form
            autoComplete="off"
            className="space-y-4 pt-10"
            onSubmit={(e) => onSubmit(e)}
          >
            <div className="form-control w-full ">
              <input
                required
                type="password"
                name="new_password"
                value={new_password}
                autoComplete="off"
                onChange={(e) => onChange(e)}
                placeholder="New Password"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full ">
              <input
                required
                type="password"
                name="re_new_password"
                value={re_new_password}
                autoComplete="off"
                onChange={(e) => onChange(e)}
                placeholder="Confirm New Password"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <button className="btn" type="submit">
                SAVE
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

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
