import React, { Component } from 'react'
import codePNG from '../assets/code.png'
import '../css/App.css'
import '../css/gitfetch.css'
import '../css/header.css'
import { fetchRepos, fetchPhyllotaxis, fetchQuote } from '../js/gitfetch.js'


class App extends Component {
	constructor() {
		super()
		this.state = {
			phyllotaxisImgUrl: '',
			dailyQuote: {
				quote: 'Tax his tobacco, Tax his drink, Tax him if he Tries to think. Tax his cigars, Tax his beers, If he cries Tax his tears. ',
				author: 'Charlie Reese'
			}
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
		// fetchQuote()

		this.setState({
			phyllotaxisImgUrl: fetchPhyllotaxis()
		})
	}


	render() {
		return (
			<div className="App">
				<header className="header">
					<img src={codePNG} className="logo" alt="logo" />
					<div className="dropdown">
						<button className="dropbutton">Repositories</button>
						<div className="dropdown-content"></div>
					</div>
					<h1 className="title">
						Fra A.S I
					</h1>

					<div className="header-bar left">
						<span className="header-shadow left top"></span>
						<span className="header-shadow left bottom"></span>
					</div>
					<div className="header-bar right">
						<span className="header-shadow right top"></span>
						<span className="header-shadow right bottom"></span>
					</div>
				</header>

				<section className="body">

					<div className="body-left">
						{this.state.dailyQuote.quote} <br />
						- {this.state.dailyQuote.author}
					</div>

					<div className="body-right">
						<a rel="noopener noreferrer" title="PhylloTaxis" href="https://fraasi.github.io/Phyllotaxis-leaf-arrangement/PhylloTaxis.html" target="_blank"> <img src={this.state.phyllotaxisImgUrl} alt="phyllotaxis" className="phyllotaxis-image" /> </a>
					</div>
					<div className="body-left">
						<h3>Complete rewrite in progress<span className="jsloader"></span>
						</h3></div>

				</section>
			</div>
		);
	}
}

export default App;
