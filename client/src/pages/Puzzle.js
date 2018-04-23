import React, { Component } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/Dropdown";
import "../App.css";


class Puzzle extends Component {
    state = {
        levelCategories: [],
        rootCategories: [],
        gamesList: [],
        currentCatPath: "",
    };
    componentDidMount() {
        this.loadAllData();
    }
    loadAllData = () => {
        var catName = "";
        API.getCategories()
            .then(res => this.setState({ rootCategories: res.data }))
            .catch(err => console.log(err));

        if (this.props.match.path !== "/categories/:_id/:id") {
            catName = this.props.match.params.id;
        }
        else if (this.props.match.path === "/categories/:_id/:id") {
            catName = this.props.match.params._id;
        }
        console.log("Cat Name: " + catName);
        this.setState({ currentCatPath: catName });
        API.getCategoriesByParent(catName)
            .then(res => { this.setState({ levelCategories: res.data }); console.log(res.data); })
            .catch(err => console.log(err));


        var gameCat = this.props.match.params.id;
        console.log("game cat to search: " + gameCat);


    }
    
    render() {
        // To see what are available from props?
        console.log(this.props);
        return (
            <div className="navWrapper">
                <div className="category">
                    <h3>Categories:</h3>
                    {this.state.rootCategories.length ? (
                        <List>
                            {this.state.rootCategories.map(category => (
                                <ListItem key={category._id}>
                                    <a href={"/categories/" + category.id}>
                                        <strong>
                                            {category.name}
                                        </strong>
                                    </a>

                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3>There is NO Category.</h3>
                        )}
                </div>
                <div className="subCategory">
                    <h3>Sub Categories:</h3>
                    {this.state.levelCategories.length ? (
                        <List>
                            {this.state.levelCategories.map(category => (
                                <ListItem key={category._id}>
                                    <a href={"/categories/" + this.state.currentCatPath + "/" + category.id}>
                                        <strong>
                                            {category.name}
                                        </strong>
                                    </a>

                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3>No Sub Categories to Display</h3>
                        )}
                </div>
                <div className="games">
                    <h3>Games:</h3>
                    {this.state.gamesList.length ? (
                        <List>
                            {this.state.gamesList.map(game => (
                                <ListItem key={game._id}>
                                    <a href={"/gamePage/" + game.id}>
                                        <strong>
                                            {game.name}
                                        </strong>
                                    </a>

                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3>No Games to Display</h3>
                        )}
                </div>
            </div>
        )
    }
}


export default Puzzle;