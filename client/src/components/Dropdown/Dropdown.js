import React from "react";

export const Dropdown = ({ children }) => {
    return (
        <div className="dropdown">
            <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Game Category
    <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
              
            </ul>
        </div>
    );
};