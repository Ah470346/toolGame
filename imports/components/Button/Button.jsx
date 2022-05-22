import React from 'react';
import { Button } from 'antd';
import { ButtonWrap } from './Button.style';

function ButtonCustom({ children, color, textColor }) {
  return (
    <ButtonWrap color={color} textColor={textColor}>
      <Button>{children}</Button>
    </ButtonWrap>
  );
}

export default ButtonCustom;
