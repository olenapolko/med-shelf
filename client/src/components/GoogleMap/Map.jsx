import React, { useState } from "react";
import { GoogleMap } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import pharmacyIcon from "img/pharmacyIcon.svg";
import { DirectionsService, DirectionsRenderer } from "./Directions";
import { containerStyle, center, options } from "./constants";
import { useSelector } from "react-redux";
import selectShops from "store/shops/selectors";

function Map() {
  const [address, setAddress] = useState(null);
  const [route, setRoute] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { currentShop } = useSelector(selectShops);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center.current}
      zoom={9}
      options={options}
      onLoad={() => {
        setTimeout(() => {
          setIsLoaded(true);
        }, 50);
      }}
      onDblClick={({ latLng }) => {
        setAddress(latLng);
      }}
    >
      {isLoaded && (
        <Marker
          visible={!address}
          icon={pharmacyIcon}
            position={{ lat: currentShop.latitude, lng: currentShop.longitude }}
        ></Marker>
      )}
      {address && <Marker position={address} />}
      {address !== null && (
        <DirectionsService address={address} setRoute={setRoute} />
      )}

      {route !== null && <DirectionsRenderer route={route} />}
    </GoogleMap>
  );
}

export default React.memo(Map);
