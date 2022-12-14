import React from "react";
import "./cardstyle.css";
export const Card = (props) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.monster.id}?set=set5&size=180x180`}
      alt="not found"
    />
    <h1>{props.monster.name}</h1>
  </div>
);
