import React, { useContext } from "react";
import { CurrentSongContext } from "../../helpers/CurrentListContext";
import styled from './Player.module.css';

const Player = () => {
    const { currentSong } = useContext(CurrentSongContext);
  return (
    <>
    <div className={styled.player}>
    <div className={styled.playHero}>
        <div className={styled.imageDiv}><img src={currentSong.image} alt="" className={styled.image}/></div>
        <div>{currentSong.title}</div>
    </div>
    <div>
        {currentSong.durationInMs}
    </div>
    </div>
    </>
  )
}

export default Player