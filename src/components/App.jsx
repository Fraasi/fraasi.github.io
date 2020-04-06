import React, { Component } from 'react'
import '../css/App.css'
import '../css/dropdown.css'
import { fetchRepos, getPhyllotaxisUrl, fetchQuote } from '../js/utils'
import getDAUrl from '../js/da'
import Readme from './Readme'
import Header from './Header'
import LeftSide from './Left-side'

function FetchException(resp) {
  console.log('resp:', resp)
  this.status = resp.status
  this.url = resp.url
  this.statusText = resp.statusText
  this.html_url = resp.html_url
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
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
      dailyQuote: { author: '', quote: '', },
    }
  }

  componentDidMount() {
    fetchRepos.call(this)
    fetchQuote.call(this)
    this.setState({
      phyllotaxisImgUrl: getPhyllotaxisUrl(),
      deviantImgUrl: getDAUrl(),
    })
  }

  handleRepoClick = (e) => {
    e.persist()
    const repoName = e.target.dataset.name
    this.setState(
      {
        loading: true,
        currentRepo: {
          readme: ''
        }
      }, () => {
        const repo = this.state.repos.find(repo => repo.name === repoName)
        const branch = repo.default_branch
        fetch(`https://raw.githubusercontent.com/Fraasi/${repoName}/${branch}/README.md`)
          .then((resp) => {
            if (!resp.ok) {
              resp.html_url = repo.html_url
              throw new FetchException(resp)
            }
            return resp.text()
          })
          .then((readme) => {
            this.setState({
              loading: false,
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
              loading: false,
              currentRepo: {
                title: err
              },
            })
          })
      }
    )
  }

  titleClick = () => {
    this.setState({
      currentRepo: {
        readme: '',
        loading: false
      }
    })
  }

  render() {
    const { phyllotaxisImgUrl, deviantImgUrl, dailyQuote, repos, currentRepo, loading } = this.state
    return (
      <div className="App">
        <Header repos={repos} handleRepoClick={this.handleRepoClick} titleClick={this.titleClick} />
        <section className="body">
          <LeftSide deviantImgUrl={deviantImgUrl} phyllotaxisImgUrl={phyllotaxisImgUrl} dailyQuote={dailyQuote} />
          <Readme currentRepo={currentRepo} loading={loading} />
        </section>
      </div>
    );
  }
}

export default App
