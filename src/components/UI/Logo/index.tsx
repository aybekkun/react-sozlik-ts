import React from "react";
import { Link, LinkProps } from "react-router-dom";
import logoImg from "../../../assets/img/logo.svg";

type LogoProps = {
  props?: LinkProps;
  classname?: string;
};

const Logo = ({ props, classname = "" }: LogoProps) => {
  return (
    <Link to="/" className={`logo ${classname}`} {...props}>
      <img src={logoImg} alt="" />
    </Link>
  );
};

export default Logo;
