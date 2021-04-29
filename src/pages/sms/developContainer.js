import React from "react";
import PropTypes from "prop-types";
import CenterName from "../../components/centerName/index";
import ServerGroup from "../../components/server/ServerGroup";

const developContainer = ({ style }) => {
  const Data = [
    {
      centerName: "개발/테스트",
      groups: [
        {
          id: 1,
          servers: [
            { id: 1, status: 0, serverName: "SERVER 107" },
            { id: 2, status: 0, serverName: "SERVER 107" },
            { id: 3, status: 0, serverName: "SERVER 107" },
          ],
        },
      ],
      statuses: [
        { id: 1, status: 0, value: 39 },
        { id: 2, status: 1, value: 142 },
        { id: 3, status: 2, value: 5 },
      ],
      style: {
        width: "214px",
        height: "50px",
        top: "11px",
        left: "7px",
        position: "absolute",
      },
    },
    {
      centerName: "본사",
      groups: [
        {
          id: 1,
          servers: [
            { id: 1, status: 0, serverName: "SERVER 107" },
            { id: 2, status: 0, serverName: "SERVER 107" },
            { id: 3, status: 0, serverName: "SERVER 107" },
          ],
        },
      ],
      statuses: [
        { id: 1, status: 0, value: 39 },
        { id: 2, status: 1, value: 142 },
        { id: 3, status: 2, value: 5 },
      ],
      style: {
        width: "214px",
        height: "50px",
        top: "676px",
        left: "7px",
        position: "absolute",
      },
    },
  ];

  return (
    <section className="p-abs" style={style}>
      {Data.map((center, index) => (
        <div key={index}>
          <CenterName data={center} style={center.style} />
          <ServerGroup data={center} index={index} />
        </div>
      ))}
    </section>
  );
};

developContainer.propTypes = {
  style: PropTypes.object,
};
export default developContainer;
