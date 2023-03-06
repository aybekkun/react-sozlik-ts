import React from "react";
import "./Heading.scss";
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title?: string;
  className?: string;
}
const Heading = ({ title, className, ...props }: HeadingProps) => {
  return (
    <h4 {...props} className={`heading ${className}`}>
      {title}
    </h4>
  );
};

export default Heading;
