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
import TranslateIcon from "@mui/icons-material/Translate";
import { IconButton } from "@mui/material";
import { getLang } from "../../helpers/convertor/convertor";
import { setLang } from "../../redux/admin/slice";
const Header = () => {
  const dispatch = useAppDispatch();
  const { y } = useAppSelector((state) => state.scroll);
  const lang = useAppSelector((state) => state.admin.lang);

  const onClickLink = () => {
    window.scrollTo(0, y);
    dispatch(setSearchListValue(""));
  };
  const onClickHome = () => {
    window.scrollTo(0, 0);
  };

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
                  <span>{lang ? "Sózler" : "Сөзлер"}</span>
                </Link>
              </li>
              <li>
                <Link onClick={onClickLink} to={WORDS_PAGE}>
                  <FormatListBulletedIcon className="icon" />
                  <span>{lang ? "Sózler dizimi" : "Сөзлер дизими"}</span>
                </Link>
              </li>
              <li>
                <Link onClick={onClickLink} to={ABOUT_PAGE}>
                  <InfoOutlinedIcon className="icon" />
                  <span>{lang ? "Programma haqqında" : "Программа ҳаққында"}</span>
                </Link>
              </li>
              <li>
                <IconButton onClick={() => dispatch(setLang())}>
                  <TranslateIcon className="translate" />
                </IconButton>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Search />
      <div className="header__buttons">
        <div className="container">
          <div className="header__buttons-inner">
            <button className="header__btn header__btn-1">
              {lang ? "Úyreniw ushın sózlik" : "Үйрениў ушын сөзлик"}
            </button>
            <button className="header__btn header__btn-2">
              {lang ? "Sózlerdi úyreniwdiń eń nátiyjeli usılı " : "Сөзлерди үйрениўдиң ең нәтийжели усылы"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
