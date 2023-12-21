import React, {useState, useEffect} from 'react';
import {Card, Col, Row, Statistic, Tag} from "antd";
import {SyncOutlined} from "@ant-design/icons";
import {getCurrentUserUnSubmitWJData} from "../util/storage";

const {Countdown} = Statistic;
const deadline = Date.now();
const day = 1000 * 60 * 60 * 24;

export default function Home() {
  const [unSubmitCount, setUnSubmitCount] = useState(0);

  useEffect(() => {
    let t = getCurrentUserUnSubmitWJData();
    setUnSubmitCount(unSubmitCount);
  }, [])
  //setUnSubmitCount(getCount());

  return (
    <div style={{height: '100%'}}>
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
      <Row gutter={16}>
        <Col
          span={24}
          style={{
            marginTop: 32,
          }}
        >
          <Card bordered={false}>
            <Tag icon={<SyncOutlined spin/>} color="processing" bordered={false}
                 style={{margin: '10px 0', fontSize: '18px', lineHeight: '22px'}}>
              问卷名称1
            </Tag>
            <Countdown title="距离截止时间还有" value={deadline + day * 2} format="D 天 H 时 m 分 s 秒"/>
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col
          span={24}
          style={{
            marginTop: 32,
          }}
        >
          <Card bordered={false}>
            <Tag icon={<SyncOutlined spin/>} color="processing" bordered={false}
                 style={{margin: '10px 0', fontSize: '18px', lineHeight: '22px'}}>
              问卷名称2
            </Tag>
            <Countdown title="距离截止时间还有" value={deadline + day * 7} format="D 天 H 时 m 分 s 秒"/>
          </Card>
        </Col>
      </Row>
    </div>
  )
}