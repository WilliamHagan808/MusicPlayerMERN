import React, { useState } from "react";
import axios from "axios";

function App() {
  const [songs, setSongs] = useState([]);

  const getSongs = async () => {
    try {
      let response = await axios.get(
        "http://www.devcodecampmusiclibrary.com/api/music"
      );
      console.log(response.data);
      setSongs(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  <button onClick={getSongs}>click</button>
  return (
    <div className="App">
  
  
  </div>
);
}




export default App;
