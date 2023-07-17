import "./menu.css";
import arr from "./App.js";
import Res from "./Res.js";
// const fun= () =>{
//  const a=[
//   {
//     iname={obj.name},
//     image:{obj.image},
//   }
//  ]
//  arr=[...arr,...a]
// }
export default function Menu(props) {
  const myArray = [
    {
      id: "Menu1",
      name: "Mandi",
      image: require("./mandi.jpg"),
    },
    {
      id: "Menu2",
      name: "chicken wings",
      image: require("./wings.jpg"),
    },
    {
      id: "Menu3",
      name: "Chilli chicken",
      image: require("./chilli.jpg"),
    },
    {
      id: "Menu4",
      name: "Panner 65",
      image: require("./panner.jpg"),
    },
    {
      id: "Menu5",
      name: "Gobi manchuriya",
      image: require("./gobi.jpg"),
    },
  ];
  return (
    <div className="x">
      <h1>Menu</h1>
      <div className="flec">
        <ul>
          {myArray.map((obj,idx) => (
            <div key={idx} onClick={()=>{
              props.setfn((prev)=>{
                console.log(prev)
                return(
                  [...prev,obj]
                )
              })
            }} className="card">
              <li key={obj.id}>
                <img
                  src={obj.image}
                  alt={obj.name}
                  width="160px"
                  height="160px"
                />
                <div className="container">{obj.name}</div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
