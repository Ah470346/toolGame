import React from 'react';
import { HeaderStyle, AccessStyle } from './headerStyles/Header.style';
import { Switch } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../hooks/useTheme';
import PropTypes from 'prop-types';

function Header({ setSelectedTheme }) {
  const { themes, theme, setMode } = useTheme();

  const onChangeTheme = (checked) => {
    if (checked) {
      setMode(themes.data.light);
      setSelectedTheme(themes.data.light);
    } else {
      setMode(themes.data.dark);
      setSelectedTheme(themes.data.dark);
    }
  };
  return (
    <HeaderStyle>
      <AccessStyle key={theme.name}>
        <Switch
          onChange={onChangeTheme}
          checkedChildren={<FontAwesomeIcon icon={faSun} />}
          unCheckedChildren={<FontAwesomeIcon icon={faMoon} />}
          defaultChecked={theme.name === 'Light' ? true : false}
        />
      </AccessStyle>
    </HeaderStyle>
  );
}

Header.propTypes = {
  setSelectedTheme: PropTypes.func,
};

export default Header;
