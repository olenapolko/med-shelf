import React from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";
import { ThreeDots } from "react-loader-spinner";
import TravelTimeDisplay from "./TimeDisplay/TimeDisplay";

import styles from "./mapWrapper.module.scss";

function MapWrapper() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries: ["places"],
    language: "en",
  });

  const renderMap = () => <Map />;
  return (
    <>
      {isLoaded ? (
        <>
          {renderMap()}
          <p className={styles.mapInstructions}>
            Click twice to set your address &#128523;
          </p>
          <TravelTimeDisplay />
        </>
      ) : loadError ? (
        "Can't connect to Google Maps, sorry."
      ) : (
        <ThreeDots
          visible={true}
          height="40"
          width="40"
          color="#00673a"
          ariaLabel="loading-indicator"
        />
      )}
    </>
  );
}

export default React.memo(MapWrapper);
