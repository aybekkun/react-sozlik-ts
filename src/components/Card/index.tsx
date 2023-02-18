import React, { useRef, useState } from "react";
import Heading2 from "../UI/Heading2";
import ShareIcon from "@mui/icons-material/Share";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import "./Card.scss";
import { Skeleton } from "@mui/material";
import StopIcon from "@mui/icons-material/Stop";
import audioSrc from "../../assets/audio.mp3";
type CardProps = {
  id?: number;
  description?: string;
  audio?: string | null;
  title?: string;
  type?: "popular";
};
const Card = ({ type, id, description, audio, title }: CardProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [play, setPlay] = useState(false);
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
    <div className="card">
      <div className="card__top">
        <Heading2 title={type ? "Kun so’zi" : "So’z tarifi"} />
        <button onClick={onClickShare} className="share">
          <ShareIcon /> Share
        </button>
      </div>
      <div className="card__title-box">
        <h3 className="card__title">{title ? title : <Skeleton width={100} variant="text" />}</h3>
        {!audio && audioButtons}
      </div>
      <p className="card__desc">{description ? description : <Skeleton width={"100%"} height={"3rem"} />}</p>
      <audio controls ref={audioRef} style={{ display: "none" }}>
        <source src={audioSrc} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default Card;
