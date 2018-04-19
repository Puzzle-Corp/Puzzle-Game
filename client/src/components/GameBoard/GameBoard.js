import React from "react";
import Piece from "../Piece";
import "../../assets/css/game.css";

const GameBoard = (props) =>{

    return(
        <div className="gameBoard" id="gameBoard"
        onDrop={props.handleDrop}
        onDragOver={props.handleDragOver}>
        {props.children}
        </div>
    );

};


  export default GameBoard;