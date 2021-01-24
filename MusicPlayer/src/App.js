import React, { useState } from "react";
//Styles
import "./styles/app.scss";
//Components
import Player from "./components/Player";
import Song from "./components/Song";

import data from "./utils";
function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        isPlaying={isPlaying}
      />
    </div>
  );
}

export default App;
