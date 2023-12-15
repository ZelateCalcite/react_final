import {Button, Form, Input, message, Modal, Select, Spin} from "antd";
import '../css/page1.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Forms() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(0);
  const [tip, setTip] = useState('');
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [isBackModalOpen, setIsBackModalOpen] = useState(false);
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
    <div style={{height: '100%'}}>
      <Spin tip={tip} spinning={loading} fullscreen={true} size="large"></Spin>
      <Form form={form}
            labelCol={{span: 6}}
            wrapperCol={{span: 10}}
            layout="horizontal"
            size={'small'}
            className="form"
            loading={true}
      >
        <Form.Item name="name" label="姓名" validateTrigger="onBlur" rules={[{
          required: true,
          message: '请输入姓名'
        }]}>
          <Input/>
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
        </Form.Item>
      </Form>
      <div className="buttons">
        <Button type="primary" onClick={onSubmitClick}>提交</Button>
        <Button danger style={{marginLeft: '10px'}} onClick={onResetClick}>重置</Button>
        <Button style={{marginLeft: '10px'}} onClick={onBackClick}>返回</Button>
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

export default function Fill() {
  return (
    <Forms/>
  )
}