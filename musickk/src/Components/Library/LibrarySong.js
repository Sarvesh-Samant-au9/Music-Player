import React from "react";
// import { playAudio } from "../../util";
// import giffy from "../../styles/Nt6v.gif";

const LibrarySong = ({
  song,
  allSongs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = async () => {
    // const selectedSong = allSongs.filter((state) => {
    // state.id === id;
    // console.log(state);
    // console.log(state.id);
    // console.log("This IS ID", id);
    // return state.id === id;
    // });
    // Selecting First Song on Click
    // setCurrentSong(selectedSong[0]);
    // console.log(selectedSong);
    // console.log(id);
    const newSongs = allSongs.map((song) => {
      if (song.id === id) {
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

    await setCurrentSong(song);
    // if (isPlaying) {
    // // const playPromise = audioRef.current.play();
    // // if (playPromise !== undefined) {
    // // playPromise.then((audio) => {
    // audioRef.current.play();
    // });
    // }
    // }

    // playAudio(isPlaying, audioRef);
    if (isPlaying) {
      audioRef.current.play();
    }
  };
  // console.log(song.active);
  return (
    <section
      onClick={songSelectHandler}
      className={`library__song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <section className="library__song--description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </section>
    </section>
  );
};

export default LibrarySong;
