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
    ${(props) =>
      props.isDevelop
        ? css`
            justify-content: center;
            margin-bottom: 13px;
          `
        : css`
            margin-bottom: 8px;
          `}
    h3 {
      margin-right: 27px;
    }
  }
`;

const ServerGroup = ({ type, list }) => {
  const { groups } = GLOBAL_CONFIG[type];
  const isDevelop = type.includes("side"); // 개발/테스트, 본사 영역 여부

  return (
    <Wrapper isDevelop={isDevelop}>
      {list &&
        list.map((item, index) => (
          <div className="inner" key={item.GROUP_ID}>
            <div className="title">
              {!isDevelop && (
                <h3>
                  {
                    groups.find((group) => group.resourceId === item.GROUP_ID)
                      .groupName
                  }
                </h3>
              )}
              <StatusCircleBar type={type} id={item.GROUP_ID} />
            </div>
            <Servers
              type={type}
              list={item.SERVER_LIST}
              isDevelop={isDevelop}
              index={index}
            />
          </div>
        ))}
    </Wrapper>
  );
};

ServerGroup.propTypes = {
  type: PropTypes.string,
  list: PropTypes.array,
};

export default ServerGroup;
