import React, { Component } from 'react';
import { Layout, Radio, Button } from 'antd';
import '../static/css/test-paper.scss';

const { Header, Content } = Layout;
const RadioGroup = Radio.Group;

class TestPaper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <Layout className="test-paper-container normal-container">
        <Header className="normal-title">xxx考试系统</Header>
        <Content className="test-paper-content normal-content">
          <h3 className="test-paper-title">xxx试卷标题</h3>
          <ul className="test-paper-question-list">
            <li className="test-paper-question">
              <div className="test-paper-question-title"><b>第一题标题</b></div>
              <div className="test-paper-question-radios">
                <RadioGroup onChange={ this.onChange } value={ this.state.value }>
                  <Radio className="test-paper-question-radio" value={1}>A.第一题答案</Radio>
                  <Radio className="test-paper-question-radio" value={2}>B.第二题答案</Radio>
                  <Radio className="test-paper-question-radio" value={3}>C.第三题答案</Radio>
                  <Radio className="test-paper-question-radio" value={4}>D.第四题答案</Radio>
                </RadioGroup>
              </div>
            </li>
            <li className="test-paper-question">
              <div className="test-paper-question-title"><b>第一题标题</b></div>
              <div className="test-paper-question-radios">
                <RadioGroup onChange={ this.onChange } value={ this.state.value }>
                  <Radio className="test-paper-question-radio" value={1}>A.第一题答案</Radio>
                  <Radio className="test-paper-question-radio" value={2}>B.第二题答案</Radio>
                  <Radio className="test-paper-question-radio" value={3}>C.第三题答案</Radio>
                  <Radio className="test-paper-question-radio" value={4}>D.第四题答案</Radio>
                </RadioGroup>
              </div>
            </li>
            <li className="test-paper-question">
              <div className="test-paper-question-title"><b>第一题标题</b></div>
              <div className="test-paper-question-radios">
                <RadioGroup onChange={ this.onChange } value={ this.state.value }>
                  <Radio className="test-paper-question-radio" value={1}>A.第一题答案</Radio>
                  <Radio className="test-paper-question-radio" value={2}>B.第二题答案</Radio>
                  <Radio className="test-paper-question-radio" value={3}>C.第三题答案</Radio>
                  <Radio className="test-paper-question-radio" value={4}>D.第四题答案</Radio>
                </RadioGroup>
              </div>
            </li>
            <li className="test-paper-question">
              <div className="test-paper-question-title"><b>第一题标题</b></div>
              <div className="test-paper-question-radios">
                <RadioGroup onChange={ this.onChange } value={ this.state.value }>
                  <Radio className="test-paper-question-radio" value={1}>A.第一题答案</Radio>
                  <Radio className="test-paper-question-radio" value={2}>B.第二题答案</Radio>
                  <Radio className="test-paper-question-radio" value={3}>C.第三题答案</Radio>
                  <Radio className="test-paper-question-radio" value={4}>D.第四题答案</Radio>
                </RadioGroup>
              </div>
            </li>
            <li className="test-paper-question">
              <div className="test-paper-question-title"><b>第一题标题</b></div>
              <div className="test-paper-question-radios">
                <RadioGroup onChange={ this.onChange } value={ this.state.value }>
                  <Radio className="test-paper-question-radio" value={1}>A.第一题答案</Radio>
                  <Radio className="test-paper-question-radio" value={2}>B.第二题答案</Radio>
                  <Radio className="test-paper-question-radio" value={3}>C.第三题答案</Radio>
                  <Radio className="test-paper-question-radio" value={4}>D.第四题答案</Radio>
                </RadioGroup>
              </div>
            </li>
          </ul>
          <div className="test-paper-submit-button">
            <Button>重置</Button>
            <Button type="primary">提交</Button>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default TestPaper;