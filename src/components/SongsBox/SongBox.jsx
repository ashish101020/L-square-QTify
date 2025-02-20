import React, { useContext } from "react";
import { CurrentListContext, CurrentSongContext } from "../../helpers/CurrentListContext";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; 
import styled from "./SongBox.module.css";

const formatDuration = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds.padStart(2, "0")}`;
};

const SongBox = () => {
  const { currentList } = useContext(CurrentListContext);
  const { setCurrentSong } = useContext(CurrentSongContext);
  const navigate = useNavigate();

  const playSong = (song) => {
    setCurrentSong(song);
  }

  function getTotalDuration(songs) {
    let totalMs = songs.reduce((acc, song) => acc + song.durationInMs, 0);

    let totalSeconds = Math.floor(totalMs / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let hours = Math.floor(minutes / 60);
    minutes = minutes % 60; 

    return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
}

  return (
    <div className={styled.main}>
      {/* <Link to="/" className={styled.back}>Login here</Link> */}
      <IconButton color="primary" className={styled.back} onClick={() => navigate(-1)}>
      <ArrowBackIcon />
    </IconButton>
      <div className={styled.songHero}>
        <div>
          <img src={currentList.image} alt="" className={styled.songImg} />
        </div>
        <div className={styled.heroDetail}>
          <div>{currentList.description}</div>
          <div><span>{currentList.songs.length} songs - </span> <span>{currentList.follows} follows - </span> <span>{getTotalDuration(currentList.songs)}</span></div>
        </div>
      </div>

      {/* <pre>{JSON.stringify(currentList, null, 2)}</pre> */}
      <div className={styled.songTable}>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2 text-center flex-1 truncate">Title</th>
              <th className="border border-gray-300 p-2 text-center">Artist</th>
              <th className="border border-gray-300 p-2 text-right">
                Duration
              </th>
            </tr>
          </thead>
          <tbody className={styled.tableBody}>
            {currentList.songs.map((song, index) => (
              <React.Fragment key={song.id}>
                <tr className="h-10 flex justify-between items-center" onClick={() => playSong(song)}>
                  <td className="p-2 text-left flex items-center gap-9">
                    {song.image && (
                      <img
                        src={song.image}
                        alt={song.title}
                        className={styled.imgList}
                      />
                    )}
                    <span className="truncate flex-1">{song.title}</span>
                  </td>
                  <td className="p-2 text-center flex-1 truncate">
                    {song.artists.join(", ")}
                  </td>
                  <td className="p-2 text-right flex-1">
                    {formatDuration(song.durationInMs)}
                  </td>
                </tr>
                {index < currentList.songs.length - 1 && (
                  <tr>
                    <td colSpan="3">
                      <hr className={styled.line} />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SongBox;
