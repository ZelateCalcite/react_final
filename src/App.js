import React, {useState} from 'react';
<<<<<<< HEAD
import {
  CarryOutOutlined, LaptopOutlined, MenuFoldOutlined, MenuUnfoldOutlined, ProfileOutlined,ArrowLeftOutlined,FileAddOutlined
} from '@ant-design/icons';
import {Layout, Menu, Button, theme, Input,message} from 'antd';
=======
>>>>>>> 5f2fa79a1979d925318739eec1a5bec4061631f7
import {useNavigate, Routes, Route} from 'react-router-dom'
import {setCurrentUser} from './util/storage';
import Index from "./pages";
import Login from "./pages/login";
import Home from "./pages/home";
import FillTable from "./pages/fillTable";
import Fill from "./pages/fill";
import Finish from "./pages/finish";
<<<<<<< HEAD
import Done from './pages/done';
import {setWJData,setCurrentUser} from './util/storage';
const {Header, Sider, Content} = Layout;
=======
import DoneTable from "./pages/doneTable";
import Done from "./pages/done";

>>>>>>> 5f2fa79a1979d925318739eec1a5bec4061631f7
const App = () => {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

<<<<<<< HEAD
  const {
    token: {colorBgContainer},
  } = theme.useToken();
  const onMenuClick = (e) => {
    console.log(e)
    if(e.key==='logout'){
      setLogin(false);
      setUserName('');
    }
    else if(e.key=='parse'){
      const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onload = (e) => {
          const fileContent = e.target.result;
          const questionnaire = JSON.parse(fileContent);
          setWJData(questionnaire); // 保存问卷数据到本地存储
        };
    
        reader.readAsText(file);
      };
    
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = ".json";
      fileInput.addEventListener("change", handleFileUpload);
      fileInput.click();
    }
    else{
      navigate(e.key, {replace: true})}
  }


  const onInputChange=(e)=>{
=======
  const onInputChange = (e) => {
>>>>>>> 5f2fa79a1979d925318739eec1a5bec4061631f7
    console.log(e);
    setUserName(e.target.value);
  }

  const loginClick = (e) => {
    setCurrentUser(userName);
    setLogin(true);
  }

<<<<<<< HEAD
  if(login===false)
  {return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh",backgroundColor:"#eae5e3" }}>
      <div>
      <div style={{ fontSize: "37px", color: "#333631", fontFamily:"initial",textAlign:"center" }}>问卷调查系统</div>
        <p style={{ margin:"10px 0px" }}>请输入用户名:</p>
        <Input value={userName} onChange={onInputChange} style={{ marginBottom: 16 }} />
        <Button onClick={() => {
          if (userName !== "") {
            loginClick();
          } else {
            message.error("请输入用户名");
          }
        }}>登录</Button>
      </div>
      
    </div>
  );
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
            key: 'parse', icon: <FileAddOutlined/>, label: '导入问卷',
          }, {
            key: 'logout', icon: <ArrowLeftOutlined/>, label: '登出',
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
=======
  return (
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/index" element={<Index/>}>
        <Route path="home" element={<Home/>}></Route>
        <Route path="fillTable" element={<FillTable/>}></Route>
        <Route path="fillTable/fill" element={<Fill/>}></Route>
        <Route path="fillTable/finish" element={<Finish/>}></Route>
        <Route path="doneTable" element={<DoneTable/>}></Route>
        <Route path="doneTable/done" element={<Done/>}></Route>
      </Route>
    </Routes>
  )
>>>>>>> 5f2fa79a1979d925318739eec1a5bec4061631f7
};

export default App;
