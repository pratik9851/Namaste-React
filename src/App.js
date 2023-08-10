import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Board from "./TictacToeGame/Board";


const AppLayout=()=>{
    return(<div className="appContainer">
        <Header/>
        <Body/>
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Board/>);
