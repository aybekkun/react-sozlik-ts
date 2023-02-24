import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import { getLang } from "../../helpers/convertor/convertor";
import useAppDispatch from "../../hooks/useAppDispatch.hook";
import useAppSelector from "../../hooks/useAppSelector.hook";
import { fetchSingleWord } from "../../redux/words/asyncActions";

const WordsInfo = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.search);
  const { isWordLoading, selectedWord } = useAppSelector((state) => state.words);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(fetchSingleWord({ id: id }));
    }
  }, [id]);

  return (
    <div className="words__info">
      {categories.length > 0 && (
        <ul className="categories">
          {categories.map((item, i) => (
            <li key={i} className={`categories__item ${item.id === selectedWord.categories[0].id ? "active" : ""}`}>
              {getLang() ? item.latin : item.kiril}
            </li>
          ))}
        </ul>
      )}
      <Card
        title={getLang() ? selectedWord.latin : selectedWord.kiril}
        description={getLang() ? selectedWord.description_latin : selectedWord.description_kiril}
        audio={selectedWord.audio}
      />
    </div>
  );
};

export default WordsInfo;
