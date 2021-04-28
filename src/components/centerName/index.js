import React from 'react';
import styled, { css } from 'styled-components';

const H2 = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  ${props =>
    props.page === 'sms'
      ? css`
          background-color: #f2f4f6;
          border: 1px solid #cccccc;
          border-bottom-color: #858585;
        `
      : css`
          background-color: #181a1c;
          color: white;
        `}
`;

const CenterName = ({ data, style }) => {
  // react-router: match.params
  const page = 'sms';

  return (
    <H2 style={style} page={page}>
      {data.centerName}
    </H2>
  );
};

export default CenterName;
