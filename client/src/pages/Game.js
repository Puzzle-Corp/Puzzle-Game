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
        score: 0
    };
    componentDidMount() {
        this.loadGamePieces();
    }
    loadGamePieces = () => {
        var gameCat = this.props.match.params.id;
        console.log("this is props: " + gameCat);
        API.getPiecesByGameId(this.props.match.params.gameId)
            .then(res => { this.setState({ pieces: res.data[0].assets }); console.log(res.data[0].assets); })
            .catch(err => console.log(err));
    };
    // shuffle algorithm Also - look into  $sample (aggregation) Mongodb
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
        return splitArr;
    }
    handleDragStart = (event, coordinate) => {
        console.log(coordinate);
        event.dataTransfer.setData("text/plain", coordinate);
    }

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
            console.log("score: " + score);
            return p;
        });
        if (!flag) { score--; }
        this.setState({
            ...this.state, pieces
        });
        this.setState({ score: score });
    }

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

        return (
            <div className="container">
                <div className="row">
                    {this.state.pieces.length ? (
                        <h1 className="text-center">Play:</h1>
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
                            {pieces.randomBoard.map(p =>
                                <Piece

                                    key={p.id}
                                    id={p.id}
                                    url={p.isPlaced === 0 ? p.url : null}
                                    handleDragStart={(event) => this.handleDragStart(event, p.coordinate)}
                                    coordinate={p.coordinate}
                                    draggable
                                    style={{ gridColumn: parseInt(this.handleColRow(p.coordinate)[0]) + 1, gridRow: parseInt(this.handleColRow(p.coordinate)[1]) + 1 }}
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
                            {pieces.randomBoard.map(p =>
                                <Piece
                                    key={p.id}
                                    id={p.id}
                                    url={p.isPlaced === 1 ? p.url : null}
                                    handleDragStart={(event) => this.handleDragStart(event, p.coordinate)}
                                    coordinate={p.coordinate}
                                    draggable
                                    style={{ gridColumn: parseInt(this.handleColRow(p.coordinate)[1]) + 1, gridRow: parseInt(this.handleColRow(p.coordinate)[0]) + 1 }}
                                    className={"piece"}
                                />
                            )}
                        </GameBoard>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <img src="../../../Game-1/Game-1.jpg" width="150px" height="100px" />
                    </div>
                    <div className="col-sm-4">
                        <h3 className="text-center">Score: {this.state.score}</h3>
                    </div>
                    <div className="col-sm-4">
                        <p>Time:</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default Game;