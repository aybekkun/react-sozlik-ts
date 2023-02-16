import React from "react";
type WrapperProps = {
  children: React.ReactNode | React.ReactNode[] | JSX.Element;
};
const Wrapper = ({ children }: WrapperProps) => {
  return <div className="wrapper__page">{children}</div>;
};

export default Wrapper;
