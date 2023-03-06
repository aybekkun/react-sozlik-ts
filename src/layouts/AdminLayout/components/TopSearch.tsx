import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useAppDispatch from "../../../hooks/useAppDispatch.hook";
import useAppSelector from "../../../hooks/useAppSelector.hook";
import useDebounce from "../../../hooks/useDebounce.hook";
import { fetchTopSearchWord } from "../../../redux/search/asyncActions";
import { setTopSearchValue } from "../../../redux/search/slice";
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
            <Link onClick={() => dispatch(setTopSearchValue(""))} to={`/admin/words/${item.id}`}>
              {item.latin}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <>
      <div className="admin__search-box">
        <div className="admin__search">
          <div className="admin__input-box">
            <input
              value={topSearchValue}
              onChange={(e) => dispatch(setTopSearchValue(e.target.value))}
              className="admin__input"
              type="text"
              placeholder="search words"
            />
            {topSearchValue.length > 0 ? (
              <CloseIcon onClick={() => dispatch(setTopSearchValue(""))} className="icon" />
            ) : (
              <SearchIcon className="icon" />
            )}
          </div>
          {topSearchValue.length > 0 && searchItems}
        </div>
        
      </div>
    </>
  );
};

export default TopSearch;
