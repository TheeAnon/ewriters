import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { verify } from "../actions/auth";
import { connect } from "react-redux";

function VerifyEmail({ verify }) {
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();
  const [uid, token] = useParams();

  const verifyAccount = (e) => {
    verify(uid, token);
    setVerified(true);
  };

  if (verified) {
    navigate("/", { replace: true });
  }
  return (
    <div>
      <div className="relative flex flex-col justify-center overflow-hidden p-4 mt-20">
        <h1 className="normal-case text-2xl font-bold text-center ">
          Verify Your Account
        </h1>
        <a
          href
          onClick={verifyAccount}
          className="btn btn-md rounded-none normal-case text-2xl font-bold text-center hover:bg-white mt-20"
        >
          Verify
        </a>
      </div>
    </div>
  );
}

export default connect(null, { verify })(VerifyEmail);
