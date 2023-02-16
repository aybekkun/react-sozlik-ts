import { Outlet, useLocation } from "react-router-dom";
import Heading from "../../components/UI/Heading";
import Wrapper from "../../components/UI/Wrapper";
import WordsList from "../../components/WordsList";

import "./Words.scss";

const Words = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="words">
          <Outlet />

          <WordsList />
        </div>
      </div>
    </Wrapper>
  );
};

export default Words;
