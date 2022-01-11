import "./App.css";
import React, {useState} from "react";



  function App() {


  const [cityName, setCityName]=useState("");
  const [zipList, setZipList]=useState([]);

  /*const fetchData=async ()=>{
    const result = await fetch(`http://ctp-zip-api.herokuapp.com/zip/${zipCode}`);
    const data=await result.json();
    console.log(data);
    return data;
    }*/

  const checkEntry = (event) => {
    
    if(event.target.value.length===5){
      setCityName(event.target.value)
      console.log(cityName)
      fetch(`http://ctp-zip-api.herokuapp.com/zip/${cityName}`).then((response)=>{
        response.json().then((data)=>{
          setZipList(data)
        console.log(zipList)
        })
        
      })
      .catch((err)=>console.error(err)) 
      }
  }
  return (
    <div className="App">
      <header className="city-search">City Search</header>

      <input type="submit" onChange={checkEntry}></input>
      
      {zipList.map((item) => ( 
                <ul key = { item.RecordNumber } >
                    <li>State: {item.State}</li>
                    <li>Location: {item.Location},</li>
                    <li>Total Wages: {item.TotalWages}</li>
                    </ul>))}
    </div>

  );
}



export default App;