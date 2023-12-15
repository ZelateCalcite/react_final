import React, {useState} from 'react';
import {
  CarryOutOutlined, LaptopOutlined, MenuFoldOutlined, MenuUnfoldOutlined, ProfileOutlined,
} from '@ant-design/icons';
import {Layout, Menu, Button, theme} from 'antd';
import {useNavigate, Routes, Route} from 'react-router-dom'
import Home from "./pages/home";
import Fill from "./pages/fill";
import FillTable from "./pages/fillTable";
import Finish from "./pages/finish";

const {Header, Sider, Content} = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const {
    token: {colorBgContainer},
  } = theme.useToken();
  const onMenuClick = (e) => {
    console.log(e)
    navigate(e.key, {replace: true})
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
            key: '3', icon: <CarryOutOutlined/>, label: '已填问卷',
          },]}
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
            <Route exact path="/home" element={<Home/>}></Route>
            <Route exact path="/fillTable" element={<FillTable/>}></Route>
            <Route exact path="/fillTable/fill" element={<Fill/>}></Route>
            <Route exact path="/fillTable/finish" element={<Finish/>}></Route>

          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
