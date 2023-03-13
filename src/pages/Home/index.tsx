import { useEffect } from "react";
import Card from "../../components/Card";
import Wrapper from "../../components/UI/Wrapper";
import useAppDispatch from "../../hooks/useAppDispatch.hook";
import useAppSelector from "../../hooks/useAppSelector.hook";
import { fetchWordsDay } from "../../redux/words/asyncActions";
import "./Home.scss";
import HomeInfo from "./HomeInfo";
const Home = () => {
	const dispatch = useAppDispatch();
	const { wordsDay } = useAppSelector((state) => state.words);
	const lang = useAppSelector((state) => state.admin.lang);

	useEffect(() => {
		dispatch(fetchWordsDay({}));
	}, []);
	return (
		<Wrapper>
			<div className="home">
				<div className="container">
					<div className="home__top">
						{/* <HomeInfo
							title={lang ? "Úyreniw ushın sózlik" : "Үйрениў ушын сөзлик"}
							subtitle={lang ? "Úyreniw ushın sózlik" : "Үйрениў ушын сөзлик"}
							description={
								lang
									? "Arnawlı bir sózdi qıdıryapsizmi yamasa jaysha kórip chiqyapsizmi, siz oqıtıw hám ko'ngil ashıw ushın mólsherlengen dos sıpatında túsindirisler hám qızıqlı ilajlar álemin tabası"
									: "Арнаўлы бир сөзди қыдыряпсизми ямаса жайша көрип чиқяпсизми, сиз оқытыў ҳәм коънгил ашыў ушын мөлшерленген дос сыпатында түсиндирислер ҳәм қызықлы илажлар әлемин табасы"
							}
						/> */}
						<Card
							id={wordsDay.id}
							type="popular"
							description={lang ? wordsDay.description_latin : wordsDay.description_kiril}
							audio={wordsDay.audio}
							title={lang ? wordsDay.latin : wordsDay.kiril}
						/>
					</div>
					<div className="home__bottom">
						<div className="home__video">
							<iframe
								width="100%"
								height="100%"
								src="https://www.youtube.com/embed/Bq1LHWaQtTI"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
							></iframe>
						</div>
						<HomeInfo
							title={lang ? "Sózlerdi úyreniwdiń eń nátiyjeli usılı" : "Сөзлерди үйрениўдиң ең нәтийжели усылы"}
							subtitle={lang ? "Eń nátiyjeli usılı" : "Eң нәтийжели усылы"}
							description={
								lang
									? `Sózlerdi úyreniwdiń eń nátiyjeli usılı - tek ǵana biz benen! Tusindirmesozlik.uz - Qaraqalpaq tilindegi sózlerdi durıs jazıw hám onıń mánisin mısallar járdeminde sizge shaǵıp beriwge járdem beredi! Video arqalı veb sayttıń islew funkciyası hám kreativligin tolıǵıraq túsinip alasız. Tómendegi "tolıq" túymesin basıń.`
									: `
Сөзлерди үйрениўдиң ең нәтийжели усылы - тек ғана биз бенен! Тусиндирмесозлик.уз - Қарақалпақ тилиндеги сөзлерди дурыс жазыў ҳәм оның мәнисин мысаллар жәрдеминде сизге шағып бериўге жәрдем береди! Видео арқалы веб сайттың ислеў ўаункциясы ҳәм креативлигин толығырақ түсинип аласыз. Төмендеги "толық" түймесин басың.`
							}
						/>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default Home;
