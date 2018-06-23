import React, { Component } from 'react';
import { Layout, Table, Icon, Divider } from 'antd';
import '../static/css/score.scss';

const { Header, Content } = Layout;
const columns = [{
  title: '题号',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '正确',
  dataIndex: 'age',
  key: 'age',
}];

const data = [{
  key: '1',
  name: '1',
  age: '是'
}, {
  key: '2',
  name: '2',
  age: '否'
}, {
  key: '3',
  name: '3',
  age: '是'
}];

class Score extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout className="score-container normal-container">
        <Header className="normal-title">xxx考试系统</Header>
        <Content className="score-content normal-content">
          <div className="score-sheet">
            <div className="score-sheet-title"><b>Congratulations</b></div>
            {/* <Table columns={ columns } dataSource={ data } pagination={ false } bordered /> */}
            <div className="score-sheet-footer">
              {/* <div className="score-sheet-footer-label">总分</div> */}
              <div className="score-sheet-footer-total">{ this.props.params.num }</div>
            </div>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default Score;