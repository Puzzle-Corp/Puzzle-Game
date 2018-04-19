import React from "react";
import Piece from "../components/Piece";
import "../assets/css/DragDropApp.css";
import RandomBoard from "../components/RandomBoard";
import GameBoard from "../components/GameBoard";

class Game3 extends React.Component {
    state = {
        // position :gameBoard or randomBoard
       pieces: [
            { id: 1, position: "randomBoard", url: "./0-0.jpg", coordinate: "0-0",isPlaced:0 },
            { id: 2, position: "randomBoard", url: "./1-0.jpg", coordinate: "1-0" ,isPlaced:0},
            { id: 3, position: "randomBoard", url: "./0-1.jpg", coordinate: "0-1",isPlaced:0 },
            { id: 4, position: "randomBoard", url: "./1-1.jpg", coordinate: "1-1" ,isPlaced:0},
          ],
       score:0,
       currentId:""
       /* id:1,
        position:"randomBoard",
        url:"./0-0-1-1.jpg",
        coordinate:"1-1",*/

    };
    handleDragStart = (event,coordinate) => {
        console.log(coordinate);
        this.state.currentId=coordinate;
        event.dataTransfer.setData("text/plain", coordinate);
    }

    handleDrop = (event, pos) => {
        event.preventDefault();
        var key = event.dataTransfer.getData("text");
        console.log("onDrop key: "+key);
        var pieces=this.state.pieces.filter((p)=>{
            if(p.coordinate==key && key==event.target.id){
                p.isPlaced=1;
            }
            return p;
        });
        this.setState({
            ...this.state,pieces
        });
      /*  if(key===event.target.id){

        console.log("onDrop key:" + key);
        //console.log("pos:"+pos);
        //console.log("coord:"+coord);
        console.log("current x,y:"+this.state.currentId);
        }*/
      //  if(this.state.id==key && this.state.coordinate==)

        //setState 

    }
    handleDragOver = (event) => {
        event.preventDefault();
    }

    render() {
        var pieces = {
            randomBoard: [],
            gameBoard: []
        }

        this.
        state.pieces.forEach((p) =>{
            pieces[p.position].push(
               p
            );
         /*  if(p.isPlaced==0){
            pieces["gameBoard"].push(
                p
            );
        }*/
        });
           
console.log(pieces);
        return (
            <div className="container-drag">
           
                <RandomBoard
                    handleDragOver={this.handleDragOver}
                    handleDrop={(e) => {this.handleDrop(e,"randomBoard")}}
                >
                    {pieces.randomBoard.map(p=>
                    <Piece
                        key={p.id}
                        id={p.id}
                        url={p.isPlaced==0 ? p.url : null}
                        handleDragStart={(event)=>this.handleDragStart(event,p.coordinate)}
                        coordinate={p.coordinate}
                        draggable
                        style={{backgroundColor:"yellow"}}
                        className={"piece"}
                    />
                )}
                </RandomBoard>


                <GameBoard
                 handleDragOver={this.handleDragOver}
                 handleDrop={(e) => {this.handleDrop(e,"gameBoard")}}
                >
                    {pieces.randomBoard.map(p=>
                    <Piece
                        key={p.id}
                        id={p.id}
                        url={p.isPlaced==1 ? p.url : null}
                        handleDragStart={(event)=>this.handleDragStart(event,p.coordinate)}
                        coordinate={p.coordinate}
                        draggable
                        style={{backgroundColor:"red"}}
                        className={"piece"}
                    />
                    )}
                </GameBoard>
        
        
            </div>
        );
    }

}

export default Game3;