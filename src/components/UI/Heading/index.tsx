import React, { DetailedHTMLProps } from "react";
import "./Heading.scss";
type HeadingProps = {
  props?: any;
  title?: string;
  className?: string;
};
const Heading = ({ props, title, className }: HeadingProps) => {
  return (
    <h4 {...props} className={`heading ${className}`}>
      {title}
    </h4>
  );
};

export default Heading;
