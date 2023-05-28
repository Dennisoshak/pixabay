import { useEffect, useState } from "react";
import Photos from "./components/Photos";
import "./App.css";
import axios from "axios";

function App() {
  const [category, setCategory] = useState("music");
  const [photos, setPhotos] = useState([]);
  const URL = `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}`;
  const getPhotos = async () => {
    const result = await axios.get(URL);
    console.log(result.data.hits);
    setPhotos(result.data.hits);
  };
  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div className="App">
      <Photos photos={photos} />
    </div>
  );
}

export default App;
