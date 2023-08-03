import React, { useState } from "react";
import Header from "../components/Header";
import { signup } from "../actions/auth";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import googleLogo from "../images/google.png";

function Signup({ signup, isAuthenticated }) {
  const error = useSelector((state) => state.auth.error);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    re_password: "",
  });

  const { name, phone, email, password, re_password } = formData;

  const toTitleCase = (str) => {
    return str.replace(/\b\w+/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{6,}$/;
    if (!name.trim().includes(" ") || name.length < 4) {
      setNameErr("Please enter your full name.");
    } else {
      const [first_name, ...last_name] = name.trim().split(" ");
      if (phone.trim().length < 9 || phone.trim().length > 12) {
        setPhoneErr("Please enter a valid phone number.");
      } else if (emailRegex.test(email.trim())) {
        phone.trim().length < 11
          ? setPhoneNumber("254" + phone.trim().replace(/^0+/, ""))
          : setPhoneNumber("254" + phone.trim().replace(/^0+/, ""));

        if (passwordRegex.test(password)) {
          if (password === re_password) {
            signup(
              email,
              phoneNumber,
              password,
              re_password,
              toTitleCase(first_name),
              toTitleCase(last_name)
            );
            setPassErr("");
          } else {
            setPassErr("Your passwords do not match");
          }
        } else {
          setPassErr(
            "Password must be at least 6 characters long and contain at least one number and one uppercase letter."
          );
        }
      } else {
        setEmailErr("Please enter a valid email address.");
      }
    }
  };

  const continueWithGoogle = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=http://127.0.0.1:8000`
      )
      .then((res) => {
        window.location.replace(res.data.authorization_url);
      });
  };

  const navigate = useNavigate();
  if (isAuthenticated) {
    navigate("/", { replace: true });
  }
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
          <form
            autoComplete="off"
            className="space-y-4 pt-10 pb-5"
            onSubmit={(e) => onSubmit(e)}
          >
            <div className="form-control w-full">
              <input
                required
                type="text"
                name="name"
                value={name}
                autoComplete="off"
                onChange={(e) => onChange(e)}
                placeholder="Full Name"
                className="input input-bordered w-full"
              />
              <label className="label-text-alt text-red-500">{nameErr}</label>
            </div>
            <div className="form-control w-full">
              <input
                required
                type="number"
                name="phone"
                value={phone}
                minLength={9}
                maxLength={12}
                autoComplete="off"
                onChange={(e) => onChange(e)}
                placeholder="Phone number"
                className="input input-bordered w-full"
              />
              <label className="label-text-alt text-red-500">{phoneErr}</label>
            </div>
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
              <label className="label-text-alt text-red-500">{emailErr}</label>
            </div>
            <div className="form-control w-full">
              <input
                required
                type="password"
                name="password"
                value={password}
                autoComplete="off"
                onChange={(e) => onChange(e)}
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
                value={re_password}
                autoComplete="off"
                onChange={(e) => onChange(e)}
                placeholder="Confirm Password"
                className="input input-bordered w-full"
              />
              <label className="label-text-alt text-red-500">{passErr}</label>
            </div>
            {error && (
              <label className="label-text-alt text-red-500">{error}</label>
            )}
            <div>
              <button className="mt-4 btn w-full text-lg" type="submit">
                Signup
              </button>
            </div>
          </form>
          <div className="divider">OR CONTINUE WITH</div>
          <div className="flex flex-row space-x-2 w-full justify-center mt-3">
            <button
              className="btn btn-square btn-outline p-1"
              onClick={continueWithGoogle}
            >
              <img src={googleLogo} alt="google" />
            </button>
            <button
              className="btn btn-square btn-outline p-1"
              onClick={continueWithGoogle}
            >
              <img src={googleLogo} alt="google" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(Signup);
