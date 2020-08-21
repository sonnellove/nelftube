import { AlignRightOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
const Logo = require('../../../assets/images/HappyTubeLogo.png');

function NavBar() {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(!visible)
  };

  return (
    <nav className="menu" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="menu__logo">
        <Link to="/"><img src={Logo} alt="Logo" style={{ width: '100%', marginTop: '-25px' }} /></Link>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_rigth">
          <RightMenu mode="horizontal" />
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
            <AlignRightOutlined  />
        </Button>
        <Drawer
          title="Basic Drawer"
          onClick={showDrawer}
          // onClose={onClose}
          placement="right"
          className="menu_drawer"
          // closable={true}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  )
}

export default NavBar