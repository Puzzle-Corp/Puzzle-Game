import React from "react";
import "../../assets/css/game.css"

const Piece = props => (
  <div className={props.className} style={props.style} id={props.coordinate}>
    <img id={props.id} src={props.url} 
      onDragStart={props.handleDragStart} />
  </div>

);

export default Piece;

