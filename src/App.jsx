import axios from "axios";
import { useEffect, useState } from "react";
import UrlItem from "./components/UrlItem";
import './App.css'


function App() {
  const [locationType, setLocationType] = useState({});
  const [typeId, setTypeId] = useState("");

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 18) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomId}/`)
      .then((res) => setLocationType(res.data));
  }, []);

  const searchType = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${typeId}/`)
      .then((res) => setLocationType(res.data));
  };

  console.log(locationType);

  return (
    <div className="App">
      <h1>{locationType.name}</h1>
      <input
        type="text"
        value={typeId}
        onChange={(e) => setTypeId(e.target.value)}
      />
      <button onClick={searchType}>Search</button>
      <ul className="rickAndMorty-container">
      {locationType.residents?.map((resident) => (
       <UrlItem url={resident} key={resident}/>
      ))}
      </ul> 
      
    </div>
  );
}

export default App;
