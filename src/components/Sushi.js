import React, { useState } from "react";

function Sushi({ sushi, handleMoney, addEmptyPlate }) {

  const [ isGone, setIsGone ] = useState(false)

  function handleClick() {
    setIsGone(true);
    handleMoney(sushi.price);
    addEmptyPlate(sushi);
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {isGone ? null : (
          <img
            // src={/* Give me an image source! */ null}
            src={sushi.img_url}
            // alt={/* Give me a name! */ "Sushi"}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
