import React from "react";
import PropTypes from "prop-types";
import CenterName from "../../components/centerName/index";
import ServerGroup from "../../components/server/ServerGroup";

const KimpoContainer = ({ style }) => {
  const Data = {
    centerName: "김포센터",
    groups: [
      {
        id: 1,
        groupName: "DMZ",
        servers: [
          { id: 1, status: 0, serverName: "SERVER 107" },
          { id: 2, status: 0, serverName: "SERVER 107" },
          { id: 3, status: 0, serverName: "SERVER 107" },
          { id: 4, status: 0, serverName: "SERVER 107" },
          { id: 5, status: 0, serverName: "SERVER 107" },
          { id: 6, status: 0, serverName: "SERVER 107" },
          { id: 7, status: 0, serverName: "SERVER 107" },
          { id: 8, status: 0, serverName: "SERVER 107" },
          { id: 9, status: 0, serverName: "SERVER 107" },
          { id: 10, status: 0, serverName: "SERVER 107" },
          { id: 11, status: 0, serverName: "SERVER 107" },
          { id: 12, status: 0, serverName: "SERVER 107" },
          { id: 13, status: 0, serverName: "SERVER 107" },
          { id: 14, status: 0, serverName: "SERVER 107" },
          { id: 15, status: 0, serverName: "SERVER 107" },
        ],
      },
      {
        id: 2,
        groupName: "콜센터",
        servers: [
          { id: 1, status: 0, serverName: "SERVER 107" },
          { id: 2, status: 0, serverName: "SERVER 107" },
          { id: 3, status: 0, serverName: "SERVER 107" },
          { id: 4, status: 0, serverName: "SERVER 107" },
          { id: 5, status: 0, serverName: "SERVER 107" },
          { id: 6, status: 0, serverName: "SERVER 107" },
          { id: 7, status: 0, serverName: "SERVER 107" },
          { id: 8, status: 0, serverName: "SERVER 107" },
          { id: 9, status: 0, serverName: "SERVER 107" },
          { id: 10, status: 0, serverName: "SERVER 107" },
          { id: 11, status: 0, serverName: "SERVER 107" },
          { id: 12, status: 0, serverName: "SERVER 107" },
          { id: 13, status: 0, serverName: "SERVER 107" },
          { id: 14, status: 0, serverName: "SERVER 107" },
          { id: 15, status: 0, serverName: "SERVER 107" },
        ],
      },
      {
        id: 3,
        groupName: "채널계",
        servers: [
          { id: 1, status: 1, serverName: "SERVER 107" },
          { id: 2, status: 0, serverName: "SERVER 107" },
          { id: 3, status: 0, serverName: "SERVER 107" },
          { id: 4, status: 0, serverName: "SERVER 107" },
          { id: 5, status: 0, serverName: "SERVER 107" },
          { id: 6, status: 0, serverName: "SERVER 107" },
          { id: 7, status: 0, serverName: "SERVER 107" },
          { id: 8, status: 0, serverName: "SERVER 107" },
          { id: 9, status: 0, serverName: "SERVER 107" },
          { id: 10, status: 0, serverName: "SERVER 107" },
          { id: 11, status: 0, serverName: "SERVER 107" },
          { id: 12, status: 0, serverName: "SERVER 107" },
          { id: 13, status: 0, serverName: "SERVER 107" },
          { id: 14, status: 0, serverName: "SERVER 107" },
          { id: 15, status: 0, serverName: "SERVER 107" },
        ],
      },
      {
        id: 4,
        groupName: "계정계",
        servers: [
          { id: 1, status: 1, serverName: "SERVER 107" },
          { id: 2, status: 0, serverName: "SERVER 107" },
          { id: 3, status: 0, serverName: "SERVER 107" },
          { id: 4, status: 0, serverName: "SERVER 107" },
          { id: 5, status: 0, serverName: "SERVER 107" },
          { id: 6, status: 0, serverName: "SERVER 107" },
          { id: 7, status: 0, serverName: "SERVER 107" },
          { id: 8, status: 0, serverName: "SERVER 107" },
          { id: 9, status: 0, serverName: "SERVER 107" },
          { id: 10, status: 0, serverName: "SERVER 107" },
          { id: 11, status: 0, serverName: "SERVER 107" },
          { id: 12, status: 0, serverName: "SERVER 107" },
          { id: 13, status: 0, serverName: "SERVER 107" },
          { id: 14, status: 0, serverName: "SERVER 107" },
          { id: 15, status: 0, serverName: "SERVER 107" },
        ],
      },
      {
        id: 5,
        groupName: "보안",
        servers: [
          { id: 1, status: 1, serverName: "SERVER 107" },
          { id: 2, status: 0, serverName: "SERVER 107" },
          { id: 3, status: 0, serverName: "SERVER 107" },
          { id: 4, status: 0, serverName: "SERVER 107" },
          { id: 5, status: 0, serverName: "SERVER 107" },
          { id: 6, status: 0, serverName: "SERVER 107" },
          { id: 7, status: 0, serverName: "SERVER 107" },
          { id: 8, status: 0, serverName: "SERVER 107" },
          { id: 9, status: 0, serverName: "SERVER 107" },
          { id: 10, status: 0, serverName: "SERVER 107" },
          { id: 11, status: 0, serverName: "SERVER 107" },
          { id: 12, status: 0, serverName: "SERVER 107" },
          { id: 13, status: 0, serverName: "SERVER 107" },
          { id: 14, status: 0, serverName: "SERVER 107" },
          { id: 15, status: 0, serverName: "SERVER 107" },
        ],
      },
    ],
    statuses: [
      { id: 1, status: 0, value: 39 },
      { id: 2, status: 1, value: 142 },
      { id: 3, status: 2, value: 5 },
    ],
    style: {
      width: "770px",
      height: "50px",
      top: "11px",
      left: "7px",
      position: "absolute",
    },
  };

  return (
    <section className="p-abs" style={style}>
      <CenterName data={Data} style={Data.style} />
      <ServerGroup data={Data} />
    </section>
  );
};

KimpoContainer.propTypes = {
  style: PropTypes.object,
};
export default KimpoContainer;
