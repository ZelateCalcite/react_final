import React, {useState, useEffect} from 'react';
import {Button, Form, Input,} from "antd";
import {getCurrentUserUnSubmitWJData} from "../util/storage";
import {useNavigate} from "react-router-dom";

export default function Login() {
  const [unSubmitCount, setUnSubmitCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let t = getCurrentUserUnSubmitWJData();
    setUnSubmitCount(unSubmitCount);
  }, [])
  //setUnSubmitCount(getCount());
  const [form] = Form.useForm();
  const onLoginClick = () => {
    form.validateFields()
      .then(data => {
        navigate('/index/home')
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div style={{width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
        <Form form={form}
              labelCol={{span: 6}}
              wrapperCol={{span: 18}}
              layout="horizontal"
              size={'large'}
        >
          <Form.Item
            key='username'
            name='username'
            label='账户'
            validateTrigger="onBlur"
            rules={[{
              required: true,
              message: '请输入账户名称'
            }]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            key='password'
            name='password'
            label='密码'
            validateTrigger="onBlur"
            rules={[{
              required: true,
              message: '请输入密码'
            }]}
          >
            <Input/>
          </Form.Item>
        </Form>
      </div>
      <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <Button type="primary" onClick={onLoginClick}>登录</Button>
      </div>
    </div>
  )
}