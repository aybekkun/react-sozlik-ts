import ShareIcon from "@mui/icons-material/Share";
import StopIcon from "@mui/icons-material/Stop";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Skeleton } from "@mui/material";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { _audioRoute } from "../../api/audioroute";
import useAppDispatch from "../../hooks/useAppDispatch.hook";
import useAppSelector from "../../hooks/useAppSelector.hook";
import { setSearchListValue } from "../../redux/search/slice";
import { ICategory } from "../../redux/words/types";
import Heading from "../UI/Heading";
import Heading2 from "../UI/Heading2";
import "./Card.scss";
type AddData = {
	id: number;
	latin: string;
	kiril: string;
};

type CardProps = {
	id?: number;
	description?: string;
	audio?: string | null;
	title?: string;
	synonyms?: AddData[];
	antonyms?: AddData[];
	categories?: ICategory[];
	type?: "popular";
};
const Card = ({ type, id, description, audio, title, synonyms, antonyms, categories }: CardProps) => {
	const dispatch = useAppDispatch();
	const audioRef = useRef<HTMLAudioElement>(null);
	const [play, setPlay] = useState(false);
	const lang = useAppSelector((state) => state.admin.lang);
	const { y } = useAppSelector((state) => state.scroll);
	const onClickPlay = () => {
		if (audioRef.current) {
			audioRef.current.play();
			setPlay(true);
		}
	};
	const onClickPause = () => {
		if (audioRef.current) {
			audioRef.current.pause();
			audioRef.current.currentTime = 0;
			setPlay(false);
		}
	};

	const onClickShare = async () => {
		const shareData = {
			title: "Jańa sózlerdi ashıń ",
			text: `${title} - ${description}`,
			url: window.location.href,
		};
		await navigator.share(shareData);
	};

	const onClickLink = (str: string) => {
		window.scrollTo(0, y);
		dispatch(setSearchListValue(str.slice(0, 3)));
	};
	const audioButtons = play ? (
		<button onClick={onClickPause} className="card__volume">
			<StopIcon />
		</button>
	) : (
		<button onClick={onClickPlay} className="card__volume">
			<VolumeUpIcon />
		</button>
	);
	return (
		<>
			<div className="card">
				<div className="card__top">
					<Heading2 title={type ? (lang ? "Kun sózi" : "Кун сөзи") : lang ? "Sóz mánisi" : "Сөз мәниси"} />
					<button onClick={onClickShare} className="share">
						<ShareIcon /> Share
					</button>
				</div>
				<div className="card__title-box">
					<h3 className="card__title">{title ? title : <Skeleton width={100} variant="text" />}</h3>
					{audio && audioButtons}
				</div>
				{categories && categories[0].id !== 0 && (
					<h4 className="card__category">{lang ? categories[0].latin : categories[0].kiril}</h4>
				)}
				<p className="card__desc">{description ? description : <Skeleton width={"100%"} height={"3rem"} />}</p>

				{audio && (
					<audio controls ref={audioRef} style={{ display: "none" }}>
						<source src={`${_audioRoute}/${audio}`} type="audio/mp3" />
						<source src={`${_audioRoute}/${audio}`} type="audio/ogg" />
						<source src={`${_audioRoute}/${audio}`} type="audio/wav" />
					</audio>
				)}
			</div>
			<div className="card__lists">
				{synonyms && synonyms.length > 0 && (
					<>
						<Heading title={lang ? "Sinonim" : "Синоним"}  />
						<ul className="card__lists-list">
							{synonyms.map((item) => (
								<li className="card__lists-item" key={item.id}>
									<Link key={item.id} onClick={() => onClickLink(item.latin)} to={`/words/${item.id}`}>
										{lang ? item.latin : item.kiril}
									</Link>
								</li>
							))}
						</ul>
					</>
				)}
				{antonyms && antonyms.length > 0 && (
					<>
						<Heading title={lang ? "Antonim" : "Антоним"} />
						<ul className="card__lists-list">
							{antonyms.map((item) => (
								<li className="card__lists-item" key={item.id}>
									<Link onClick={() => onClickLink(item.latin)} to={`/words/${item.id}`}>
										{lang ? item.latin : item.kiril}
									</Link>
								</li>
							))}
						</ul>
					</>
				)}
			</div>
		</>
	);
};

export default Card;
