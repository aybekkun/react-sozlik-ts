import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { WORDS_PAGE } from "../../helpers/constants/route";
import useAppDispatch from "../../hooks/useAppDispatch.hook";
import useAppSelector from "../../hooks/useAppSelector.hook";
import { fetchWordsDay } from "../../redux/words/asyncActions";
import marketImg from "./market.png";
import Logo from "../UI/Logo";
import "./Footer.scss";
const Footer = () => {
	const dispatch = useAppDispatch();
	const { y } = useAppSelector((state) => state.scroll);
	const lang = useAppSelector((state) => state.admin.lang);
	const { wordsDay } = useAppSelector((state) => state.words);
	const onScroll = () => {
		window.scrollTo(0, y);
	};
	useEffect(() => {
		if (wordsDay.id === 0) {
			dispatch(fetchWordsDay({}));
		}
	}, []);
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__top">
					<div className="footer__left">
						<Logo classname="logo" />
						<p>{lang ? "Sociallıq tarmaqlar :" : "Социаллық тармақлар :"}</p>
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
						<ul className="footer__list">
							<h3 className="footer__title">{lang ? "Baǵdarlama haqqında" : "Бағдарлама ҳаққында"}</h3>
							<li className="footer__item">
								<Link onClick={onScroll} to={`/words/${wordsDay.id}`}>
									{lang ? "Kún sózi" : "Күн сөзи"}
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
						<div className="footer__list">
							<h3 className="footer__title">Android </h3>
							<p>andoid variantin telefoninizga juklep alin ham offline tarizde paydalanin. </p>
							<Button>
								<img src={marketImg} alt="Google" />
							</Button>
						</div>
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
