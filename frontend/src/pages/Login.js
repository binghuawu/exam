import React, { Component } from 'react';
import { Link } from 'react-router';
import { Layout, Form, Icon, Input, Button, Checkbox } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import '../static/css/main.scss';
import '../static/css/login.scss';

const FormItem = Form.Item;

class Login extends Component {
  	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
		  if (!err) {
			console.log('Received values of form: ', values);
		  }
		});
	}

	render() {
			const { getFieldDecorator } = this.props.form;
			return (
				<Layout className="login-container">
					<Header className="login-title">xxx考试系统</Header>
					<Content className="login-content">
						<Form onSubmit={ this.handleSubmit } className="login-form">
							<FormItem>
							{ getFieldDecorator('userId', {
								rules: [{ required: true, message: 'Please input your userId!' }],
							})(
								<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="userId" />
							)}
							</FormItem>
							<FormItem>
							{getFieldDecorator('password', {
								rules: [{ required: true, message: 'Please input your Password!' }],
							})(
								<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
							)}
							</FormItem>
							<FormItem>
							<Button type="primary" htmlType="submit" className="login-form-button">
								Log in
							</Button>
							</FormItem>
						</Form>	
					</Content>
				</Layout>
			);	
	}
}

const WrappedNormalLoginForm = Form.create()(Login);

export default WrappedNormalLoginForm;