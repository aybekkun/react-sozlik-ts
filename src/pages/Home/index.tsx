import React from "react";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";
import Wrapper from "../../components/UI/Wrapper";
import "./Home.scss";
import HomeInfo from "./HomeInfo";
const Home = () => {
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
            <Card />
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
