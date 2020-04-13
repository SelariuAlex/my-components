import React, { useState } from "react";
import "./FlipCard.css";

function FlipCard() {
  const [isFliped, setIsFliped] = useState(false);

  return (
    <div
      className={`card ${isFliped ? "flip" : ""}`}
      onClick={() => setIsFliped(!isFliped)}
    >
      <div className='front'>Front</div>

      <div className='back'>Back</div>
    </div>
  );
}

export default FlipCard;
