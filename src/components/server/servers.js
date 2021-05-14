import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Server from ".";

const Wrapper = styled.div`
  overflow-y: scroll;
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
  .noWrap {
    display: flex;
    flex-direction: column;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #648793;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #a6aab0;
  }
  ::-webkit-scrollbar-track {
    background-color: #ced2d7;
  }
  ::-webkit-scrollbar-button:start:decrement,
  ::-webkit-scrollbar-button:end:increment {
    width: 0px;
    height: 0px;
    background: transparent;
  }
`;

const Servers = ({ type, list, isDevelop, index }) => {
  const style = {};

  if (isDevelop) {
    style.width = "212px";
    style.height = type === "sidetop" ? "519px" : "223px";
    style.marginTop = "10px";
    style.marginBottom = type === "sidetop" && "35px";
  }

  // 그룹 목록이 있는 경우(논현/김포센터) 위에서 3, 4번째 그룹의 높이값 설정
  if (index >= 2 && index <= 3) {
    style.height = index === 2 ? "246px" : "184px";
  }

  return (
    <Wrapper style={style}>
      <div className="center">
        <div className={isDevelop ? "noWrap" : "wrap"}>
          {list &&
            list.map((item, index) => <Server key={index} server={item} />)}
        </div>
      </div>
    </Wrapper>
  );
};

Servers.propTypes = {
  type: PropTypes.string,
  list: PropTypes.array,
  isDevelop: PropTypes.bool,
  index: PropTypes.number,
};

export default Servers;
