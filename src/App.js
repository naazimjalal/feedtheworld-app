import './App.css';
import React, {useEffect} from 'react';
import Hot_bowl from './Media/hotbowl.png';
import  MapContent from './Map'
import db from './Pages/feedtheworld-app-default-rtdb-export.json'
import Credits from './credit'
import firebaseConfig from './Database'
import firebase from 'firebase';
import {Button}from '@material-ui/core';
import Pay from './Pages/Pay'
import AddIcon from '@material-ui/icons/Add';
const button = {
  width: '300px',
  borderRadius: '8px',
  fontFamily: 'Platform',
  fontSize: '19px',
  paddingRight: '43px',
  color: 'white',
  background: 'linear-gradient(45deg, #83eaf1, #63a4ff)',
}
const button1 ={
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  padding: '11px',
  width: '389px',
  fontFamily: 'Platform',
  fontSize: '21px',
  borderRadius: '32px',
  background: 'linear-gradient(45deg, #09c6f9, #045de9)',
}
function App() {
  const [data, setdata] = React.useState(db)
  const [clicked, setclicked] = React.useState(false)
  
  function Loadleaderboard(){
    setclicked(true)
    document.getElementById('load_leaderboard_button').style.display = 'none';
    document.getElementById('leaderboard').style.display = "block";
  }
  alert("This website is made by Naazim Jalal")
  return (
    <div className="App">
      <div className="title">
        <h1>Feed The World App</h1>
      </div>
      <br />
      <div className="map-container">
        <MapContent />
      </div>
      <br />
      <div className="container">
        <div className="icon-holder">
          <img src={Hot_bowl} alt="hot bowl icon" className="hot-bowl-icon"/>
        </div>
        <Button variant="contained" style={button} onClick={()=>{Pay(495)}}>< AddIcon /> &emsp; Send a meal</Button>
      </div>
      <br />
      <div className="leader-board">
        <Button variant="contained" color="primary" id="load_leaderboard_button" onClick ={Loadleaderboard} style={button1}>Load the Leaderboard</Button>
        <div className="board" id="leaderboard">
        <br />
        <Credits name={data[1].name} img={data[1].img} loc={data[1].loc} />
        <br />
        <Credits name={data[2].name} img={data[2].img} loc={data[2].loc} />
        <br />
        <Credits name={data[3].name} img={data[3].img} loc={data[3].loc} />
        <br />
        <Credits name={data[4].name} img={data[4].img} loc={data[4].loc} />
        <br />
        <Credits name={data[5].name} img={data[5].img} loc={data[5].loc} />
        <br />
        <Credits name={data[6].name} img={data[6].img} loc={data[6].loc} />
        <br />
        <Credits name={data[7].name} img={data[7].img} loc={data[7].loc} />
        <br />
        </div>
      </div>
      
    </div>
  );
}

export default App;
