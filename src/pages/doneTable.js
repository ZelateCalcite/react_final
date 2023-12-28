import React, {useState, useEffect} from 'react';
import {Table, Divider} from 'antd';
import {Link} from "react-router-dom";
import { getCurrentUserSubmitWJData } from "../util/storage";

const convert = (timestamp) => {
  let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let Y = date.getFullYear() + '-';
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
  return Y + M + D;
}


const columns = [
  {
    title: '问卷名称',
    dataIndex: 'name',
    render: (text, record, index) => {
      return (
        <Link to='done' state={{id: record['id']}}
        // to={{
        //   pathname: 'fill/',
        //   state:{id: record['id']}
        // }}
          >
          {text}
        </Link>
      )
    },
  },
  {
    title: '截止日期',
    dataIndex: 'deadline',
  },
  {
    title: '问卷发起人',
    dataIndex: 'initiator',
  },
  {
    title: '问卷类型',
    dataIndex: 'type',
  }
];

export default function DoneTable() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    let t = getCurrentUserSubmitWJData();
    setData(t);
    setLoading(false);
  }, [])

  return (
    <div style={{height: '100%'}}>
      <Divider>已填问卷</Divider>
      <Table columns={columns} dataSource={data} size="large" scroll style={{height: "90%"}} loading={loading}/>
    </div>
  );
}