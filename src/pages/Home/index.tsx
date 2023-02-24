import { useEffect } from "react";
import Card from "../../components/Card";
import Wrapper from "../../components/UI/Wrapper";
import { getLang } from "../../helpers/convertor/convertor";
import useAppDispatch from "../../hooks/useAppDispatch.hook";
import useAppSelector from "../../hooks/useAppSelector.hook";
import { fetchWordsDay } from "../../redux/words/asyncActions";
import "./Home.scss";
import HomeInfo from "./HomeInfo";
const Home = () => {
  const dispatch = useAppDispatch();
  const { wordsDay } = useAppSelector((state) => state.words);
  useEffect(() => {
    dispatch(fetchWordsDay({}));
  }, []);
  return (
    <Wrapper>
      <div className="home">
        <div className="container">
          <div className="home__top">
            <HomeInfo
              title="O’rganish uchun lug’at"
              subtitle="O’rganish uchun lug’at"
              description="Muayyan so'zni qidiryapsizmi yoki shunchaki ko'rib chiqyapsizmi, siz o'qitish va ko'ngil ochish uchun mo'ljallangan do'stona tushuntirishlar va qiziqarli tadbirlar olamini topasiz."
            />
            <Card
              id={wordsDay.id}
              type="popular"
              
              description={getLang() ? wordsDay.description_latin : wordsDay.kiril}
              audio={wordsDay.audio}
              title={getLang() ? wordsDay.latin : wordsDay.kiril}
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
              title="So’zlarni o’rganishning eng samarali usuli"
              subtitle="eng samarali usuli"
              description="Muayyan so'zni qidiryapsizmi yoki shunchaki ko'rib chiqyapsizmi, siz o'qitish va ko'ngil ochish uchun mo'ljallangan do'stona tushuntirishlar va qiziqarli tadbirlar olamini topasiz."
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
