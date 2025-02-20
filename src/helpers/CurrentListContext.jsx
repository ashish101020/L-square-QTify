import { createContext, useState } from "react";

export const CurrentListContext = createContext();
export const CurrentSongContext = createContext();

export const CurrentListProvider = ({ children }) => {
  const [currentList, setCurrentList] = useState([]);

  return (
    <CurrentListContext.Provider value={{ currentList, setCurrentList }}>
      {children}
    </CurrentListContext.Provider>
  );
};
export const CurrentSongProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState([]);

  return (
    <CurrentSongContext.Provider value={{ currentSong, setCurrentSong }}>
      {children}
    </CurrentSongContext.Provider>
  );
};
