import React from 'react';
import {
  HeaderStyle,
  AccessStyle,
  NavigationStyle,
  LogoStyle,
  MenuStyle,
  ListMenu,
  ListItem,
} from './headerStyles/Header.style';
import { Switch, Row, Col } from 'antd';
import ButtonCustom from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import {
  DollarCircleOutlined,
  DeploymentUnitOutlined,
} from '@ant-design/icons';
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
      <Row>
        <NavigationStyle key={theme.name}>
          <LogoStyle>
            <img
              src="http://st666.ez88888.com/static/images/logo.png"
              alt="error"
            />
          </LogoStyle>
          <AccessStyle>
            <ButtonCustom>Đăng Nhập</ButtonCustom>
            <ButtonCustom>Đăng Kí</ButtonCustom>
            <Switch
              onChange={onChangeTheme}
              checkedChildren={<FontAwesomeIcon icon={faSun} />}
              unCheckedChildren={<FontAwesomeIcon icon={faMoon} />}
              defaultChecked={theme.name === 'Light' ? true : false}
            />
          </AccessStyle>
        </NavigationStyle>
      </Row>
      <Row span={24}>
        <MenuStyle>
          <Col
            span={24}
            xl={{ span: 6, offset: 18 }}
            lg={{ span: 8, offset: 16 }}
            md={{ span: 10, offset: 14 }}
          >
            <ListMenu>
              <ListItem>
                <DollarCircleOutlined />
                Thanh Toán
              </ListItem>
              <ListItem>
                <DeploymentUnitOutlined />
                Phân Tích
              </ListItem>
            </ListMenu>
          </Col>
        </MenuStyle>
      </Row>
    </HeaderStyle>
  );
}

Header.propTypes = {
  setSelectedTheme: PropTypes.func,
};

export default Header;
