import React, { useState } from "react";
import Header from "../components/Header";
import { reset_password } from "../actions/auth";
import { connect } from "react-redux";

function ResetPassword({ reset_password }) {
  const [linkSent, setLinkSent] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    reset_password(email);
    setLinkSent(true);
  };

  const sentLink = () => (
    <p className="p-5 mt-4">
      A link has been sent to your email address. Follow the link to reset your
      password.
    </p>
  );

  const form = () => (
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
          placeholder="Email address"
          className="input input-bordered w-full"
        />
      </div>
      <div>
        <button className="btn" type="submit">
          Send Link
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
  );

  return (
    <div>
      <Header />
      <div className="relative flex flex-col justify-center overflow-hidden p-4">
        <div className="w-full p-6 m-auto bg-white rounded-md sm:max-w-lg">
          <div className="flex flex-col mb-2">
            <h1 className="text-4xl font-bold text-center mb-5">
              {linkSent ? "Password Reset Link Sent" : "Reset Password"}
            </h1>
            {linkSent ? sentLink() : form()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { reset_password })(ResetPassword);
