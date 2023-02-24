import React, { useRef, useState } from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import StopIcon from "@mui/icons-material/Stop";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { _audioRoute } from "../../../../api/audioroute";
type AudioProps = {
  src: string | null;
};
const Audio = ({ src }: AudioProps) => {
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
      {src ? audioButtons : <VolumeOffIcon />}
      {src && (
        <audio controls ref={audioRef} style={{ display: "none" }}>
          <source src={`${_audioRoute}/${src}`} type="audio/mp3" />
          <source src={`${_audioRoute}/${src}`} type="audio/ogg" />
          <source src={`${_audioRoute}/${src}`} type="audio/wav" />
        </audio>
      )}
    </>
  );
};

export default Audio;
