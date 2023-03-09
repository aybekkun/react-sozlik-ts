import Wrapper from "../../components/UI/Wrapper";
import NewWordsList from "../../components/WordsList/NewWordsList";

import "./Words.scss";

const NewWords = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="words">
          <NewWordsList />
        </div>
      </div>
    </Wrapper>
  );
};

export default NewWords;
