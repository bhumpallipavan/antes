import "./res.css";
import Menu from './Menu';
import React, { useState } from 'react';
export default function Rec({dataarray}){
    return(
        <div className='recitems'>
        <ul>
          {dataarray.map((obj) => (

            <div className='maincard' style={{margin:10,borderWidth:1,borderColor:"lightgray",borderStyle:"solid",borderRadius:10,boxShadow:10}}>
              <li style={{listStyleType:"none"}} key={obj.id}>
                <img
                  src={obj.image}
                  alt={obj.iname}
                  width="160px"
                  height="160px"
                  style={{ objectFit: "cover" }}
                />
                <div className='container'>{obj.rname}</div>
              </li>
            </div>
            )
          )}
        </ul>
      </div>
    );
}