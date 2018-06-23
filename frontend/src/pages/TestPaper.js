import React, { Component } from 'react';
import { Layout, Radio, Button } from 'antd';
import { browserHistory } from 'react-router';
import '../static/css/test-paper.scss';
import testPaperApi from '../../api/test-paper';

const { Header, Content } = Layout;
const RadioGroup = Radio.Group;

class TestPaper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: [],
      title: '',
      selected: []
    };

    this.onChange = this.onChange.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    testPaperApi.fetchQuestions().then(data => {
      const choices = data.choices;
      const title = data.title;
      this.setState({ choices, title });
    });
  }

  _getUserId() {
    return localStorage.getItem('userId');
  }

  onChange(e, index) {
    const selected = this.state.selected;
    selected[index] = e.target.value;
    this.setState({
      selected
    });
  }

  onReset() {
    this.setState({ selected: [] });
  }

  onSubmit() {
    const userId = this._getUserId();
    const selected = this.state.selected;
    const choices = selected.map(select => {
      const id = select.split('-')[0];
      const answer = select.split('-')[1];
      return {
        id, 
        answer
      };
    });
    testPaperApi.submitQuestions({
      userId,
      choices
    }).then(data => {
      browserHistory.push('/score/' + data.score);
    });
  }

  render() {
    const { choices, title, selected } = this.state;

    return (
      <Layout className="test-paper-container normal-container">
        <Header className="normal-title">xxx考试系统</Header>
        <Content className="test-paper-content normal-content">
          <h3 className="test-paper-title">{ title }</h3>
          <ul className="test-paper-question-list">
            {
              choices.map((choice, index) => {
                const options = choice.options || [];
                return (
                  <li className="test-paper-question" key={ choice.id }>
                    <div className="test-paper-question-title"><b>{ choice.content }</b></div>
                    <div className="test-paper-question-radios">
                      <RadioGroup onChange={ e => this.onChange(e, index) } value={ selected[index] }>
                        {
                          Object.keys(options).map(option => {
                            return (
                              <Radio className="test-paper-question-radio" value={ `${choice.id}-${option}` } key={ option }>
                                { option.toUpperCase() }.{ options[option] }
                              </Radio>
                            );
                          })
                        }
                      </RadioGroup>
                    </div>
                  </li>
                );
              })
            }
          </ul>
          <div className="test-paper-submit-button">
            <Button onClick={ this.onReset }>重置</Button>
            <Button type="primary" onClick={ this.onSubmit }>提交</Button>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default TestPaper;