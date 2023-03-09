import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ABOUT_PAGE, WORDS_PAGE } from "../../helpers/constants/route";
import useAppDispatch from "../../hooks/useAppDispatch.hook";
import useAppSelector from "../../hooks/useAppSelector.hook";
import { setLang } from "../../redux/admin/slice";
import { setSearchListValue } from "../../redux/search/slice";
import ShopIcon from "@mui/icons-material/Shop";
import AppleIcon from "@mui/icons-material/Apple";
import Search from "../Search";
import Logo from "../UI/Logo";
import "./Header.scss";
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
									<span>{lang ? "Baǵdarlama haqqında" : "Бағдарлама ҳаққында"}</span>
								</Link>
							</li>
							<li>
								<span
									className="language"
									style={{ color: "#fff", cursor: "pointer" }}
									onClick={() => dispatch(setLang())}
								>
									{lang ? "Qq" : "Ққ"}
								</span>
							</li>
						</ul>
					</div>
				</nav>
			</div>
			<Search />
			<div className="header__buttons">
				<div className="container">
					<div className="header__buttons-inner">
            
						<Button sx={{bgcolor:"#0058fb60"}} variant="contained" startIcon={<ShopIcon />}>
							Google
						</Button>
						<Button sx={{bgcolor:"#0058fb60"}} variant="contained" startIcon={<AppleIcon />}>
							App Store
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
