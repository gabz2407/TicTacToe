import { useEffect, useState } from "react";

import Cell from "./Cell";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winMessage, setWinMessage] = useState("");

  let message = "It is now " + go + "'s turn.";

  const checkScore = () => {
    const winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    winCombos.forEach((array) => {
      let circleWins = array.every((cell) => cells[cell] === "circle");
      if (circleWins) {
        setWinMessage("Circle Wins!");
      }
      let crossWins = array.every((cell) => cells[cell] === "cross");
      if (crossWins) {
        setWinMessage("Cross Wins!");
      }
    });
  };

  useEffect(() => {
    checkScore();
  }, [cells]);

  if (winMessage) {
    message = "";
  }

  return (
    <div className="App">
      <p>{message}</p>
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            go={go}
            setGo={setGo}
            cells={cells}
            setCells={setCells}
            winMessage={winMessage}
          />
        ))}
      </div>
      <p className="win-message">{winMessage}</p>
    </div>
  );
}

export default App;
