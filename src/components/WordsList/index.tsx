import { IconButton, Skeleton } from "@mui/material";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { WORDS_PAGE } from "../../helpers/constants/route";
import { getLang } from "../../helpers/convertor/convertor";
import useAppDispatch from "../../hooks/useAppDispatch.hook";
import useAppSelector from "../../hooks/useAppSelector.hook";
import { fetchWordsList } from "../../redux/search/asyncActions";
import { setSearchLetter, setSearchListValue, setSearchPage } from "../../redux/search/slice";
import Pagination from "../Pagination";
import Heading from "../UI/Heading";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import "./WordsList.scss";
const WordsList = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { y } = useAppSelector((state) => state.scroll);

  const { wordsList, isWordsListLoading, searchListValue, currentPage, searchLetter, total } = useAppSelector(
    (state) => state.search
  );

  useEffect(() => {
    dispatch(fetchWordsList({ page: currentPage, limit: 36, search: searchListValue, letter: searchLetter.toLowerCase() }));
  }, [currentPage, searchListValue, searchLetter]);

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
      {[...Array(36)].map((item, i) => (
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
              {getLang() ? item.latin : item.kiril}
            </Link>
          </li>
        ))}
      </ul>
    ) : (
      <IconButton onClick={()=>dispatch(setSearchLetter(""))}>
        <SearchOffIcon />
      </IconButton>
    );

  return (
    <>
      <Heading title={pathname === WORDS_PAGE ? "So’zlar ro’yxati" : "O’xshash so’zlar"} />
      {isWordsListLoading && wordsList.length < 1 ? skeleton : wordsListElement}
      <Pagination currentPage={currentPage} total={Math.ceil(total / 36)} onChangePage={onChangePage} />
    </>
  );
};

export default WordsList;
