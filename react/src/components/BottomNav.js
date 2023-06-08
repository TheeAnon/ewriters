import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

function BottomNav() {
  return (
    <div className="btm-nav place-content-center z-50">
      <button className="active">
        <FontAwesomeIcon icon={icon({ name: "home" })} size="lg" />
        <h1>Jobs</h1>
      </button>
      <button>
        <FontAwesomeIcon icon={icon({ name: "pencil" })} size="lg" />
        <h1>Applications</h1>
      </button>
      <button>
        <FontAwesomeIcon icon={icon({ name: "book" })} size="lg" />
        <h1>Contracts</h1>
      </button>
      <button>
        <FontAwesomeIcon icon={icon({ name: "message" })} size="lg" />
        <h1>Messages</h1>
      </button>
      <button>
        <FontAwesomeIcon icon={icon({ name: "bell" })} size="lg" />
        <h1>Notifications</h1>
      </button>
    </div>
  );
}

export default BottomNav;
