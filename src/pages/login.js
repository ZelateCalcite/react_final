import React, {useState, useEffect} from 'react';
import {Card, Col, Row, Statistic, Tag} from "antd";
import {SyncOutlined} from "@ant-design/icons";
import { getCurrentUserUnSubmitWJData } from "../util/storage";
const {Countdown} = Statistic;
const deadline = Date.now();
const day = 1000 * 60 * 60 * 24;

export default function Login() {
  const [unSubmitCount, setUnSubmitCount] = useState(0); 

  useEffect(() => {
    let t = getCurrentUserUnSubmitWJData();
    setUnSubmitCount(unSubmitCount);
}, [])
  //setUnSubmitCount(getCount());

  return (
    <div style={{height: '100%'}}>
      1111111111
      <Row gutter={16}>
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title="未填问卷数"
              value={unSubmitCount}
              valueStyle={{
                color: '#cf1322',
              }}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title="已填问卷数"
              value={4}
              valueStyle={{
                color: '#3f8600',
              }}
            />
          </Card>
        </Col>
      </Row>
      
    </div>
  )
}