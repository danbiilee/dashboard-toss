import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Servers from "./Servers";
import StatusCircleBar from "../statusCircle/StatusCircleBar";

const Wrapper = styled.div`
  padding: 60px 0 0 7px;
  .inner {
    width: ${(props) => (props.isDevelop ? "214px" : "100%")};
    padding-top: 18px;
  }
  .title {
    display: flex;
    align-items: center;
    padding: 0 5px;
    ${(props) =>
      props.isDevelop
        ? css`
            justify-content: center;
            margin-bottom: 13px;
          `
        : css`
            width: 770px;
            justify-content: space-between;
            margin-bottom: 8px;
          `}
    h3 {
      margin-right: 27px;
    }
  }
`;

const ServerGroup = ({ type, list }) => {
  const isDevelop = type.includes("side"); // 개발/테스트, 본사 영역 여부

  return (
    <Wrapper isDevelop={isDevelop}>
      {list.length > 0 ? (
        list.map((item, index) => (
          <div className="inner" key={index}>
            <div className="title">
              {!isDevelop && <h3>{item.GROUP_NAME}</h3>}
              <StatusCircleBar data={item} />
            </div>
            <Servers
              type={type}
              list={item.SERVER_LIST}
              isDevelop={isDevelop}
              index={index}
            />
          </div>
        ))
      ) : (
        <div className="inner">
          <div className="title">
            <StatusCircleBar
              data={{ CRITICAL: 0, TROUBLE: 0, MAINTENANCE: 0 }}
            />
          </div>
          <Servers type={type} list={[]} isDevelop={isDevelop} />
        </div>
      )}
    </Wrapper>
  );
};

ServerGroup.propTypes = {
  type: PropTypes.string,
  list: PropTypes.array,
};

export default ServerGroup;
