import { Skeleton } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { WORDS_PAGE } from "../../helpers/constants/route";
import { getLang } from "../../helpers/convertor/convertor";
import useAppDispatch from "../../hooks/useAppDispatch.hook";
import useAppSelector from "../../hooks/useAppSelector.hook";
import { fetchPopularList } from "../../redux/search/asyncActions";
import { setSearchListValue } from "../../redux/search/slice";
import Heading from "../UI/Heading";

const PopularSearch = () => {
  const dispatch = useAppDispatch();
  const { isPopularListLoading, popularList } = useAppSelector((state) => state.search);
  const { y } = useAppSelector((state) => state.scroll);

  useEffect(() => {
    dispatch(fetchPopularList({ sortBy: "count", limit: 12 }));
  }, []);


  const onClickLink = (str: string) => {
    window.scrollTo(0, y);
    dispatch(setSearchListValue(str.slice(0, 3)));
  };

  const skeleton = [...Array(12)].map((item, i) => (
    <li className="popular__item" key={i}>
      <Skeleton variant="text" />
    </li>
  ));
  const popularWordsLits = popularList.map((item, i) => (
    <li className="popular__item" key={item.id}>
      <Link onClick={()=>onClickLink(item.latin)} to={`${WORDS_PAGE}/${item.id}`}>{getLang() ? item.latin : item.kiril}</Link>
    </li>
  ));
  return (
    <div className="popular__search">
      <Heading title="Ommabop qidiruvlar" />
      <p className="popular__subtitle">Qoraqalpoq tili lug’ati</p>
      <ul className="popular__list">{isPopularListLoading ? skeleton : popularWordsLits}</ul>
    </div>
  );
};

export default PopularSearch;
