import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'
import codePNG from '../assets/code.png'
import '../css/App.css'
import '../css/utils.css'
import '../css/header.css'
import { fetchRepos, getPhyllotaxisUrl, fetchQuote } from '../js/utils'
import getDAUrl from '../js/da';


class App extends Component {
  constructor() {
    super()
    this.state = {
      phyllotaxisImgUrl: '',
      deviantImgUrl: '',
      repos: {},
      dailyQuote: {
        quote: 'Tax his tobacco, Tax his drink, Tax him if he Tries to think. Tax his cigars, Tax his beers, If he cries Tax his tears. ',
        author: 'Charlie Reese',
      },
    }
  }

  componentDidMount() {
    // const loader = document.querySelector('.jsloader')
    // // var int =
    // setInterval(() => {
    //   // eslint-disable-next-line
    //   if ((loader.innerHTML += '.').length == 4) loader.innerHTML = ''
    //   // clearInterval( int ); // at some point, clear the setInterval
    // }, 700)

    fetchRepos.call(this)
    // fetchQuote.call(this)

    this.setState({
      phyllotaxisImgUrl: getPhyllotaxisUrl(),
      deviantImgUrl: getDAUrl(),
    })
  }


  render() {
    const { phyllotaxisImgUrl, deviantImgUrl, dailyQuote } = this.state
    return (
      <div className="App">
        <header className="header">
          <img src={codePNG} className="code-logo" alt="code-logo" />
          <div className="dropdown">
            <button type="button" className="dropbutton">Repositories</button>
            <div className="dropdown-content" />
          </div>
          <h1 className="title">
            <a href="/">Fra A.S I</a>
          </h1>

          <div className="header-bar left">
            <span className="header-shadow left top" />
            <span className="header-shadow left bottom" />
          </div>
          <div className="header-bar right">
            <span className="header-shadow right top" />
            <span className="header-shadow right bottom" />
          </div>
        </header>

        <section className="body">

          <div className="body-left">
            {dailyQuote.quote}
            <br />
            -
            {' '}
            {dailyQuote.author}
          </div>
          <div>
            <a rel="noopener noreferrer" title="PhylloTaxis" href="https://fraasi.github.io/Phyllotaxis-leaf-arrangement/PhylloTaxis.html" target="_blank">
              <img src={phyllotaxisImgUrl} alt="phyllotaxis" className="left-image" />
            </a>
          </div>
          <div>
            <a rel="noopener noreferrer" title="Deviant art pic" href="https://www.deviantart.com/doofassi/gallery/" target="_blank">
              <img src={deviantImgUrl} alt="Deviant art pic" className="left-image" />
            </a>
          </div>
          <div className="body-left">
            <h3>
              Complete rewrite in progress
              <span className="jsloader" />
            </h3>
          </div>

          <div className="body-right">
            <a rel="noopener noreferrer" title="PhylloTaxis" href="https://fraasi.github.io/Phyllotaxis-leaf-arrangement/PhylloTaxis.html" target="_blank">
              {' '}
              <img src={phyllotaxisImgUrl} alt="phyllotaxis" className="phyllotaxis-image" />
              {' '}
            </a>
          </div>

        </section>
      </div>
    );
  }
}

export default App;
