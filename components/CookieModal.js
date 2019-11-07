import { observer } from 'mobx-react';
import { css } from '@emotion/core';

function CookieModal({onModalClose}) {
  return (
    <div css={mask}>
      <div css={modal}>
        <h2>Pls let me have cookies...</h2>
        <button>OK</button>
        <button onClick={onModalClose}>OK</button>
      </div>
    </div>
  );
}

export default observer(CookieModal);
