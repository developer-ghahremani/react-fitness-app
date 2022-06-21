import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<{}> {}

const IButton = (props: Props) => {
  return <button {...props} />;
};

export default IButton;
