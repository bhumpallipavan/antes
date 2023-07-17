import "./res.css";
import Menu from './Menu';
import React, { useState } from 'react';
export default function Res(props) {
  const myArray = [
    {
      id: "rest1",
      name: "Chikoos",
      image: require("./chikoo.jpg"),
    },
    {
      id: "rest2",
      name: "sooma",
      image: require("./somaa.jpg"),
    },
    {
      id: "rest3",
      name: "StarDrive",
      image: require("./stardrive.jpg"),
    },
    {
      id: "rest4",
      name: "Spicy bowl",
      image: require("./bowl.jpg"),
    },
    {
      id: "rest5",
      name: "Paradice",
      image: require("./paradise.jpg"),
    }
  ];
  const [showMenu, setShowMenu] = useState(false);

  const handleImageClick = () => {
    setShowMenu(true);
  };
  return (
    <div className="container">
      <div className="res-container">
      <div className="x">
      <h1>Restaurants near you</h1>
      <div className="flec">
        <ul>
          {myArray.map((obj) => (
            <div className="card">
              <li key={obj.id}>
                <img
                  src={obj.image}
                  alt={obj.name}
                  width="160px"
                  height="160px"
                  onClick={handleImageClick}
                />
                <div className="container">{obj.name}</div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
    </div>
    {showMenu && <Menu setfn={props.setfn} />}
    </div>
  );
}
