import React from "react";
import PropTypes from "prop-types";
import { useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import StatusCircle from "./index";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: ${(props) => (props.page === "sms" ? "inherit" : "white")};
  .status-container {
    display: flex;
    align-items: center;
    &:not(:last-of-type)::after {
      content: "|";
      margin: 0 10px;
      color: #d6d8de;
    }
  }
  .status-value {
    margin-left: 4px;
  }
`;

const StatusCircleBar = ({ data, style }) => {
  const { path } = useRouteMatch();
  const page = path.includes("nms") ? "nms" : "sms";
  const { statusMap } = page === "sms" ? SMS_CONFIG : NMS_NONHYEON_CONFIG;

  const filterStatus = (key) => {
    if (key === "GROUP_NAME" || key === "SERVER_LIST" || key === "GROUP_ID") {
      return false;
    }
    return true;
  };

  const getDataList = (data, keys) => {
    const list = [];
    keys.map((key) => {
      list.push({
        id: statusMap[key].order,
        status: key,
        value: data[key],
        isActive: statusMap[key].isActive,
      });
    });
    return list.sort((a, b) => a.id - b.id);
  };

  const keys = Object.keys(data).filter((item) => filterStatus(item));
  const list = getDataList(data, keys);

  return (
    <Wrapper style={style} page={page}>
      {list.map(
        (item) =>
          item.isActive && (
            <div className="status-container" key={item.id}>
              <StatusCircle data={item} size="lg" />
              <span className="status-value">{item.value}</span>
            </div>
          )
      )}
    </Wrapper>
  );
};

StatusCircleBar.propTypes = {
  data: PropTypes.object,
  style: PropTypes.object,
};

export default StatusCircleBar;
