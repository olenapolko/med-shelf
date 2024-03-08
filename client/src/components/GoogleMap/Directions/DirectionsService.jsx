import React from "react";
import { DirectionsService } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import selectShops from "store/shops/selectors";
import { setTravelDuration } from "store/map/reducer";
import { useDispatch } from "react-redux";

function Service({ address, setRoute }) {
  const dispatch = useDispatch();

  const { currentShop } = useSelector(selectShops);
  const onServiceLoad = React.useCallback(
    function onLoad(result, status) {
      if (status === "OK" && result) {
        setRoute(result);
        const durationText = result.routes[0].legs[0].duration.text;
        const durationValue = result.routes[0].legs[0].duration.value;

        dispatch(setTravelDuration({ text: durationText, value: durationValue }));
      } else {
        console.log(status);
      }
    },
    [setRoute, dispatch]
  );

  return (
    <DirectionsService
      options={{
        origin: { lat: currentShop.latitude, lng: currentShop.longitude },
        destination: address,
        travelMode: "DRIVING",
      }}
      callback={onServiceLoad}
    />
  );
}

export default React.memo(Service);
