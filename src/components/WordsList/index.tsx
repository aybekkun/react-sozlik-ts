import SearchOffIcon from "@mui/icons-material/SearchOff";
import { IconButton, Skeleton } from "@mui/material";
import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { WORDS_PAGE } from "../../helpers/constants/route";
import useAppDispatch from "../../hooks/useAppDispatch.hook";
import useAppSelector from "../../hooks/useAppSelector.hook";
import { fetchWordsList } from "../../redux/search/asyncActions";
import { setSearchLetter, setSearchListValue, setSearchPage } from "../../redux/search/slice";
import Pagination from "../Pagination";
import Heading from "../UI/Heading";
import "./WordsList.scss";
const WordsList = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { id } = useParams();
  const { y } = useAppSelector((state) => state.scroll);
  const { selectedWord } = useAppSelector((state) => state.words);
  const lang = useAppSelector((state) => state.admin.lang);
  const { wordsList, isWordsListLoading, searchListValue, currentPage, searchLetter, total } = useAppSelector(
    (state) => state.search
  );

  useEffect(() => {
    if (pathname === WORDS_PAGE) {
      dispatch(
        fetchWordsList({
          page: currentPage,
          limit: 36,
          search: "",
          letter: searchLetter.toLowerCase(),
          sortBy: "latin",
        })
      );
    } else {
      dispatch(
        fetchWordsList({
          page: currentPage,
          limit: 36,
          search: selectedWord.latin.slice(0, 3),
          letter: searchLetter.toLowerCase(),
          sortBy: "latin",
        })
      );
    }
  }, [currentPage, searchListValue, searchLetter, id, pathname, selectedWord.latin]);

  const onChangePage = (i: number) => {
    dispatch(setSearchPage(i));
    window.scrollTo(0, y - 100);
  };
  const onClickLink = (str: string) => {
    window.scrollTo(0, y);
    dispatch(setSearchListValue(str.slice(0, 3)));
  };

  const skeleton = (
    <ul className="words__list">
      {[...Array(30)].map((item, i) => (
        <li key={i} className="words__item">
          <Skeleton variant="text" />
        </li>
      ))}
    </ul>
  );

  const wordsListElement =
    wordsList.length > 0 ? (
      <ul className="words__list">
        {wordsList.map((item, i) => (
          <li key={i} className="words__item">
            <Link onClick={() => onClickLink(item.latin)} to={`${WORDS_PAGE}/${item.id}`}>
              {lang ? item.latin : item.kiril}
            </Link>
          </li>
        ))}
      </ul>
    ) : (
      <IconButton onClick={() => dispatch(setSearchLetter(""))}>
        <SearchOffIcon />
      </IconButton>
    );

  return (
    <>
      <Heading
        title={
          pathname === WORDS_PAGE ? (lang ? "Sózler dizimi" : "Сөзлер дизими") : lang ? "Uqsas sózler" : "Уқсас сөзлер"
        }
      />
      {isWordsListLoading && wordsList.length < 1 ? skeleton : wordsListElement}
      <Pagination currentPage={currentPage} total={Math.ceil(total / 36)} onChangePage={onChangePage} />
    </>
  );
};

export default WordsList;
