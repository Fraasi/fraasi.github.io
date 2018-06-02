import React, { Component } from 'react'
import codePNG from '../assets/code.png'
import '../css/App.css'
import '../css/repo_loop.css'
import fetchRepos from '../js/repo_loop.js'


class App extends Component {

	componentDidMount() {
		fetchRepos()
		var loader = document.querySelector('.jsloader');
		// var int =
		setInterval(function () {
			// eslint-disable-next-line
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
						Complete rewrite in progress
						<span class="jsloader"></span>
					</h1>
					<div class="dropdown">
						<button class="dropbutton">Repositories</button>
						<div class="dropdown-content">
						</div>
					</div>
				</header>
				<div className="App-intro">
				</div>
			</div>
		);
	}
}

export default App;
