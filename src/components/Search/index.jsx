import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import flowerImg from "../../assets/img/flower.svg";
import "./Search.scss";

const Search = () => {
  return (
    <>
      <div className="search">
        <div className="container">
          <div className="search__inner">
            <h1 className="search__title">Bir so’zni qidiring, uni abadiy o’rganing.</h1>
            <div className="search__input-box">
              <div className="search__wrap">
                <input className="search__input" type="text" placeholder="so’zni qidirish uchun yozing..." />
                <button className="search__btn">
                  <SearchIcon sx={{ color: "#fff" }} />
                </button>
              </div>
              <img className="search__img" src={flowerImg} alt="" />
            </div>
          </div>
        </div>
        <div className="result">
      
            <ul className="result__list">
              {[...Array(5)].map((item, i) => (
                <li className="result__item">
                  <Link to="/">{i} Hello</Link>
                </li>
              ))}
            </ul>
      
        </div>
      </div>
    </>
  );
};
{
  /**/
}
export default Search;
