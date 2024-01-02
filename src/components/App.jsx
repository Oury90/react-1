import React from "react";
import Card from "./Card";
import emojisItem from "../emoji";



function App(){
    return <div>
        <h1>Amadou Oury Diallo</h1>
        <div className="container-box">
            {emojisItem.map(
                emoji => <Card 
                    emoji= {emoji.character}
                    name= {emoji.name}
                    image= {emoji.subgroup}
                />
            )}
        </div>
    </div>
}
export default App;