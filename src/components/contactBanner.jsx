import React from "react";
import { IconMail, IconPhone } from "@tabler/icons-react";

function contactBanner() {
  return (
    <div className="contact-banner-container">
      <div className="contact-buttons-container">
        <div>
          <i>
            <IconPhone stroke={2} color="#f7ff00" size={30} />
          </i>
          <span>+44 00000 000000</span>
        </div>
        <div>
          <i>
            <IconMail stroke={2} color="#f7ff00" size={30} />
          </i>
          <span>someone@live.com</span>
        </div>
      </div>
      <p>Get a Free Quote Today!</p>
    </div>
  );
}

export default contactBanner;
