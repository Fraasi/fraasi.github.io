import React, { Component } from 'react'
// import { HashRouter } from 'react-router-dom'
import '../css/App.css'
import '../css/dropdown.css'

import { fetchRepos, getPhyllotaxisUrl } from '../js/utils'
import getDAUrl from '../js/da';
import Readme from './Readme'
import Header from './Header';


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
        name: '',
        title: '',
        updated_at: '',
        html_url: '',
        branch: '',
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

  handleRepoClick = (e) => {
    const repoName = e.target.dataset.name
    const repo = this.state.repos.find(repo => repo.name === repoName)
    const branch = repo.default_branch
    fetch(`https://raw.githubusercontent.com/Fraasi/${repoName}/${branch}/README.md`)
      .then((resp) => {
        if (!resp.ok) throw Error()
        return resp.text()
      })
      .then((readme) => {
        this.setState({
          currentRepo: {
            readme,
            name: repo.name,
            title: repo.name.replace(/-/g, ' '),
            updated_at: repo.updated_at,
            created_at: repo.created_at,
            html_url: repo.html_url,
            branch
          },
        })
      })
      .catch((err) => {
        this.setState({
          currentRepo: {
            title: err.message,
          },
        })
      })
  }

  render() {
    const {
      phyllotaxisImgUrl, deviantImgUrl, dailyQuote, repos, currentRepo,
    } = this.state
    console.log('repos app', repos);
    return (
      <div className="App">
        <Header repos={repos} handleRepoClick={handleRepoClick} />

        <section className="body">
        <Readme currentRepo={currentRepo} />

          <div className="body-left">
            {dailyQuote.quote}
            <br />
            - {dailyQuote.author}
          </div>
          <div className="body-left">
            <a rel="noopener noreferrer" title="PhylloTaxis" href="https://fraasi.github.io/Phyllotaxis-leaf-arrangement/PhylloTaxis.html" target="_blank">
              <img src={phyllotaxisImgUrl} alt="phyllotaxis" className="left-image" />
            </a>
          </div>
          <div className="body-left">
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


        </section>
      </div>
    );
  }
}

export default App;
