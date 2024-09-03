function Cell({ id, cell, go, setGo, cells, setCells, winMessage }) {
  const handleClick = (event) => {
    if (!winMessage) {
      const taken =
        event.target.firstChild?.classList.contains("circle") ||
        event.target.firstChild?.classList.contains("cross") ||
        event.target.classList.contains("circle") ||
        event.target.classList.contains("cross");

      if (!taken) {
        if (go === "circle") {
          event.target.firstChild.classList.add("circle");
          handleCellChange("circle");
          setGo("cross");
        }
        if (go === "cross") {
          event.target.firstChild.classList.add("cross");
          handleCellChange("cross");
          setGo("circle");
        }
      }
    }
  };
  const handleCellChange = (className) => {
    const nextCells = cells.map((cell, index) => {
      if (index === id) {
        return className;
      } else {
        return cell;
      }
    });
    setCells(nextCells);
  };
  return (
    <div className="square" id={id} onClick={handleClick}>
      <div className={cell}></div>
    </div>
  );
}

export default Cell;
