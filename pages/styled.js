import { css } from '@emotion/core';

const containerStyle = css`
  display: flex;
  justify-content: space-between;
`;

const boxStyle = css`
  height: 50px;
  width: 50px;
  border: 3px solid red;
`;

function Box() {
  return <div css={boxStyle} />;
}


function Styled() {
  return (
    <div css={containerStyle}>
      <Box />
      <Box />
      <Box />
    </div>
  );
}

export default Styled;
