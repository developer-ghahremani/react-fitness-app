import { Link, useLocation } from "react-router-dom";

import LOGO from "./../../../assets/images/exercise-logo.png";
import React from "react";
import { pageNames } from "../../../constant";

const Navbar = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="flex justify-between items-center">
      <img src={LOGO} className="w-14 h-14" alt="" />
      <div className="flex">
        <Link
          className={`mx-4 ${
            pathname === pageNames.home ? "border-b-2 border-red-900" : ""
          }`}
          to={pageNames.home}>
          home
        </Link>
        <Link
          className={`mx-4 ${
            pathname === pageNames.exercises ? "border-b-2 border-red-900" : ""
          }`}
          to={pageNames.exercises}>
          exercise
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
