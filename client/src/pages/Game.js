import React, { Component } from "react";
import Piece from "../components/Piece";
import "../assets/css/game.css";
import RandomBoard from "../components/RandomBoard";
import GameBoard from "../components/GameBoard";
import API from "../utils/API";

class Game extends Component {
    state = {
        pieces: [],
        maxCol: 0,
        maxRow: 0,
        coordinateArr: [],
        score: 0,
        gameName: ""
    };
    componentDidMount() {
        this.loadGamePieces();
    }
    loadGamePieces = () => {
        var gameCat = this.props.match.params.id;
        console.log("this is props: " + gameCat);
        API.getPiecesByGameId(this.props.match.params.gameId)
            .then(res => {
                //Randomizing after loading by shuffle function
                this.setState({ pieces: this.shuffle(res.data[0].assets), gameName: res.data[0].name });
                this.state.pieces.map(p => {
                    this.handleColRow(p.coordinate);
                });
            })
            .catch(err => console.log(err));

    };
    // shuffle algorithm 
    shuffle = (array) => {
        var copy = [], n = array.length, i;
        while (n) {
            i = Math.floor(Math.random() * array.length);
            if (i in array) {
                copy.push(array[i]);
                delete array[i];
                n--;
            }
        }
        return copy;
    }
    // piece: {id: 1, position: "randomBoard", url: "./Game-1/0-0.jpg", coordinate: "0-0", isPlaced: 0}
    findColRowRandom = (piecesRandomBoard, piece) => {
        var indexOfPiece = piecesRandomBoard.indexOf(piece);
        var x_y = [0, 0];
        if (indexOfPiece === -1) {
            console.log("Error. Something is wrong.")
            return [0, 0];
        }
        else {
            x_y[0] = indexOfPiece % this.state.maxCol;
            x_y[1] = indexOfPiece / this.state.maxCol;
        }
        return x_y;
    }
    findColRowGame=(coordinate) =>{
        var splitArr = coordinate.toString().trim().split("-");
        return splitArr;
    }
    handleColRow = (coordinate) => {
        if (!this.state.coordinateArr.includes(coordinate)) {
            this.state.coordinateArr.push(coordinate);
        }
        var splitArr = coordinate.toString().trim().split("-");
        var maxCol = parseInt(splitArr[1]) + 1;
        if (this.state.maxCol < maxCol) {
            this.setState({
                maxCol: maxCol
            });
        }
        var maxRow = parseInt(splitArr[0]) + 1;
        if (this.state.maxRow < maxRow) {
            this.setState({
                maxRow: maxRow
            });
        }
    }
    //Drag Start event 1
    handleDragStart = (event, coordinate) => {
        // console.log(coordinate);
        event.dataTransfer.setData("text/plain", coordinate);
    }

    // Drop event 3 
    handleDrop = (event, pos) => {
        event.preventDefault();
        var key = event.dataTransfer.getData("text");
        var score = this.state.score;
        var flag = false;
        var pieces = this.state.pieces.filter((p) => {
            if (p.coordinate === key && key === event.target.id) {
                p.isPlaced = 1;
                score++;
                flag = true;
            }
            //console.log("score: " + score);
            return p;
        });
        if (!flag) { score--; }
        this.setState({
            ...this.state, pieces
        });
        this.setState({ score: score });
    }
    // Drag Over event 2
    handleDragOver = (event) => {
        event.preventDefault();
    }



    render() {
        var pieces = {
            randomBoard: [],
            gameBoard: []
        }
        this.state.pieces.forEach((p) => {
            pieces[p.position].push(
                p
            );
        });
        pieces.gameBoard.push.apply(pieces.gameBoard, pieces.randomBoard);

        return (
            <div className="container">
                <div className="row">
                    {this.state.pieces.length ? (
                        <h1 className="text-center">Play:{this.state.gameName}</h1>
                    ) : (
                            <h1 className="text-center">Game is not available.</h1>
                        )}
                </div>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-4 text-center">
                        <RandomBoard
                            handleDragOver={this.handleDragOver}
                            handleDrop={(e) => { this.handleDrop(e, "randomBoard") }}
                            style={{ gridTemplateColumns: "repeat(" + (parseInt(this.state.maxCol) + 1) + ", 1fr)" }}
                        >
                            {}

                            {pieces.randomBoard.map(p =>
                                <Piece

                                    key={p.id}
                                    id={p.id}
                                    url={p.isPlaced === 0 ? p.url : null}
                                    handleDragStart={(event) => this.handleDragStart(event, p.coordinate)}
                                    coordinate={p.coordinate}
                                    draggable
                                    style={{ gridColumn: parseInt(this.findColRowRandom(pieces.randomBoard, p)[0]) + 1, gridRow: parseInt(this.findColRowRandom(pieces.randomBoard, p)[1]) + 1 }}
                                    className={"piece"}
                                />
                            )}

                        </RandomBoard>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-4 text-center">
                        <GameBoard
                            handleDragOver={this.handleDragOver}
                            handleDrop={(e) => { this.handleDrop(e, "gameBoard") }}
                            style={{ gridTemplateColumns: "repeat(" + (parseInt(this.state.maxCol) + 1) + ", 1fr)" }}
                        >
                            {pieces.gameBoard.map(p =>
                                <Piece
                                    key={p.id}
                                    id={p.id}
                                    url={p.isPlaced === 1 ? p.url : null}
                                    handleDragStart={(event) => this.handleDragStart(event, p.coordinate)}
                                    coordinate={p.coordinate}
                                    draggable
                                    style={{ gridColumn: parseInt(this.findColRowGame(p.coordinate)[1]) + 1, gridRow: parseInt(this.findColRowGame(p.coordinate)[0]) + 1 }}
                                    className={"piece"}
                                />
                            )}
                        </GameBoard>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
                <br /><br />
                {this.state.pieces.length ? (
                    <div className="row">
                        <div className="col-sm-4">
                            <img className="Img" src={"../../../" + this.state.gameName + "/" + this.state.gameName + ".jpg"} width="150px" height="100px" />
                        </div>
                        <div className="col-sm-4">

                        </div>
                        <div className="col-sm-4">
                            <h3 >Score:<span className="score"> {this.state.score}</span></h3>
                        </div>

                    </div>
                ) : (
                        <div></div>
                    )}
            </div>
        );
    }

}

export default Game;