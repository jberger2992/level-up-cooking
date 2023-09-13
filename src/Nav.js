import React from "react";

function Nav(props){
    return(<>
        <div className="row margin-4 justify-content-center">
            <button className="nBtn col-3" onClick={props.setPage("recipes")}>Recipes</button>
            <button className="nBtn col-3" onClick={props.setPage("home")}>Home</button>
            <button className="nBtn col-3" onClick={props.setPage("kitchen")}>Kitchen</button>
        </div>
    </>)
};

export default Nav;