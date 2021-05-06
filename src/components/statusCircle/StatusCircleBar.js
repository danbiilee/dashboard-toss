import React from "react";
import PropTypes from "prop-types";
import { useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import StatusCircle from "./index";
import { useSelector } from "react-redux";

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

const StatusCircleBar = ({ type, id, style }) => {
  const { path } = useRouteMatch();
  const page = path.includes("nms") ? "nms" : "sms";
  const { statusBarMap } = GLOBAL_CONFIG;

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
        id: statusBarMap[key].order,
        status: key,
        value: data[key],
        isActive: statusBarMap[key].isActive,
        //isActive: data[key] ? true : false, // 데이터가 있을 때만 보여주기
      });
    });
    return list.sort((a, b) => a.id - b.id);
  };

  const dataObj = useSelector((state) =>
    state.sms[type].list.find((item) => item.GROUP_ID === id)
  );
  const keys = Object.keys(dataObj).filter((item) => filterStatus(item));
  const list = getDataList(dataObj, keys);

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
  type: PropTypes.string,
  id: PropTypes.number,
  style: PropTypes.object,
};

export default StatusCircleBar;
