import React from "react";

export default function RecipeCard(props){
    return(
        <div className="kCard">
            <h3 id={props.id}>{props.name}</h3>
            {props.ingredients.map(data=><li className="list-group-item">{data}</li>)}
            <a className="aKitchen" rel="noreferrer" href={props.link} target="_blank">YouTube Episode</a>
        </div>
    )
}