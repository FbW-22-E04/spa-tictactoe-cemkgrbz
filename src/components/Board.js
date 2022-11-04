import React from "react";
import { useState } from "react";
// import Square from "./Square"

function Board() {

  const [turn, setTurn] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState()

  const checkWinner = (cells) => {

    const combos = {
      across: [[0,1,2], [3,4,5], [6,7,8]],
      down: [[0,3,6], [1,4,7], [2,5,8]],
      diagonal: [[0,4,8], [2,4,6]]
    }
  
    for ( let combo in combos) {
       combos[combo].forEach(element => {
        console.log(element)
        if (
        cells[element[0]] === "" || 
        cells[element[1]] === "" || 
        cells[element[2]] === "") {
  
        } else if (
          cells[element[0]] === cells[element[1]] &&
          cells[element[1]] === cells[element[2]]) {
            setWinner(cells[element[0]]);
          }
        
       });
    }
  }
  
  const handleClick = (num) => {
    if(squares[num] !== "") {
      alert("Already clicked!!")
      return;
    }

    let cells = [...squares]

    if (turn === "X") {
      cells[num] = "X";
      setTurn("O");
    } else {
      cells[num] = "O";
      setTurn("X")
    }

    setSquares(cells);
    checkWinner(cells);
  }

  const handleStart = () => {
    setWinner(null);
    setSquares(Array(9).fill(""))

  }

  function Square({ num }) {

    return <div className="square" onClick={() => handleClick(num)}>{squares[num]}</div>
  }

    return (
      
        <div className="d-flex">
          <div className="board">
            <Square num={0}/>
            <Square num={1}/>
            <Square num={2}/>
            <Square num={3}/>
            <Square num={4}/>
            <Square num={5}/>
            <Square num={6}/>
            <Square num={7}/>
            <Square num={8}/>
          </div>
          <div>
            <div className="h2 ">Next player is {turn}</div>
            <button onClick={()=> handleStart()}>Restart the game</button>
            
            {winner && (
              <div className="h2 fw-bold mt-5">Winner is {winner}</div>
            )}
          </div>
        </div>
    );
  }

export default Board; 