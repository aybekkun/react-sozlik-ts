import { Link } from "react-router-dom";
import { ABOUT_PAGE, WORDS_PAGE } from "../../helpers/constants/route";
import Search from "../Search";
import Logo from "../UI/Logo";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./Header.scss";
import useAppSelector from "../../hooks/useAppSelector.hook";
import useAppDispatch from "../../hooks/useAppDispatch.hook";
import { setSearchListValue } from "../../redux/search/slice";

const Header = () => {
  const dispatch = useAppDispatch();
  const { y } = useAppSelector((state) => state.scroll);

  const onClickLink = () => {
    window.scrollTo(0, y);
    dispatch(setSearchListValue(""))
  };
  const onClickHome = ()=>{
    window.scrollTo(0,0);
  }
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="container">
            <Logo />
            <ul className="nav__list">
              <li>
                <Link onClick={onClickHome} to={"/"}>
                  <HomeOutlinedIcon className="icon" />
                  <span>So’zlar</span>
                </Link>
              </li>
              <li>
                <Link onClick={onClickLink} to={WORDS_PAGE}>
                  <FormatListBulletedIcon className="icon" />
                  <span>So’zlar ro’yxati</span>
                </Link>
              </li>
              <li>
                <Link onClick={onClickLink} to={ABOUT_PAGE}>
                  <InfoOutlinedIcon className="icon" />
                  <span>Dastur haqida</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Search />
      <div className="header__buttons">
        <div className="container">
          <div className="header__buttons-inner">
            <button className="header__btn header__btn-1">O’rganish uchun lug’at</button>
            <button className="header__btn header__btn-2">So’zlarni o’rganishning eng samarali usuli</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
