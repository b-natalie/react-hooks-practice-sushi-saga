import React, { useEffect, useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ fourDisplayed, clickShowMore, isEaten, handleEat, handleMoney, addEmptyPlate }) {

  return (
    <div className="belt">
      {fourDisplayed.map(sushi => <Sushi key={sushi.id} sushi={sushi} isEaten={isEaten} handleEat={handleEat} handleMoney={handleMoney} addEmptyPlate={addEmptyPlate}/>)}
      <MoreButton clickShowMore={clickShowMore}/>
    </div>
  );
}

export default SushiContainer;
