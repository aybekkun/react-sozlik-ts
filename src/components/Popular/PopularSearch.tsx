import React from "react";
import { Link } from "react-router-dom";
import Heading from "../UI/Heading";

const PopularSearch = () => {
  return (
    <div className="popular__search">
      <Heading title="Ommabop qidiruvlar" />
      <p className="popular__subtitle">Qoraqalpoq tili lug’ati</p>
      <ul className="popular__list">
        {[...Array(12)].map((item, i) => (
          <li className="popular__item" key={i}>
            <Link to={"/"}>Argue {i+1}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularSearch;
