import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import DetailSong from './components/DetailSong';
import ListSong from './components/ListSong';
import { Songs } from './Context';
import DataSongs from "./Data/songs.json";
import { useState } from "react";


function App() {
  const [song, setSong] = useState(DataSongs[0])
  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    if(!song) 
           setSong(DataSongs[0])
    else
           setSong(song)
  }
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handleSetSong}}>
        <Navbar/>
        <div className='grid grid-cols-3 bg-slate-800 h-screen-navbar-player'>
          <DetailSong/>
          <ListSong/>
        </div>
        </Songs.Provider>
    </div>
  );
}

export default App;
