import React, {useState} from 'react';
import {Table, Divider} from 'antd';
import {Link} from "react-router-dom";

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
    render: (text) => {
      return (
        <Link to={'fill'}>
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

export default function FillTable() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  function promise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{
          key: '1',
          name: '问卷名称1',
          deadline: convert(Date.now() + 1000 * 60 * 60 * 24 * 2),
          initiator: '班长',
          type: '班级事项',
        },
        {
          key: '2',
          name: '问卷名称2',
          deadline: convert(Date.now() + 1000 * 60 * 60 * 24 * 7),
          initiator: '团支书',
          type: '团委事项',
        }]);
      }, 1000);
    });
  }
  async function getData() {
    await promise().then(e => {
      let temp = [];
      e.forEach(v => {
        temp.push(v);
      })
      setData(temp);
      setLoading(false);
    })
  }
  getData();
  return (
    <div style={{height: '100%'}}>
      <Divider>待填问卷</Divider>
      <Table columns={columns} dataSource={data} size="large" scroll style={{height: "90%"}} loading={loading}/>
    </div>
  );
}