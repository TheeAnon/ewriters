import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { faBookmark, faThumbsDown } from "@fortawesome/free-regular-svg-icons";

function Job() {
  return (
    <div className="p-8">
      <div className="">
        <div className="flex">
          <div className="flex-1 align-middle">
            <h1 className="text-lg font-bold cursor-pointer hover:text-slate-500">
              Job Title
            </h1>
          </div>
          <button className="btn btn-circle btn-ghost">
            <FontAwesomeIcon icon={faThumbsDown} size="lg" />
          </button>
          <button className="btn btn-circle btn-ghost">
            <FontAwesomeIcon icon={faBookmark} size="lg" />
          </button>
        </div>
        <p className="pt-2 pb-4 text">
          With us, every project becomes a remarkable success story. Join us
          today, and let's create something extraordinary together!
        </p>
        <div className="flex flex-wrap space-x-1 space-y-1">
          <div className="badge badge-ghost">python</div>
        </div>
      </div>
    </div>
  );
}

export default Job;
