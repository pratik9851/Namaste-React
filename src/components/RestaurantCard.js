import React from "react"

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

export default RestaurantCard