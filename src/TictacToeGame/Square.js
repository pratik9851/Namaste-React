import React from "react";

const Square=({value, onClick})=>{
    return(
        <div style={{border:"1px solid", height:"100px", width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}} onClick={onClick} className="square">
            <h5>{value}</h5>
        </div>
    )
}

export default Square;