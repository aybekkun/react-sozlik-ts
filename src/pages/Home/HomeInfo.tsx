import React from "react";
import Heading2 from "../../components/UI/Heading2";
type HomeInfoProps = {
  subtitle: string;
  title: string;
  description: string;
};
const HomeInfo = ({ subtitle, title, description }: HomeInfoProps) => {
  return (
    <div className="home__info">
      <Heading2 title={subtitle} className="home__heading2"/>
      <h3 className="home__title">{title}</h3>
      <p className="home__desc">{description}</p>
      <button className="home__more">Batafsil...</button>
    </div>
  );
};

export default HomeInfo;
