import React from "react";
import Alphabet from "./Alphabet";
import PopularSearch from "./PopularSearch";
import "./Popular.scss";
const Popular = () => {
  return (
    <div className="popular">
      <div className="container">
        <PopularSearch />
        <Alphabet />
      </div>
    </div>
  );
};

export default Popular;
