import React from "react";
import "../assets/Card.css";

function Card({ cardId }) {
  return (
    <img
      className="Card"
      src={`https://deckofcardsapi.com/static/img/${cardId}.png`}
      alt={`${cardId} playing card`}
    />
  );
}

export default Card;
