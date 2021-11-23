import React from "react";


import VerticalCard from "./VerticalCard";

function Card(props) {
  const { cardType } = props;
  switch (cardType) {


    case "verticalCard":
      return <VerticalCard {...props} />;


  }
}

export default Card;
