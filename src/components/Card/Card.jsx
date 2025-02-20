import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  CurrentListContext,
  CurrentSongContext,
} from "../../helpers/CurrentListContext";
import styles from "./Card.module.css";

const Card = ({ pack }) => {
  const navigate = useNavigate();
  const { setCurrentList } = useContext(CurrentListContext);
  const { setCurrentSong } = useContext(CurrentSongContext);

  const show = (pack) => {
    setCurrentList(pack);
    navigate(`/album/${pack.slug}`);
  };

  const play = (pack) => {
    setCurrentSong(pack);
    // navigate(`/playing/${pack.id}`);
  };

  return (
    <>
      {/* <div
        className={styles.card}
        {...(pack.songs ? { onClick: () => show(pack) } : { onClick: () => play(pack) })}
      > */}
      <div
        className={styles.card}
        onClick={() => (pack.songs ? show(pack) : play(pack))}
      >
        <img src={pack.image} alt="" className={styles.image} />
        {pack.follows && (
          <div className={styles.follows}>
            <p>{pack.follows} Follows</p>
          </div>
        )}
        {pack.likes && (
          <div className={styles.likes}>
            <p>{pack.likes} Likes</p>
          </div>
        )}
      </div>
      <h3 className={styles.title}>{pack.title}</h3>
    </>
  );
};

export default Card;
