import React, { useEffect, useState } from "react";
import useAppDispatch from "../../../../hooks/useAppDispatch.hook";
import useAppSelector from "../../../../hooks/useAppSelector.hook";
import useDebounce from "../../../../hooks/useDebounce.hook";
import { fetchPopularList } from "../../../../redux/search/asyncActions";
import { ISearchData } from "../../../../redux/search/types";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton, TextField } from "@mui/material";
import { setSearchPopularValue } from "../../../../redux/search/slice";
type AntonymsProps = {
  data?: ISearchData[];
  ids: number[];
  onAdd: (arr: number[]) => void;
};
const Antonyms = ({ ids, onAdd, data = [] }: AntonymsProps) => {
  const dispatch = useAppDispatch();
  const { popularList, searchPopularValue } = useAppSelector((state) => state.search);
  const [antonyms, setAntonyms] = useState<ISearchData[]>([]);
  
  const debouncedValue = useDebounce<string>(searchPopularValue, 300);
  useEffect(() => {
    if (ids.length < 1) {
      setAntonyms([]);
    }
  }, [ids]);

  useEffect(() => {
    setAntonyms(data);
  }, [data]);
  useEffect(() => {
    if (debouncedValue) {
      dispatch(fetchPopularList({ page: 1, limit: 100, search: debouncedValue }));
    }
  }, [debouncedValue]);
  const onAddAntonyms = (selectedWord: ISearchData) => {
    if (!antonyms.some((item) => item.id === selectedWord.id)) {
      const newArray = [...antonyms.map((item) => item.id), selectedWord.id];
      setAntonyms((prev) => [...prev, selectedWord]);
      onAdd(newArray);
    }
  };
  const onRemoveAntonyms = (selectedWord: ISearchData) => {
    const filteredData = antonyms.filter((item) => item.id !== selectedWord.id);
    setAntonyms(filteredData);
    onAdd(filteredData.map((item) => item.id));
  };
  return (
    <>
      <div className="adwords__select">
        {antonyms.length > 0 && (
          <ul>
            {antonyms.map((item) => (
              <li key={item.id}>
                {item.latin}
                <IconButton onClick={() => onRemoveAntonyms(item)} color="error">
                  <RemoveIcon />
                </IconButton>
              </li>
            ))}
          </ul>
        )}
      </div>
      <TextField
        value={searchPopularValue}
        onChange={(e) => dispatch(setSearchPopularValue(e.target.value))}
        label="Antonim"
        fullWidth
        placeholder="Antonim"
        size="small"
      />
      <div className="adwords__search-result">
        {debouncedValue && popularList.length > 0 && (
          <ul>
            {popularList.map((item, i) => (
              <li key={i}>
                {item.latin}
                {antonyms.some((synonym) => synonym.id === item.id) ? (
                  <IconButton onClick={() => onRemoveAntonyms(item)} color="error">
                    <RemoveIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => onAddAntonyms(item)} color="success">
                    <AddIcon />
                  </IconButton>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Antonyms;
