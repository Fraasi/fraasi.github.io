import React, { Component } from 'react';
import codePNG from '../assets/code.png';
import '../css/App.css';


class App extends Component {

	componentDidMount() {
		var loader = document.querySelector('.jsloader');

		var int = setInterval(function () {
			if ((loader.innerHTML += '.').length == 4)
				loader.innerHTML = '';
			//clearInterval( int ); // at some point, clear the setInterval
		}, 500);
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={codePNG} className="App-logo" alt="logo" />
					<h1 className="App-title">
					Complete rewrite in progress<span class="jsloader"></span>					
					</h1>
				</header>
				<div className="App-intro">
				</div>
			</div>
		);
	}
}

export default App;
