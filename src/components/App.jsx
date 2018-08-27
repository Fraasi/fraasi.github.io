import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'
import codePNG from '../assets/code.png'
import '../css/App.css'
import '../css/utils.css'
import '../css/header.css'
import { fetchRepos, getPhyllotaxisUrl, fetchQuote } from '../js/utils'
import getDAUrl from '../js/da';
import RightSide from './right-side'


class App extends Component {
  constructor() {
    super()
    this.state = {
      phyllotaxisImgUrl: '',
      deviantImgUrl: '',
      repos: [],
      currentRepo: {
        readme: '',
        created_at: '',
        title: '',
        updated_at: '',
        html_url: '',
      },
      dailyQuote: {
        quote: 'Tax his tobacco, Tax his drink, Tax him if he Tries to think. Tax his cigars, Tax his beers, If he cries Tax his tears. ',
        author: 'Charlie Reese',
      },
    }
  }

  componentDidMount() {
    fetchRepos.call(this)
    // fetchQuote.call(this)

    this.setState({
      phyllotaxisImgUrl: getPhyllotaxisUrl(),
      deviantImgUrl: getDAUrl(),
    })
  }

  handleAClick = (e) => {
    const repoName = e.target.dataset.name
    console.log('repoName', repoName);
    const branch = repoName === 'fraasi.github.io' ? 'source' : 'master'
    fetch(`https://raw.githubusercontent.com/Fraasi/${repoName}/${branch}/README.md`)
      .then(resp => {
        if (!resp.ok) throw Error()
        return resp.text()
      })
      .then(readme => {
        const repo = this.state.repos.find(repo => repo.name === repoName)
        console.log('repo.name', repo.name);

        this.setState({
          currentRepo: {
            readme,
            title: repo.name.replace(/-/g, ' '),
            updated_at: repo.updated_at,
            created_at: repo.created_at,
            html_url: repo.html_url
          }
        })
      })
      .catch(err => {
        this.setState({
          currentRepo: {
            title: err.message
          }
        })
      })
  }

  render() {
    const {
      phyllotaxisImgUrl, deviantImgUrl, dailyQuote, repos, currentRepo
    } = this.state
    return (
      <div className="App">
        <header className="header">
          <img src={codePNG} className="code-logo" alt="code-logo" />
          <div className="dropdown">
            <button type="button" className="dropbutton">Repositories</button>
            <div className="dropdown-content">
              {repos.map((repo) => {
                const spaced = repo.name.replace(/-/g, ' ')
                return (
                  <React.Fragment key={repo.id}>
                    <div data-name={repo.name} onClick={this.handleAClick}>{spaced}</div>
                    <br />
                  </React.Fragment>
                )
              })}
              <a href="https://codepen.io/Fraasi/">@ Codepen</a>
              <br />
              <a href="https://www.deviantart.com/doofassi/gallery/">@ Deviantart</a>
            </div>
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

              <RightSide currentRepo={currentRepo} />

        </section>
      </div>
    );
  }
}

export default App;
