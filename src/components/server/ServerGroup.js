import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GroupName from "./GroupName";
import Servers from "./Servers";

const Wrapper = styled.div`
  padding: 60px 0 0 7px;
  .inner {
    padding-top: 18px;
  }
`;

const ServerGroup = ({ data, index }) => {
  const { centerName, groups, statuses } = data;
  const isDevelop = index != null; // 개발/테스트, 본사 영역 여부

  return (
    <Wrapper>
      {groups.map((group, index) => (
        <div className="inner" key={group.id}>
          <GroupName
            groupName={group.groupName}
            statuses={statuses}
            isDevelop={isDevelop}
          />
          <Servers
            index={index}
            centerName={centerName}
            servers={group.servers}
            isDevelop={isDevelop}
          />
        </div>
      ))}
    </Wrapper>
  );
};

ServerGroup.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
};

export default ServerGroup;
