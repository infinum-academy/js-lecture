import React from 'react';
import { css } from '@emotion/core';
import {observer} from 'mobx-react';

import {AppStoreCtx} from '../store/context';

const containerStyle = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
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
  const appStore = React.useContext(AppStoreCtx);

  return (
    <div css={containerStyle}>
      {appStore.shows.length}
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </div>
  );
}

export default observer(Styled);
