import React, {useState, useEffect} from 'react';
import {Card, Col, Row, Statistic, Tag} from "antd";
import {SyncOutlined} from "@ant-design/icons";
import { getCurrentUserSubmitWJData,getCurrentUserUnSubmitWJData } from "../util/storage";
import moment from 'moment';
const {Countdown} = Statistic;
//const deadline = Date.now();
//const day = 1000 * 60 * 60 * 24;

export default function Home() {
  const [unSubmitCount, setUnSubmitCount] = useState(0); 
  const [SubmitCount, setSubmitCount] = useState(0); 

  useEffect(() => {
    const unSubmittedWJData = getCurrentUserUnSubmitWJData();
    const unSubmitCount = unSubmittedWJData.length;
    const SubmittedWJData = getCurrentUserSubmitWJData();
    const SubmitCount = SubmittedWJData.length;
    
    setUnSubmitCount(unSubmitCount);
    setSubmitCount(SubmitCount);
  }, []);
  //setUnSubmitCount(getCount());
  const unSubmittedWJData = getCurrentUserUnSubmitWJData();
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
              value={SubmitCount}
              valueStyle={{
                color: '#3f8600',
              }}
            />
          </Card>
        </Col>
      </Row>
      {unSubmittedWJData.map(survey => {
        //const now = Date.now()+1000 * 60 * 60 * 24 * 2 + 1000 *30; // 获取当前时间
        const deadline = moment(survey.deadline); // 获取截止时间
        //const daysLeft = deadline.diff(now, 'days'); // 计算截止时间与当前时间之间的差值（以天为单位）

        return (
          <Col span={24} style={{ marginTop: 32 }} key={survey.id}>
            <Card bordered={false}>
              <Tag icon={<SyncOutlined spin />} color="processing" bordered={false} style={{ margin: '10px 0', fontSize: '18px', lineHeight: '22px' }}>
                {survey.name}
              </Tag>
              <Countdown title="距离截止时间还有" value={deadline} format="D 天 H 时 m 分 s 秒" />
            </Card>
          </Col>
        );
      })}
    </div>
  )
}