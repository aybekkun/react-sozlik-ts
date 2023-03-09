import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import { WORDS_PAGE } from "../../helpers/constants/route";
import useAppSelector from "../../hooks/useAppSelector.hook";
import Logo from "../UI/Logo";
import "./Footer.scss";
const Footer = () => {
	const { y } = useAppSelector((state) => state.scroll);
	const lang = useAppSelector((state) => state.admin.lang);
	const onScroll = () => {
		window.scrollTo(0, y);
	};
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__top">
					<div className="footer__left">
						<Logo classname="logo" />
						<p>{lang ? "Social tarmaqlar :" : "Социал тармақлар :"}</p>
						<ul className="social">
							<li>
								<a href="https://youtube.com/channel/UCrb_94b-JGhG0X43CUx6CyA" target="_blank" rel="noreferrer">
									<YouTubeIcon />
								</a>
							</li>
							<li>
								<a href="https://www.instagram.com/tusindirme_sozlik" target="_blank" rel="noreferrer">
									<InstagramIcon />
								</a>
							</li>
							<li>
								<a href="https://t.me/tusindirmesoz" target="_blank" rel="noreferrer">
									<TelegramIcon />
								</a>
							</li>
						</ul>
					</div>
					<div className="footer__right">
						{/*       <ul className="footer__list">
              <h3 className="footer__title">{lang?"Sózler":"Cөзлер"}</h3>
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
            </ul> */}
						<ul className="footer__list">
							<h3 className="footer__title">{lang ? "Programma haqqında" : "Программа ҳаққында"}</h3>
							<li className="footer__item">
								<Link onClick={onScroll} to="/">
									{lang ? "Kun sózi" : "Кун сөзи"}
								</Link>
							</li>
							<li className="footer__item">
								<Link onClick={onScroll} to="/newwords">
									{lang ? "Jańa sózler" : "Жаңа сөзлер"}
								</Link>
							</li>
							<li className="footer__item">
								<Link onClick={onScroll} to={WORDS_PAGE}>
									{lang ? "Sózler dizimi" : "Сөзлер дизими"}
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="footer__bottom">
					Avtorlıq huqıqı © 2022 Bookie audiokitaplar, "KARSOFT-IT-SOLUTIONS" JSHJ • Barlıq huqıqlar qorǵalǵan.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
