import React from "react";
import "./card.css";
const Card = ({
  key,
  image,
  name,
  current_price,
  market_cap_change_percentage_24h,
  symbol
}) => {
  return (
    <div
      key={key}
      className={
        market_cap_change_percentage_24h > 0
          ? "coinParent bgGreen animate__fadeInBottomLeft animate__animated"
          : "coinParent bgRed animate__fadeInBottomRight animate__animated"
      }
    >
      <div>
        <img src={image} alt="icon" className="icon" />
        <span className="name">{name}</span>
      </div>
      <span className="price">{current_price}$ <span>{symbol}</span></span><br/><br/>
      <span className={market_cap_change_percentage_24h > 0 ? "green animate__flipInY animate__animated animate__delay-1s" : "red animate__flipInY animate__animated animate__delay-1s"}>
        {market_cap_change_percentage_24h}%
      </span>
    </div>
  );
};

export default Card;
