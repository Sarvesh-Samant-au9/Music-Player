import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  allSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  const windowSize = window.innerWidth;

  return (
    <>
      {windowSize > 500 ? (
        <article
          className={`library ${libraryStatus ? "active-library" : ""} 
   `}
        >
          <h2>Music Library</h2>
          <div className="library__songs">
            {allSongs.map((song) => (
              <LibrarySong
                song={song}
                setCurrentSong={setCurrentSong}
                allSongs={allSongs}
                id={song.id}
                key={song.id}
                audioRef={audioRef}
                isPlaying={isPlaying}
                setSongs={setSongs}
              />
            ))}
            {/* <LibrarySong currentSong={} /> */}
          </div>
        </article>
      ) : (
        <article className={`library-small ${libraryStatus ? "passive" : ""}`}>
          <h2>Music Library</h2>
          <div className="library__songs">
            {allSongs.map((song) => (
              <LibrarySong
                song={song}
                setCurrentSong={setCurrentSong}
                allSongs={allSongs}
                id={song.id}
                key={song.id}
                audioRef={audioRef}
                isPlaying={isPlaying}
                setSongs={setSongs}
              />
            ))}
            {/* <LibrarySong currentSong={} /> */}
          </div>
        </article>
      )}
    </>
  );
};

export default Library;
