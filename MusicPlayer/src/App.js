import React, { useState } from "react";
//Styles
import "./styles/app.scss";
//Components
import Player from "./components/player";
import Song from "./components/song";

import data from "./utils";
function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
