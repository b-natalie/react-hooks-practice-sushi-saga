import React from "react";

function Table({ emptyPlates, moneyLeft }) {
  // renders an empty plate for every element in the array
  const emptyPlatesOnTable = emptyPlates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">
        You have: ${moneyLeft} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlatesOnTable}</div>
      </div>
    </>
  );
}

export default Table;
