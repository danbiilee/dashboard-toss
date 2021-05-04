const color = {
  statusColor: (status) => {
    switch (status) {
      case "NORMAL":
        return "#99c165"; // green
      case "ATTENTION":
        return "#8c9497"; // gray
      case "TROUBLE":
        return "#ff8417"; // orange
      case "CRITICAL":
        return "#d43f3a"; // red
      case "MAINTENANCE":
        return "pink";
      case "NONE":
      default:
        return "black";
    }
  },
  green: "#79ab3d",
  white: "#fff",
  black: "#000",
  darkGrey1: "#425363",
  darkGrey2: "#333d4b",
  darkGrey3: "#292b31",
  darkGrey4: "#666c7e",
  skyblue: "#67faff",
};

export default color;
