import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faStepForward,
  faStepBackward,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { playAudio } from "../../util";

const Player = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  songInfo,
  setSongInfo,
  audioRef,
  allSongs,
  setCurrentSong,
  setSongs,
}) => {
  useEffect(() => {
    const newSongs = allSongs.map((song) => {
      if (song.id === currentSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  }, [currentSong]);

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
      // setIsPlaying(false);
    } else {
      setIsPlaying(!isPlaying);
      audioRef.current.play();
      console.log(audioRef.current);
      // setIsPlaying(true)
    }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const inputChangeHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipSongHandler = async (direction) => {
    let currentIndex = allSongs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      await setCurrentSong(allSongs[(currentIndex + 1) % allSongs.length]);
    }
    // if (direction === "skip-back") {
    // // if ((currentIndex - 1) % allSongs.length === -1) {
    // // setCurrentSong(allSongs[allSongs.length - 1]);
    // return;
    // }
    // // setCurrentSong(allSongs[(currentIndex - 1) % allSongs.length]);
    // }
    if (direction === "skip-back") {
      const newIndex =
        currentIndex <= 0
          ? (currentIndex = allSongs.length - 1)
          : (currentIndex = currentIndex - 1);
      await setCurrentSong(allSongs[newIndex]);
    }

    // playAudio(isPlaying, audioRef);
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };
  return (
    <div className="player">
      <div className="time__control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            type="range"
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={inputChangeHandler}
          />
          <div className="animated__track " style={trackAnim}></div>
        </div>

        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="player__control">
        <FontAwesomeIcon
          onClick={() => skipSongHandler("skip-back")}
          className="player__control-skipBack"
          icon={faStepBackward}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="plaer__control-play"
          size="2x"
          icon={isPlaying ? faPlay : faPause}
        />
        <FontAwesomeIcon
          onClick={() => skipSongHandler("skip-forward")}
          className="player__control-skipForward"
          icon={faStepForward}
        />
      </div>
      <div style={{ position: "relative", width: "100%", height:"10vh" }}>
        <Link to="/">
          <button
            type="button"
            className="btn btn-outline-danger"
            style={{ position: "absolute", right: 20, bottom: 30 }}
          >
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Player;
