import "./App.css";
import React, {useState} from "react";



  function App() {


  const [zipList, setZipList]=useState([]);
  const[loading, setLoading]=useState(false);

  

  const checkEntry = (event) => {
    
      fetch(`http://ctp-zip-api.herokuapp.com/city/${event.target.value.toUpperCase()}`).then((response)=>{
        response.json().then((data)=>{
          setZipList(data)
          setLoading(true)
          //console.log(loading)
        //console.log(zipList)
        })
        
      })
      .catch((err)=>console.error(err)) 
      }

      console.log(JSON.stringify(zipList))
  
  return (
    <div className="App">
      <header className="city-search">City Search</header>

      <input type="text" onChange={checkEntry}></input>
      <div id="ZipArray">{JSON.stringify(zipList)}</div>
    </div>

  );
}



export default App;