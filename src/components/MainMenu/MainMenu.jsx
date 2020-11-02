import React, { useState } from 'react'
// eslint-disable-next-line
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom';
import { Layout, Menu } from "antd";

// eslint-disable-next-line
const { SubMenu } = Menu;
const { Sider } = Layout;

const MainMenu = () => {
  const [collapsed, setCollapse] = useState(false);
  const token = useSelector(state => state.auth.token)

  const onCollapse = () => {
    setCollapse(!collapsed);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        {token ? (
          <Menu.Item key="1">
            <Link to="/signin">Login</Link>
          </Menu.Item>
        ) : (
          <Menu.Item key="1">
            <Link to="/signout">Logout</Link>
          </Menu.Item>
        )}

        {/*<Menu.Item key="1" >
          Option 1
        </Menu.Item>
        <Menu.Item key="2" >
          Option 2
        </Menu.Item>
        <SubMenu key="sub1" title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" >
          Files
        </Menu.Item>*/}
      </Menu>
    </Sider>
  );
}

export default MainMenu;
