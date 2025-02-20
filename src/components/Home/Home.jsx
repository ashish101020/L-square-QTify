import React from 'react'
// import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Album from '../Album/Album';

const Home = ({setNewAlbums, setTopAlbums}) => {
  // const [topAlbums, setTopAlbums] = useState([]);
  // const [newAlbums, setNewAlbums] = useState([]);
  
  return (
    <>
      {/* <Navbar searchData={[...topAlbums, ...newAlbums]} /> */}
      <Hero />
      <Album title="Top Albums" Package="albums/top" genre={false} onDataFetch={setTopAlbums} />
      <Album title="New Albums" Package="albums/new" genre={false} onDataFetch={setNewAlbums} />
      <Album title="Songs" Package="songs" genre={true} />
    </>
  )
}

export default Home