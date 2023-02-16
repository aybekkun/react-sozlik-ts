import React from "react";
import Heading2 from "../UI/Heading2";
import ShareIcon from "@mui/icons-material/Share";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import "./Card.scss";
const Card = () => {
  return (
    <div className="card">
      <div className="card__top">
        <Heading2 title="Kun so’zi" />
        <button className="share">
          <ShareIcon /> Share
        </button>
      </div>
      <div className="card__title-box">
        <h3 className="card__title">Ketvotti</h3>
        <button className="card__volume">
          <VolumeUpIcon />
        </button>
      </div>
      <p className="card__desc">
        Interdum pulvinar commodo eleifend maecenas vel est et. Urna consequat vestibulum id mi urna. Nisl lobortis
        sagittis in nunc vitae etiam fringil
      </p>
    </div>
  );
};

export default Card;
