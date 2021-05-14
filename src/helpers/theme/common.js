import color from "./color";

const common = {
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexAlignCenter: `
    display: flex;
    align-items: center;
  `,
  ellipsis: `
  overflow: hidden;
  text-overflow: ellipsis;
      white-space: nowrap;
  `,
  header: {
    sms: {
      activeBackground: color.darkGrey1,
      activeBorderTop: `5px solid ${color.green}`,
      activeColor: color.white,
      background: color.white,
      inactiveColor: color.darkGrey2,
      borderBottom: `2px solid ${color.darkGrey1}`,
      clockColor: color.darkGrey2,
    },
    nms: {
      activeBackground: color.black,
      activeBorderTop: `5px solid ${color.green}`,
      activeColor: color.white,
      background: color.darkGrey3,
      inactiveColor: color.darkGrey4,
      borderBottom: "0",
      clockColor: color.white,
    },
  },
};

export default common;
