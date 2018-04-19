import React from "react";
import Piece from "../Piece";
import "../../assets/css/game.css";

const RandomBoard = (props) =>{

    return(
        <div className="randomBoard" id="randomBoard"
        onDrop={props.handleDrop}
        onDragOver={props.handleDragOver}>
        {props.children}
        </div>
    );

};


  export default RandomBoard;