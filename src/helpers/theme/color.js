const color = {
  statusColor: (status) => {
    switch (status) {
      case "CRITICAL":
      case "DOWN":
        return "#d43f3a"; // red
      case "TROUBLE":
      case "UNKNOWN":
        return "#ff8417"; // orange
      case "ATTENTION":
        return "#fff200"; // yellow(임시)
      case "NORMAL":
      case "UP":
        return "#99c165"; // green
      case "MAINTENANCE":
        return "#8c9497"; // gray
      default:
        return "#333d4b"; // 임시
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
