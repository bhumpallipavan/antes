import logo from './logo.png';
import './App.css';
import './res.css';
import Rec from './Rec.js';
import React, { useState } from 'react';
import slogo from './search-icon.png';
import Res from './Res.js';
import Ads from './Ads.js';
function App() {
  const [arr, setArr] = useState([
    {
      id: "rest1",
      rname: "Chikoos",
      iname: "mandi",
      image: require("./mandi.jpg"),
    },
    {
      id: "rest2",
      iname: "panner 65",
      rname: "sooma",
      image: require("./panner.jpg"),
    },
    {
      id: "rest3",
      rname: "StarDrive",
      iname: "chicken wings",
      image: require("./wings.jpg"),
    },
    {
      id: "rest4",
      rname: "Spicy bowl",
      iname: "chilli chiken",
      image: require("./chilli.jpg"),
    },
    {
      id: "rest5",
      rname: "Paradice",
      iname: "gobi",
      image: require("./gobi.jpg"),
    }
  ]);
  const [showMenu, setShowMenu] = useState(false);
  const [showRec, setRecMenu] = useState(false);
  const[showads,setshowads]=useState(false);

  const handleImageClick = () => {
    setShowMenu(true);
    setshowads(false);
  };
  
  const handlerecclick = () => {
    setRecMenu(true);
    setShowMenu(false);
    setshowads(false);
  };

  const handlechefclick = () => {
    setRecMenu(true);
    setShowMenu(true);
    setshowads(false);
  };

  const handlewrongimageclick = () => {
    setShowMenu(false);
    setRecMenu(false);
    setshowads(false);
  };

  const handleadsclick = () => {
    setShowMenu(false);
    setRecMenu(false);
    setshowads(true);
  };

  return (
    <div className="">
      <div className="navbar">
        <img src={logo} height="" width="" alt="hello" style={{ objectFit: "cover" }}></img>
        <ul >
          <li className="dashboard" onClick={handlewrongimageclick}>Dash board</li>
          <li className="recommended items" onClick={handlerecclick}>Recommended Items</li>
          <li className="restaurant" onClick={handleImageClick}>Restaurants</li>
          <li className="chef" onClick={handlechefclick}>Chef specials</li>
          <li className="stat" onClick={handlewrongimageclick}>Statistics</li>
          <li className="ads" onClick={handleadsclick}>Ads</li>
        </ul>
      </div>

      <div class="wrap">
        <div class="search">
          <input type="text" class="searchTerm" placeholder="What are you looking for?"></input>
          <button type="submit" class="searchButton">
            <img src={slogo} height="20px" width="30px" alt="search"></img>
          </button>
        </div>
      </div>

      <div className='ri'>
        {showRec && <Rec dataarray={arr}/>}
      </div>

      <div className='res' >
        {showMenu && <Res setfn={setArr} />}
      </div>

      <div className='ads'>
        {showads && <Ads/>}
      </div>

    </div>
  );
}

export default App;
