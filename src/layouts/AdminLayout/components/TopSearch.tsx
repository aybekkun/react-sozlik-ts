import React, { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import useAppSelector from "../../../hooks/useAppSelector.hook";
import useAppDispatch from "../../../hooks/useAppDispatch.hook";
import { fetchWords } from "../../../redux/words/asyncActions";
import useDebounce from "../../../hooks/useDebounce.hook";
import { setSearchValue, setTopSearchValue } from "../../../redux/search/slice";
import { fetchTopSearchWord } from "../../../redux/search/asyncActions";
import CloseIcon from "@mui/icons-material/Close";
const TopSearch = () => {
  const dispatch = useAppDispatch();
  const { topSearchValue, topSearch } = useAppSelector((state) => state.search);
  const debouncedValue = useDebounce(topSearchValue, 300);
  useEffect(() => {
    dispatch(fetchTopSearchWord({ page: 1, search: debouncedValue, limit: 10 }));
  }, [debouncedValue]);
  const searchItems = (
    <div className="admin__result">
      <ul className="admin__result-list">
        {topSearch.map((item, i) => (
          <li key={i}>
            <Link to={"/"}>{item.latin}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <>
      <div className="admin__search">
        <div className="admin__input-box">
          <input
            value={topSearchValue}
            onChange={(e) => dispatch(setTopSearchValue(e.target.value))}
            className="admin__input"
            type="text"
            placeholder="search words"
          />
          {topSearchValue.length > 0 ? <CloseIcon onClick={()=>dispatch(setTopSearchValue(""))} className="icon" /> : <SearchIcon className="icon" />}
        </div>
        {topSearchValue.length > 0 && searchItems}
      </div>
    </>
  );
};

export default TopSearch;
