import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Server from ".";

const Wrapper = styled.div`
  overflow-y: auto;
  width: 770px;
  height: 90px;
  padding: 0.7em 0;
  border: 1px solid #577881;
  border-width: 1px 0;
  .center {
    display: flex;
    justify-content: center;
  }
  .wrap {
    display: flex;
    flex-wrap: wrap;
    width: 99%;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ced2d7;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #648793;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-button:start:decrement,
  ::-webkit-scrollbar-button:end:increment {
    width: 0px;
    height: 0px;
    background: transparent;
  }
`;

const Servers = ({ index, centerName, servers }) => {
  // Set custom style by center, index
  const style = {};
  if (centerName !== "논현센터" && centerName !== "김포센터") {
    style.width = "212px";
    style.height = centerName === "본사" ? "223px" : "519px";
  }
  // 그룹 목록이 있는 경우 위에서 3, 4번째 그룹의 높이값 설정
  if (index >= 2 && index <= 3) {
    style.height = index === 2 ? "246px" : "184px";
  }

  return (
    <Wrapper style={style}>
      <div className="center">
        <div className="wrap">
          {servers.map((server) => (
            <Server key={server.id} server={server} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

Servers.propTypes = {
  index: PropTypes.number,
  centerName: PropTypes.string,
  servers: PropTypes.array,
};

export default Servers;
