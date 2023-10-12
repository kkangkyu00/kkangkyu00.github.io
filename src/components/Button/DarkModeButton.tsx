import React, { useContext } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

import { ThemeContext } from 'contexts/ThemeContext';

const ButtonWrapper = styled.div`
  .moon-icon {
    stroke-dasharray: 1px 1px;
    opacity: 1;
  }
`;

const DarkModeButton = () => {
  const { theme, onChangeTheme } = useContext(ThemeContext);

  return (
    <ButtonWrapper>
      <Button onClick={onChangeTheme}>{theme}</Button>
    </ButtonWrapper>
  );
};

export default DarkModeButton;
