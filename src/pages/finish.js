import {Button, Result} from "antd";
import {useNavigate} from "react-router-dom";

export default function Finish() {
  const time = Date.now().toString();
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/fillTable')
  }
  return (
    <Result
      status="success"
      title="提交成功！"
      subTitle={time}
      extra={[
        <Button type="primary" key="back" onClick={onClick}>
          返回
        </Button>
      ]}
    />
  )
}