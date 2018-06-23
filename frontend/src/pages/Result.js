import React, { Component } from 'react'
import { Layout, Form, Icon, Input, Button, Checkbox, Table } from 'antd';

import '../static/css/result.scss';

const { Header, Footer, Sider, Content } = Layout;

const columns = [
  {
    title: 'User Id',
    dataIndex: 'userId',
    key: 'userId',
  }, 
  {
    title: 'Score',
    dataIndex: 'score',
    key: 'score',
  }
];

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      dataSource:[
        {
          key: '1',
          userId: '0001',
          score: 98
        }, 
        {
          key: '2',
          userId: '0002',
          score: 86,
        }
      ]
    }

    this._handleUserIdChange = this._handleUserIdChange.bind(this);
    this._handleQuery = this._handleQuery.bind(this);
  }

  componentDidMount() {
    fetch('http://rap2api.taobao.org/app/mock/17913/api/queryAll')
    .then((response)=>response.json())
    .then((data)=>{
      this.setState({dataSource: data.scores.map((score)=>Object.assign(score,{key:score.userId}))});
    })
  }

  render() {
    const {userId, dataSource} = this.state;
    
    return (
      <Layout className="score">
        <Header className="score-title">考试成绩查询</Header>
        <Content className="score-content">
          <div className="score-form">
            <Input className="score-input" placeholder="userId" value={userId} 
              onChange={this._handleUserIdChange} />
            <Button type="primary" htmlType="submit" className="score-submit"
              onClick={this._handleQuery} >
              查询
            </Button>
          </div>
          <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 10 }}/>
        </Content>
      </Layout>
    )
  }

  _handleUserIdChange(e){
    this.setState({userId: e.target.value})
  }

  _handleQuery(){
    fetch('http://rap2api.taobao.org/app/mock/17913/api/query')
    .then((response)=>response.json())
    .then((score)=>{
      this.setState({dataSource: [Object.assign(score,{key:score.userId})]});
    })
  }
}

export default Result;