import { Button, Form, Input, message, Modal, Select, Spin } from "antd";
import '../css/page1.css'
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getCurrentUserSubmitWJData, getCurrentUserSubmitWJDataByID } from "../util/storage"

export default function Done() {
    const { state: { id } } = useLocation();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(0);
    const [tip, setTip] = useState('');
    const [SubmitData, setSubmitData] = useState([]);//存放提交的数据
    


    const navigate = useNavigate();

    const handleBackOk = () => {
        form.resetFields();
        navigate('/fillTable');
    };

    useEffect(() => {
        console.log(123, id);
        const data = getCurrentUserSubmitWJDataByID(id);
        setSubmitData(data);
        console.log(SubmitData);
    }, []);

    function checkWJData() {
        // const data = getCurrentUserSubmitWJData(id);
        // setSubmitData(data);
        // console.log(SubmitData);

    }
    console.log(SubmitData);
    return (
        <div style={{ height: '100%' }}>
            <Form form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 10 }}
        layout="horizontal"
        size={'small'}
        className="form"
        loading={true}
      >
        {data.map(data => (
          <Form.Item
            key={data.id}
            name={data.title}
            label={data.title}
            validateTrigger="onBlur"
            rules={[{
              required: true,
              message: '请填写此项'
            }]}
          >
            <Input />
          </Form.Item>
        ))}
        
      </Form>

        </div>

    )

}