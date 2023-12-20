import React, {useState} from 'react';
import {
  CarryOutOutlined, LaptopOutlined, MenuFoldOutlined, MenuUnfoldOutlined, ProfileOutlined,
} from '@ant-design/icons';
import {Layout, Menu, Button, theme, Input} from 'antd';
import {useNavigate, Routes, Route} from 'react-router-dom'
import Login from "./pages/login";
import Home from "./pages/home";
import Fill from "./pages/fill";
import FillTable from "./pages/fillTable";
import DoneTable from "./pages/doneTable";
import Finish from "./pages/finish";
import Done from './pages/done';
import {setCurrentUser} from './util/storage';
const {Header, Sider, Content} = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const {
    token: {colorBgContainer},
  } = theme.useToken();
  const onMenuClick = (e) => {
    console.log(e)
    if(e.key==='logout'){
      setLogin(false);
      setUserName('');
    }else{
      navigate(e.key, {replace: true})}
  }

  const onInputChange=(e)=>{
    console.log(e);
    setUserName(e.target.value);
  }
  
  const loginClick=(e)=>{
    setCurrentUser(userName);
    setLogin(true);
  }

  if(login===false)
  {return(
    <div>
      <Input value={userName} onChange={onInputChange}/>
      <Button onClick={loginClick}>123</Button>
    </div>
  )
}
  else{
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
            <Route exact path="/login" element={<Login/>}></Route>
            <Route exact path="/home" element={<Home/>}></Route>
            <Route exact path="/fillTable" element={<FillTable/>}></Route>
            <Route exact path="/fillTable/fill" element={<Fill/>}></Route>
            <Route exact path="/fillTable/finish" element={<Finish/>}></Route>
            <Route exact path="/doneTable" element={<DoneTable/>}></Route>
            <Route exact path="/doneTable/done" element={<Done/>}></Route>


          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
        }
};

export default App;
