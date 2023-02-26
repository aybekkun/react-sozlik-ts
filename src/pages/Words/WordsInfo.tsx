import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import useAppDispatch from "../../hooks/useAppDispatch.hook";
import useAppSelector from "../../hooks/useAppSelector.hook";
import { fetchSingleWord } from "../../redux/words/asyncActions";

const WordsInfo = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.search);
  const { selectedWord } = useAppSelector((state) => state.words);
  const lang = useAppSelector((state) => state.admin.lang);
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
              {lang? item.latin : item.kiril}
            </li>
          ))}
        </ul>
      )}
      <Card
        title={lang? selectedWord.latin : selectedWord.kiril}
        description={lang ? selectedWord.description_latin : selectedWord.description_kiril}
        audio={selectedWord.audio}
        synonyms={selectedWord.synonyms}
        antonyms={selectedWord.antonyms}
      />
    </div>
  );
};

export default WordsInfo;
