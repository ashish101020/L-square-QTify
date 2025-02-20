import React, { useContext, useState } from "react";
import {
  CurrentListContext
} from "./helpers/CurrentListContext";
import Home from "./components/Home/Home";
import Navbar from "../src/components/Navbar/Navbar";
import Playlist from "./components/Playlist/Playlist";
import Player from "./components/Player/Player";
import { Route, Routes } from "react-router-dom";

function App() {
  const { currentList } = useContext(CurrentListContext);
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  return (
    <>
      <Navbar searchData={[...topAlbums, ...newAlbums]}/>
      <div style={{paddingTop:'74px', paddingBottom:'116px'}}>
        <Routes>
          <Route
            path="/"
            element={
              <Home setTopAlbums={setTopAlbums} setNewAlbums={setNewAlbums} />
            }
          />
          <Route path={`/album/${currentList?.slug}`} element={<Playlist />} />
        </Routes>
      </div>
      <Player />
    </>
  );
}

export default App;
