import React, { useEffect, useState } from "react";
import useAppDispatch from "../../../../hooks/useAppDispatch.hook";
import useAppSelector from "../../../../hooks/useAppSelector.hook";
import useDebounce from "../../../../hooks/useDebounce.hook";
import { fetchWordsList } from "../../../../redux/search/asyncActions";
import { ISearchData } from "../../../../redux/search/types";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton, TextField } from "@mui/material";
import { setSearchListValue } from "../../../../redux/search/slice";
type SynonymsProps = {
  data?: ISearchData[];
  ids: number[];
  onAdd: (arr: number[]) => void;
};
const Synonyms = ({ ids, onAdd, data = [] }: SynonymsProps) => {
  const dispatch = useAppDispatch();
  const { wordsList, searchListValue } = useAppSelector((state) => state.search);
  const [synonyms, setSynonyms] = useState<ISearchData[]>([]);


  const debouncedValue = useDebounce<string>(searchListValue, 300);
  useEffect(() => {
    if (ids.length < 1) {
      setSynonyms([]);
    }
  }, [ids]);
  
  useEffect(() => {
    setSynonyms(data);
  }, [data]);

  useEffect(() => {
    if (debouncedValue) {
      dispatch(fetchWordsList({ page: 1, limit: 100, search: debouncedValue }));
    }
  }, [debouncedValue]);
  const onAddSynonyms = (selectedWord: ISearchData) => {
    if (!synonyms.some((item) => item.id === selectedWord.id)) {
      const newArray = [...synonyms.map((item) => item.id), selectedWord.id];
      setSynonyms((prev) => [...prev, selectedWord]);
      onAdd(newArray);
    }
  };
  const onRemoveSynonyms = (selectedWord: ISearchData) => {
    const filteredData = synonyms.filter((item) => item.id !== selectedWord.id);
    setSynonyms(filteredData);
    onAdd(filteredData.map((item) => item.id));
  };

  return (
    <>
      <div className="adwords__select">
        {synonyms.length > 0 && (
          <ul>
            {synonyms.map((item) => (
              <li key={item.id}>
                {item.latin}
                <IconButton onClick={() => onRemoveSynonyms(item)} color="error">
                  <RemoveIcon />
                </IconButton>
              </li>
            ))}
          </ul>
        )}
      </div>
      <TextField
        value={searchListValue}
        onChange={(e) => dispatch(setSearchListValue(e.target.value))}
        label="Sinonim"
        fullWidth
        placeholder="Sinonim"
        size="small"
      />
      <div className="adwords__search-result">
        {debouncedValue && wordsList.length > 0 && (
          <ul>
            {wordsList.map((item, i) => (
              <li key={i}>
                {item.latin}
                {synonyms.some((synonym) => synonym.id === item.id) ? (
                  <IconButton onClick={() => onRemoveSynonyms(item)} color="error">
                    <RemoveIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => onAddSynonyms(item)} color="success">
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

export default Synonyms;
