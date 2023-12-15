import {Pagination} from "antd";
import {useState} from "react";

export default function A() {
  const [current, setCurrent] = useState(1);

  const onPageChange = (page) => {
    console.log(page);
    setCurrent(page);
  };
  return (<Pagination current={current} onChange={onPageChange} defaultCurrent={current} total={10} pageSize={5}
                      className="pagination"/>)
}