import React,{Component} from "react";
import API from "../utils/API";
import {List,ListItem} from "../components/Dropdown";

class Puzzle extends Component{
    state={
        rootCategories:[],
        levelCategories:[]
    };
    componentDidMount(){
        this.loadCategories();
        this.loadLevelCategories();
    }
    loadCategories=() =>{
        API.getCategories()
        .then(res => this.setState({rootCategories:res.data}))
        .catch(err => console.log(err));
    }

    loadLevelCategories=() =>{
        API.getCategoriesLevel("Jigsaw Puzzle")
        .then(res => this.setState({levelCategories:res.data}))
        .catch(err => console.log(err));
    }
    render(){
        return(
            <div>
            {this.state.levelCategories.length ? (
                <List>
                  {this.state.levelCategories.map(category => (
                    <ListItem key={category._id}>
                      <a href={"/categories/" + category._id}>
                        <strong>
                          {category.name}
                        </strong>
                      </a>
                     
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
         <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              
              </div>
        )
    }
}


export default Puzzle;