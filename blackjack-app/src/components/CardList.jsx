import React from "react";
import Card from "./Card";

function CardList({ cards }) {
  return (
    <div>
      {cards.map(cardId => (
        <Card cardId={cardId} key={cardId} />
      ))}
    </div>
  );
}

export default CardList;
