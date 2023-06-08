import React from "react";
import defaultAvatar from "../images/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          eWriters
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full"
        />
      </div>
      <div className="navbar-end">
        <a href="/login" className="btn btn-md btn-ghost normal-case text-xl">
          Login
        </a>
        <a href="/register" className="btn btn-sm md:btn-md">
          Get started
        </a>
        <button className="btn btn-ghost btn-circle lg:hidden">
          <FontAwesomeIcon icon={icon({ name: "search" })} size="lg" />
        </button>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={defaultAvatar} alt="Profile pic" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="saved-jobs">
                <FontAwesomeIcon icon={icon({ name: "heart" })} size="lg" />
                Saved jobs
              </a>
            </li>
            <li>
              <a href="/settings">
                <FontAwesomeIcon icon={icon({ name: "gear" })} size="lg" />
                Settings
              </a>
            </li>
            <li>
              <a href="/logout">
                <FontAwesomeIcon
                  icon={icon({ name: "arrow-right" })}
                  size="lg"
                />
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
