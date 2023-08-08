import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", {}, "Hello World From React!");
const jsxHeading=<h1 id="heading">Hello World From React!</h1>

const HeadingComponet=()=>{
    return <h1>Hello World From React! with functional component</h1>
}



const HeaderComponent=()=>{
    return (
        <div className="headerContainer">
            <div className="LogoContainer">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6JGUehk9zFStIp1pXsFKnaQvQrw6zasPKAw&usqp=CAU" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>cart</li>
                </ul>
            </div>

        </div>
    )
}

const RestaurantCard=()=>{
    return(
        <div className="res-cardContainer">
            <img alt="res-logo" className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426"/>
            <h3>KFC</h3>
            <h4>Fried Chicken</h4>
            <h4>4.1 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const BodyComponent=()=>{
    return(
        <><div className="searchbar">Search</div>
        <div className="res-container">
            <RestaurantCard/>
            
            </div></>
    )
}


const AppLayout=()=>{
    return(<div className="appContainer">
        <HeaderComponent/>
        <BodyComponent/>
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
