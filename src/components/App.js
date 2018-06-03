import React, { Component } from 'react'
import codePNG from '../assets/code.png'
import '../css/App.css'
import '../css/gitfetch.css'
import { fetchRepos, fetchPhyllotaxis } from '../js/gitfetch.js'


class App extends Component {
	constructor() {
		super()
		this.state = {
			phyllotaxisImgUrl: ''
		}
	}

	componentDidMount() {
		var loader = document.querySelector('.jsloader')
		// var int =
		setInterval(function () {
			// eslint-disable-next-line
			if ((loader.innerHTML += '.').length == 4)
			loader.innerHTML = ''
			//clearInterval( int ); // at some point, clear the setInterval
		}, 500)

		fetchRepos()
		// const pic = document.querySelector('.phyllotaxis-image')
		// pic.src = fetchPhyllotaxis()
		this.setState({
			phyllotaxisImgUrl: fetchPhyllotaxis()
		})
	}

	clickPhylloTaxis() {
		console.log('cick')
		// onClick={this.clickPhylloTaxis}
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<div className="dropdown">
						<button className="dropbutton">Repositories</button>
						<div className="dropdown-content"></div>
					</div>
					<h1 className="App-title">
						<img src={codePNG} className="App-logo" alt="logo" />
						Fra A.S I <br />
					</h1>
					<h2>Complete rewrite in progress
						<span className="jsloader"></span></h2>

				</header>
				<div className="App-body">
					<a rel="noopener noreferrer" href="https://fraasi.github.io/Phyllotaxis-leaf-arrangement/PhylloTaxis.html" target="_blank"> <img src={this.state.phyllotaxisImgUrl} alt="phyllotaxis" className="phyllotaxis-image" /> </a>

				</div>
			</div>
		);
	}
}

export default App;
