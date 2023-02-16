import React from "react";
import { Link, useLocation } from "react-router-dom";
import { WORDS_PAGE } from "../../helpers/constants/route";
import Pagination from "../Pagination";
import Heading from "../UI/Heading";
import "./WordsList.scss";
const WordsList = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Heading title={pathname === WORDS_PAGE ? "So’zlar ro’yxati" : "O’xshash so’zlar"} />
      <ul className="words__list">
        {[...Array(36)].map((item, i) => (
          <li key={i} className="words__item">
            <Link to={"/"}>Suspendisse{i}</Link>
          </li>
        ))}
      </ul>
      <Pagination />
    </>
  );
};

export default WordsList;
