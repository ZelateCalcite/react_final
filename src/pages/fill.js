import { Button, Form, Input, message, Modal, Select, Spin } from "antd";
import '../css/page1.css'
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getCurrentUserWJData,getWJData,submitWJ } from "../util/storage"
export default function Fill() {

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(0);
  const [tip, setTip] = useState('');
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [isBackModalOpen, setIsBackModalOpen] = useState(false);

  const { state: { id } } = useLocation();

  const navigate = useNavigate();
  const showResetModal = () => {
    setIsResetModalOpen(true);
  };
  const showBackModal = () => {
    setIsBackModalOpen(true);
  };
  const handleResetOk = () => {
    form.resetFields();
    setIsResetModalOpen(false);
  };
  const handleResetCancel = () => {
    setIsResetModalOpen(false);
  };
  const handleBackOk = () => {
    form.resetFields();
    navigate('/fillTable');
  };
  const handleBackCancel = () => {
    setIsBackModalOpen(false);
  };
  const [questions, setQuestions] = useState([]);  // 保存问卷数据的state

  useEffect(() => {
    const wjData = getCurrentUserWJData();  // 获取问卷数据
    const currentWJ = wjData.find(wj => wj.id === id);  // 根据id获取当前问卷数据
    if (currentWJ) {
      setQuestions(currentWJ.questions);  // 将问卷问题数据保存到state中
    }
  }, [id]);
  // useEffect(() => {
  //   console.log(99999999, id);
  // }, [])

  function onSubmitClick2() {
    // submitWJ(id);
    // setTip('提交中，请稍等');
    // setTimeout(() => {
    //   setLoading(0);
    //   message.success('提交成功');
    //   navigate('/fillTable/finish');
    // }, 2000)
    form.validateFields()
    .then((formData) => {
      submitWJ(id, formData); // 提交问卷并传递填写的表单数据
      setTip('提交中，请稍等');
      setLoading(1);
      setTimeout(() => {
        setLoading(0);
        message.success('提交成功');
        navigate('/fillTable/finish');
      }, 2000);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  async function onSubmitClick() {
    setTip('校验中，请稍等');
    setLoading(1);
    await form.validateFields()
      .then(value => {
        setTip('提交中，请稍等');
        setTimeout(() => {
          setLoading(0);
          message.success('提交成功');
          navigate('/fillTable/finish');
        }, 2000)
      })
      .catch(err => {
        setLoading(0);
        console.log(err)
      })
  }

  function onResetClick() {
    showResetModal();
  }

  function onBackClick() {
    showBackModal();
  }

  return (
    <div style={{ height: '100%' }}>
      <Spin tip={tip} spinning={loading} fullscreen={true} size="large"></Spin>
      <Form form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 10 }}
        layout="horizontal"
        size={'small'}
        className="form"
        loading={true}
      >
        {questions.map(question => (
          <Form.Item
            key={question.id}
            name={question.title}
            label={question.title}
            validateTrigger="onBlur"
            rules={[{
              required: true,
              message: '请填写此项'
            }]}
          >
            <Input />
          </Form.Item>
        ))}
        {/* <Form.Item name="name" label="姓名" validateTrigger="onBlur" rules={[{
          required: true,
          message: '请输入姓名'
        }]}>
          <Input />
        </Form.Item>
        <Form.Item name="class" label="班级" validateTrigger="onBlur" rules={[{
          required: true,
          message: '请选择班级'
        }]}>
          <Select>
            <Select.Option value="1">1班</Select.Option>
            <Select.Option value="2">2班</Select.Option>
            <Select.Option value="3">3班</Select.Option>
            <Select.Option value="4">4班</Select.Option>
          </Select>
        </Form.Item> */}
      </Form>
      <div className="buttons">
        <Button type="primary" onClick={onSubmitClick2}>提交</Button>
        <Button danger style={{ marginLeft: '10px' }} onClick={onResetClick}>重置</Button>
        <Button style={{ marginLeft: '10px' }} onClick={onBackClick}>返回</Button>
      </div>

      <Modal title="确定要重置吗？" open={isResetModalOpen} onOk={handleResetOk} onCancel={handleResetCancel}
        okText="确认"
        cancelText="取消">
        所有已填写的内容会丢失！
      </Modal>
      <Modal title="确定要返回吗？" open={isBackModalOpen} onOk={handleBackOk} onCancel={handleBackCancel} okText="确认"
        cancelText="取消">
        所有已填写的内容会丢失！
      </Modal>
    </div>
  )
}

// export default function Fill(props) {
//   console.log(8888,props)
//   return (
//     <Forms props={props}/>
//   )
// }