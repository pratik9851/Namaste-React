import React,{useState} from "react";
import Square from "./Square";


const Board=()=>{
const [state,setState]=useState(Array(9).fill(null))
const [isxTurn,setxTurn]= useState(true)

const checkWinner=()=>{
    const winnerLogic=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

    for(let logic of winnerLogic){
       const [a,b,c]=logic
       if(state[a]!==null && state[a]===state[b] && state[a]===state[c]){
        return state[a]
       }
    }
    return false
}

const isWinner=checkWinner()

const handelclick=(index)=>{
    const copyState=[...state]
    copyState[index]=isxTurn?"X":"O"

    setState(copyState)
    setxTurn(!isxTurn)

}
console.log(isWinner)
    return(
        <div className="board-container">
            {isWinner?<div>{isWinner} is winner</div>
               :<> <div className="board-row">
                    <Square onClick={() => handelclick(0)} value={state[0]} />
                    <Square onClick={() => handelclick(1)} value={state[1]} />
                    <Square onClick={() => handelclick(2)} value={state[2]} />
                </div>
                <div className="board-row">
                    <Square onClick={() => handelclick(3)} value={state[3]} />
                    <Square onClick={() => handelclick(4)} value={state[4]} />
                    <Square onClick={() => handelclick(5)} value={state[5]} />
                </div>
                <div className="board-row">
                    <Square onClick={() => handelclick(6)} value={state[6]} />
                    <Square onClick={() => handelclick(7)} value={state[7]} />
                    <Square onClick={() => handelclick(8)} value={state[8]} />
                </div>
            </>
}
        </div>
    )
}

export default Board