import "./App.css";
import React, {useState} from "react";



  function App() {


  const [zipList, setZipList]=useState([]);
  const[loading, setLoading]=useState(true);
  const[cityName,setCityName]=useState("(Enter a valid city name)")
  let nameHolder = ""

  

  const checkEntry = (event) => {
    

      fetch(`http://ctp-zip-api.herokuapp.com/city/${event.target.value.toUpperCase()}`).then((response)=>{
        response.json().then((data)=>{
          setZipList(data)
          setLoading(false)
        nameHolder=event.target.value.toLowerCase();
  nameHolder=nameHolder.charAt(0).toUpperCase() + nameHolder.slice(1);
  setCityName(nameHolder)
        })
        
      })
      .catch((err)=>console.error(err),
      setLoading(true), 
      setCityName("(Enter a valid city name)")
      )
      }

  
  return (
    <div className="App">
      <header className="city-search">City Search</header>

      <input type="text" id="Input" onChange={checkEntry}></input>

      <div id="header-zips">
      <header id="listHeader">Zipcodes in {cityName}</header>
      {loading===false ? zipList.map((item)=>(
      <div id="ZipArray">{item}</div>
          )) : <div id="ZipArray"></div> }   </div>
    </div>
  );

}



export default App;