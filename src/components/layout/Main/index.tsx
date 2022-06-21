import Navbar from "./Navbar";
import React from "react";

type Props = { children: React.ReactNode; showNavbar: boolean };

const MainLayout = (props: Props) => {
  return (
    <div>
      {props.showNavbar && <Navbar />}
      <div className="main__container">{props.children}</div>
    </div>
  );
};

export default MainLayout;
