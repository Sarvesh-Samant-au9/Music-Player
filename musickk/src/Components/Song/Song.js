import { faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Song = ({ currentSong, isPlaying }) => {
  return (
    <div
      className="song__container"
      style={{
        transitionProperty: "all",
        transitionDelay: "0.5s",
        transitionTimingFunction: "ease-in-out",
        transitionDuration: "0.6s",
      }}
    >
      {isPlaying ? (
        <img
          src={currentSong.cover}
          alt={currentSong.name}
          className={isPlaying ? "rotateSong" : ""}
        />
      ) : (
        <FontAwesomeIcon icon={faPause} size="4x" />
      )}
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
