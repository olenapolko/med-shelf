const containerStyle = {
  width: "100%",
  height: "300px",
  marginLeft: "2px",
  border: "2px solid #ececec",
  borderRadius: "10px",
  boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.14)"
};

const center = {
  current: { lat: 49.84406960399984, lng: 24.027167842253444 },
  shop: {
    lat: 49.8418,
    lng: 24.0295,
  },
};

const options = {
  disableDefaultUI: true,
  clickableIcons: false,
  disableDoubleClickZoom: true,
};

export { containerStyle, center, options };
