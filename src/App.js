import React, {useState} from 'react';
import {useNavigate, Routes, Route} from 'react-router-dom'
import {setCurrentUser} from './util/storage';
import Index from "./pages";
import Login from "./pages/login";
import Home from "./pages/home";
import FillTable from "./pages/fillTable";
import Fill from "./pages/fill";
import Finish from "./pages/finish";
import DoneTable from "./pages/doneTable";
import Done from "./pages/done";

const App = () => {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const onInputChange = (e) => {
    console.log(e);
    setUserName(e.target.value);
  }

  const loginClick = (e) => {
    setCurrentUser(userName);
    setLogin(true);
  }

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
};

export default App;
