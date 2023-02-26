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
            <HomeInfo
              title={lang ? "Úyreniw ushın sózlik" : "Үйрениў ушын сөзлик"}
              subtitle={lang ? "Úyreniw ushın sózlik" : "Үйрениў ушын сөзлик"}
              description={
                lang
                  ? "Arnawlı bir sózdi qıdıryapsizmi yamasa jaysha kórip chiqyapsizmi, siz oqıtıw hám ko'ngil ashıw ushın mólsherlengen dos sıpatında túsindirisler hám qızıqlı ilajlar álemin tabası"
                  : "Арнаўлы бир сөзди қыдыряпсизми ямаса жайша көрип чиқяпсизми, сиз оқытыў ҳәм коънгил ашыў ушын мөлшерленген дос сыпатында түсиндирислер ҳәм қызықлы илажлар әлемин табасы"
              }
            />
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
              description="Muayyan so'zni qidiryapsizmi yoki shunchaki ko'rib chiqyapsizmi, siz o'qitish va ko'ngil ochish uchun mo'ljallangan do'stona tushuntirishlar va qiziqarli tadbirlar olamini topasiz."
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
