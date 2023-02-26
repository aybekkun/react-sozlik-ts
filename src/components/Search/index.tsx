import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import flowerImg from "../../assets/img/flower.svg";
import useAppDispatch from "../../hooks/useAppDispatch.hook";
import useAppSelector from "../../hooks/useAppSelector.hook";
import useDebounce from "../../hooks/useDebounce.hook";
import { fetchSearchWord } from "../../redux/search/asyncActions";
import { setSearchListValue, setSearchValue } from "../../redux/search/slice";

import { WORDS_PAGE } from "../../helpers/constants/route";
import "./Search.scss";

const Search = () => {
  const dispatch = useAppDispatch();
  const { y } = useAppSelector((state) => state.scroll);
  const lang = useAppSelector((state) => state.admin.lang);
  const { searchValue, data } = useAppSelector((state) => state.search);
  const debouncedValue = useDebounce<string>(searchValue, 300);
  const navigate = useNavigate();
  useEffect(() => {
    if (searchValue.length > 0) {
      dispatch(fetchSearchWord({ search: debouncedValue, limit: 5, page: 1 }));
    }
  }, [debouncedValue, dispatch]);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(event.target.value));
  };
  const onClearValue = () => {
    dispatch(setSearchValue(""));
  };
  const onClickLink = (str: string) => {
    window.scrollTo(0, y);
    dispatch(setSearchListValue(str.slice(0, 3)));
    onClearValue();
  };
  const onClickEnter = (e: React.KeyboardEvent) => {
    if (e.code === "Enter" && data.length > 0) {
      onClickLink(data[0].latin);
      navigate(`${WORDS_PAGE}/${data[0].id}`);
    }
  };

  return (
    <>
      <div className="search">
        <div className="container">
          <div className="search__inner">
            <h1 className="search__title">
              {lang ? "Bir sózdi qıdırıń, onı ádebiy úyreniń." : "Бир сөзди қыдырың, оны әдебий үйрениң."}
            </h1>
            <div className="search__input-box">
              <div className="search__wrap">
                <input
                  onKeyDown={onClickEnter}
                  value={searchValue}
                  onChange={onChangeInput}
                  className="search__input"
                  type="text"
                  placeholder={lang ? "sózdi qıdırıw ushın jazıń..." : "cөзди қыдырыў ушын жазың..."}
                />
                {searchValue.length > 0 ? (
                  <button onClick={onClearValue} className="search__btn">
                    <ClearIcon sx={{ color: "#fff" }} />
                  </button>
                ) : (
                  <button className="search__btn">
                    <SearchIcon sx={{ color: "#fff" }} />
                  </button>
                )}
              </div>
              <img className="search__img" src={flowerImg} alt="" />
            </div>
          </div>
        </div>
        <div className="result">
          <ul className="result__list">
            {searchValue &&
              data.map((word, i) => (
                <li key={word.id} className="result__item">
                  <Link onClick={() => onClickLink(word.latin)} to={`${WORDS_PAGE}/${word.id}`}>
                    {word.latin.toUpperCase()}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Search;
