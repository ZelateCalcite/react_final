import {Button, Layout, Menu, theme} from "antd";
import {
  CarryOutOutlined,
  LaptopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProfileOutlined
} from "@ant-design/icons";
import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "./home";
import FillTable from "./fillTable";
import Fill from "./fill";
import Finish from "./finish";
import DoneTable from "./doneTable";
import Done from "./done";
import React, {useState} from "react";
import {Content, Header} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";


export default function Index() {

  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState('');
  const {
    token: {colorBgContainer},
  } = theme.useToken();

  const onMenuClick = (e) => {
    console.log(e)
    if (e.key === 'logout') {
      setLogin(false);
      setUserName('');
      navigate('/');
    } else {
      navigate(e.key, {replace: true})
    }
  }

  return (
    <Layout style={{height: '100vh'}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical"/>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['home']}
          onClick={onMenuClick}
          items={[{
            key: 'home', icon: <LaptopOutlined/>, label: '首页',
          }, {
            key: 'fillTable', icon: <ProfileOutlined/>, label: '待填问卷',
          }, {
            key: 'doneTable', icon: <CarryOutOutlined/>, label: '已填问卷',
          }, {
            key: 'logout', icon: <CarryOutOutlined/>, label: '登出',
          }]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0, background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px', width: 64, height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px', padding: 24, background: colorBgContainer,
          }}
        >
          <Routes>
            <Route path="home" element={<Home/>}></Route>
            <Route path="fillTable" element={<FillTable/>}></Route>
            <Route path="fillTable/fill" element={<Fill/>}></Route>
            <Route path="fillTable/finish" element={<Finish/>}></Route>
            <Route path="doneTable" element={<DoneTable/>}></Route>
            <Route path="doneTable/done" element={<Done/>}></Route>
          </Routes>
        </Content>
      </Layout>
    </Layout>
  )
}