import React, { Component } from 'react'
import { Layout, Input, Button, Table } from 'antd';

import '../static/css/result.scss';

const { Header, Content } = Layout;

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
      dataSource:[]
    }

    this._handleUserIdChange = this._handleUserIdChange.bind(this);
    this._handleQuery = this._handleQuery.bind(this);
  }

  componentDidMount() {
    fetch('http://1bf8acfd.ngrok.io/api/queryAll')
    .then((response)=>response.json())
      .then((scores) => {
      this.setState({dataSource: scores.map((score)=>Object.assign(score,{key:score.userId}))});
    }).catch((err) => {
      console.error(err);
      console.log(err.response);
      console.log(err.message);
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
    fetch('http://1bf8acfd.ngrok.io/api/query/' + this.state.userId)
    .then((response)=>response.json())
    .then((score) => {
      this.setState({dataSource: [Object.assign(score,{key:score.userId})]});
      }).catch((err) => {
      console.error(err);
      console.log(err.response);
      console.log(err.message);
    })
  }
}

export default Result;