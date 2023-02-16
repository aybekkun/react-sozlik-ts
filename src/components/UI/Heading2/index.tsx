import React, { DetailedHTMLProps } from "react";
import "./Heading2.scss";
type Heading2Props = {
  props?: any;
  title?: string;
  className?: string;
};
const Heading2 = ({ props, title, className = "" }: Heading2Props) => {
  return (
    <h4 {...props} className={`heading2 ${className}`}>
      {title}
    </h4>
  );
};

export default Heading2;
