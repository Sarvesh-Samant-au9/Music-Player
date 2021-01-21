import Player from "./Player/Player";
import Song from "./Song/Song";
// import "./styles/app.scss";
import "./Styles/app.scss";
import React, { useState, useRef } from "react";
import Library from "./Library/Library";
import NavBar from "./Navbar/Nav";

function Wrapp({ data }) {
  // console.log(data);
  const [songs, setSongs] = useState(data);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [isOpenLibrary, setIsOpenLibrary] = useState(false);
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const durationTime = e.target.duration;

    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(durationTime);

    const animationPercent = Math.round(
      (roundedCurrent / roundedDuration) * 100
    );

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: durationTime,
      animationPercentage: animationPercent,
    });
  };

  const songHandlerEnd = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);

    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);

    if (isPlaying) {
      audioRef.current.play();
    }
  };
  const returnRender = (parameter) => {
    return (
      <div className={`Wrapp ${isOpenLibrary ? `${parameter}` : " "} `}>
        <NavBar
          libraryStatus={isOpenLibrary}
          setLibraryStatus={setIsOpenLibrary}
        />
        <Song currentSong={currentSong} isPlaying={isPlaying} />
        <Player
          audioRef={audioRef}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          currentSong={currentSong}
          setSongInfo={setSongInfo}
          songInfo={songInfo}
          allSongs={songs}
          setCurrentSong={setCurrentSong}
          setSongs={setSongs}
        />
        <Library
          allSongs={songs}
          setCurrentSong={setCurrentSong}
          audioRef={audioRef}
          isPlaying={isPlaying}
          setSongs={setSongs}
          libraryStatus={isOpenLibrary}
        />
        <audio
          ref={audioRef}
          src={currentSong.audio}
          onTimeUpdate={timeUpdateHandler}
          onLoadedMetadata={timeUpdateHandler}
          onEnded={songHandlerEnd}
        />
      </div>
    );
  };
  const windowSize = window.innerWidth;
  return (
    <>
      {windowSize > 500
        ? returnRender("library__active")
        : returnRender("library__passive")}
    </>
  );
}

export default Wrapp;
