import React, { Component } from 'react';

import '../static/css/main.scss'
import { Link } from 'react-router';

class App extends Component {
  	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log('mount');
	}

	render() {
		return(
			<div className="container">
				<Link to="/calendar">calendar</Link><br/>
				<Link to="/test-paper">testPaper</Link><br/>
				<Link to="/result">result</Link><br/>
				<Link to="/score">score</Link>
			</div>	
		) 
	}
}

export default App;