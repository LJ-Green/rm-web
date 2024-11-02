import React from "react";
import { IconMenu2 } from "@tabler/icons-react";
import NavLogo from "../assets/nav-logo.png";

function nav() {
  return (
    <div className="nav-container">
      <div>
        <img src={NavLogo} alt="RM Services" />
        {/* <IconMenu2 stroke={2} /> */}
      </div>
    </div>
  );
}

export default nav;
