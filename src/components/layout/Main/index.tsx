import Navbar from "./Navbar";
import React from "react";

type Props = { children: React.ReactNode; showNavbar: boolean };

const MainLayout = (props: Props) => {
  return (
    <div>
      {props.showNavbar && (
        <Navbar className={props.showNavbar ? "navbar__container mt-8" : ""} />
      )}
      <div className="main__container">{props.children}</div>
      <div className="my-20"></div>
    </div>
  );
};

export default MainLayout;
