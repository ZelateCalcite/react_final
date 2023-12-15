import {Button, Result} from "antd";

export default function Finish() {
  const time = Date.now().toString();
  return (
    <Result
      status="success"
      title="提交成功！"
      subTitle={time}
      extra={[
        <Button type="primary" key="back">
          返回
        </Button>
      ]}
    />
  )
}