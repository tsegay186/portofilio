import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
const AppFooter = () => {
  return (
    <div className="flex w-full  px-10 py-12 items-center justify-evenly  ">
      <div className="flex flex-col">
        <div className="flex gap-2 pb-2">
          <FontAwesomeIcon icon={faLocationDot} size="lg" className="text-slate-900"></FontAwesomeIcon>
          <address>Addis Ababa, Ethiopia</address>
        </div>
        <div className="flex gap-2 pb-2">
          <FontAwesomeIcon icon={faPhone} size="lg" className="text-slate-900"></FontAwesomeIcon>
          <p>+251904282801</p>
        </div>
        <div className="flex gap-2 pb-2">
          <FontAwesomeIcon icon={faEnvelope} size="lg" className="text-slate-900"></FontAwesomeIcon>
          <p>tsegay.berhanu186@gmail.com</p>
        </div>
      </div>
      <div className="flex gap-4 flex-col md:flex-row py-4  ">
        <Link href="https://github.com/tsegay186" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="lg" className="text-slate-900"></FontAwesomeIcon>
        </Link>
        <Link href="https://www.linkedin.com/in/izona" target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" className="text-slate-900"></FontAwesomeIcon>
        </Link>
        <Link href="https://t.me/F9tune" target="_blank">
          <FontAwesomeIcon icon={faTelegram} size="lg" className="text-slate-900"></FontAwesomeIcon>
        </Link>
      </div>
    </div>
  );
};

export default AppFooter;
