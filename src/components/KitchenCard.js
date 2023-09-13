import React from "react";

export default function KitchenCard(props){
    return(
        <div className="kCard">
            <h3 id={props.id}>{props.name}</h3>
            <p>{props.description}</p>
            <a className="aKitchen" rel="noreferrer" href={props.link} target="_blank">Link</a>
        </div>
    )
}