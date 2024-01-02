import React from "react";



function Card(props){
    return <div className="container">
        <span>{props.emoji}</span>
        <h3>{props.name}</h3>
        <p>{props.image}</p>
    </div>
}
export default Card;