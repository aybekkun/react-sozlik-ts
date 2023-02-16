import React from "react";
import Logo from "../UI/Logo";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Link } from "react-router-dom";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__left">
            <Logo classname="logo" />
            <p>Ijtimoiy tarmoqlar:</p>
            <ul className="social">
              <li>
                <a href="#" target="_blank" rel="noreferrer">
                  <FacebookOutlinedIcon />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noreferrer">
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noreferrer">
                  <TelegramIcon />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__right">
            <ul className="footer__list">
              <h3 className="footer__title">So’zlar</h3>
              <li className="footer__item">
                <Link to="/">Kun so’zi</Link>
              </li>
              <li className="footer__item">
                <Link to="/">Yil so’zi </Link>
              </li>
              <li className="footer__item">
                <Link to="/">Yangi so’zlar</Link>
              </li>
              <li className="footer__item">
                <Link to="/">So’zlar ro’yxati</Link>
              </li>
            </ul>
            <ul className="footer__list">
              <h3 className="footer__title">Dastur haqida</h3>
              <li className="footer__item">
                <Link to="/">Kun so’zi</Link>
              </li>
              <li className="footer__item">
                <Link to="/">Yil so’zi </Link>
              </li>
              <li className="footer__item">
                <Link to="/">Yangi so’zlar</Link>
              </li>
              <li className="footer__item">
                <Link to="/">So’zlar ro’yxati</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          Mualliflik huquqi © 2022 Karsoft.uz, Inc., IXL Learning boʻlimi • Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
};

export default Footer;