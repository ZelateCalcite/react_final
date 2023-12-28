import { Button, Form, Input, message, Modal, Select, Spin } from "antd";
import '../css/page1.css'
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getCurrentUserSubmitWJData, getCurrentUserSubmitWJDataByID } from "../util/storage"
import Item from "antd/es/list/Item";

export default function Done() {
    const { state: { id } } = useLocation();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(0);
    const [tip, setTip] = useState('');
    const [SubmitData, setSubmitData] = useState([]);//存放提交的数据


    const navigate = useNavigate();

    const handleBack = () => {
      navigate('/doneTable');
    };

    const handleBackOk = () => {
        form.resetFields();
        navigate('/fillTable');
    };

    useEffect(() => {
        console.log(123, id);
        const data = getCurrentUserSubmitWJDataByID(id);
        if (data) {
          setSubmitData(data[0].questions);  // 将问卷问题数据保存到state中
        }
        console.log(SubmitData);
    }, []);

    console.log(SubmitData);
    return (
      <div style={{ height: '100%', padding: '20px' }}>
        <h1>问卷{id}填写结果</h1>
        {SubmitData.map(data => (
          <div key={data.id}>
            <h2>{data.title}</h2>
            <p>{data.answer}</p>
          </div>
        ))}
        <Button type="primary" onClick={handleBack}>返回</Button>
      </div>
    );

}