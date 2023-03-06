import React, { useRef, useState } from "react";
import Heading2 from "../UI/Heading2";
import ShareIcon from "@mui/icons-material/Share";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import "./Card.scss";
import { Skeleton } from "@mui/material";
import StopIcon from "@mui/icons-material/Stop";
import { _audioRoute } from "../../api/audioroute";
import useAppSelector from "../../hooks/useAppSelector.hook";
import { Link } from "react-router-dom";
import useAppDispatch from "../../hooks/useAppDispatch.hook";
import { setSearchListValue } from "../../redux/search/slice";

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
  type?: "popular";
};
const Card = ({ type, id, description, audio, title, synonyms, antonyms }: CardProps) => {
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
      <p className="card__desc">{description ? description : <Skeleton width={"100%"} height={"3rem"} />}</p>
      <div className="card__add">
        {synonyms && synonyms.length > 0 && (
          <>
            <b>Sinonim</b> :
            {synonyms.map((item) => (
              <Link key={item.id} onClick={() => onClickLink(item.latin)} to={`/words/${item.id}`}>
                {lang ? item.latin : item.kiril}
              </Link>
            ))}
          </>
        )}
      </div>
      <div className="card__add">
        {antonyms && antonyms.length > 0 && (
          <>
            <b>Antonim</b> :
            {antonyms.map((item) => (
              <Link key={item.id}  onClick={() => onClickLink(item.latin)} to={`/words/${item.id}`}>
                {lang ? item.latin : item.kiril}
              </Link>
            ))}
          </>
        )}
      </div>
      {audio && (
        <audio controls ref={audioRef} style={{ display: "none" }}>
          <source src={`${_audioRoute}/${audio}`} type="audio/mp3" />
          <source src={`${_audioRoute}/${audio}`} type="audio/ogg" />
          <source src={`${_audioRoute}/${audio}`} type="audio/wav" />
        </audio>
      )}
    </div>
  );
};

export default Card;
