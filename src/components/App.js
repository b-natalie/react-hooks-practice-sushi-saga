import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [ sushiArray, setSushiArray ] = useState([]);
  const [ startIndex, setStartIndex ] = useState(0);
  const [ moneyLeft, setMoneyLeft ] = useState(100);
  const [emptyPlates, setEmptyPlates ] = useState([]);

  const fourDisplayed = sushiArray.slice(startIndex, startIndex + 4)

  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then(sushiData => {
      setSushiArray(sushiData);
    })
  }, [])

  function clickShowMore() {
    setStartIndex(startIndex + 4)
  }

  const [ isEaten, setIsEaten ] = useState(false)

  function handleEat(event) {
    console.log(event.target);
    setIsEaten(!isEaten)
  }

  function handleMoney(sushiPrice) {
    setMoneyLeft(moneyLeft - sushiPrice)
  }

  function addEmptyPlate(sushi) {
    setEmptyPlates([...emptyPlates, sushi]);
  }

  return (
    <div className="app">
      <SushiContainer fourDisplayed={fourDisplayed} clickShowMore={clickShowMore} isEaten={isEaten} handleEat={handleEat} handleMoney={handleMoney} addEmptyPlate={addEmptyPlate}/>
      <Table moneyLeft={moneyLeft} emptyPlates={emptyPlates}/>
    </div>
  );
}

export default App;
