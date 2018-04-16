import React, { Component } from "react";
import "../assets/css/DragDropApp.css";

export default class DragDropApp extends Component {
    // step - 1
    state={
        items:[
            {id:1,name:"item 1 ",position:"store", bgcolor:"yellow"},
            {id:2,name:"item 2 ",position:"store", bgcolor:"pink"},
            {id:3,name:"item 3 ",position:"store2", bgcolor:"skyblue"},
            {id:4,name:"item 4 ",position:"cart", bgcolor:"red"},
        ]
    }
    //step to create event handlers
    onDragStart=(event,id) =>{
        console.log("dragstart:" ,id);
        event.dataTransfer.setData("id",id);
    }
    onDragOver=(event) =>{
        event.preventDefault();
      //  console.log("on drag over");
    }
    onDrop=(event,pos) =>{
        var key=event.dataTransfer.getData("id");
        //console.log("key:"+key);
        var items=this.state.items.filter((item) =>{
          //  console.log(pos+" ---- "+key);
            if(item.id==key){
                item.position=pos;
                console.log(item);
            }
           // console.log(item);
            return item;
        });
        this.setState({
                ...this.state,items
        });
    }
    render() {
        //step 2
        var items={
            store:[],
            cart:[],
            store2:[]
        }

        //step 3 is state:
        this.state.items.forEach((item) => {
            items[item.position].push(
                <div key={item.id} className="draggable"
                onDragStart={(event)=>this.onDragStart(event,item.id)}
                // draggable attribute cause to be able drag it in browser
                 draggable
                 style={{backgroundColor:item.bgcolor}}
                 >
                 {item.id}
                 </div>
            );
        });

        return (
            <div className="container-drag">
               <h1 className="header"> Drag & Drop App</h1>
                <div className="store"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e,"store")}}>
                    <span className="store-header">STORE</span>
                        {items.store} 
                </div>
                {/* ok I have to find a way to generate store to  n store */}
                <div className="store"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e,"store2")}}>
                    <span className="store-header">STORE2</span>
                        {items.store2} 
                </div>

                <div className="droppable"
                 onDragOver={(e) => this.onDragOver(e)}
                 onDrop={(e)=>this.onDrop(e,"cart")}>
                <span className="store-header">CART</span>
                    {items.cart}
                </div>
            </div>
        );
    }
}