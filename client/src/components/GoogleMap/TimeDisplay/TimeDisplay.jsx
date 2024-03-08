import React from "react";
import { useSelector } from "react-redux";

const TravelTimeDisplay = () => {
  const travelDuration = useSelector((state) => state.map.travelDuration);

  if (!travelDuration) return null;

  return (
    <div>
      <p>Estimated travel time by 🚗 : {travelDuration}</p>
    </div>
  );
};

export default TravelTimeDisplay;
