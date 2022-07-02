import { Component, MouseEvent } from 'react'
import { fetchRepos, getPhyllotaxisUrl, fetchQuote } from '../../js/utils'
import getDAUrl from '../../js/da'
import Readme from '../Readme'
import Header from '../Header'
import LeftSide from '../Left-side'
import './app.css'

type Props = {}

type CurrentRepo = {
  readme: string;
  created_at?: string;
  name?: string;
  title?: string;
  updated_at?: string;
  html_url?: string;
  branch?: string;
  default_branch?: string;
}

type State = {
  error: string;
  loading: boolean;
  phyllotaxisImgUrl: string;
  deviantImgUrl: string;
  repos: Array<CurrentRepo>;
  currentRepo: CurrentRepo;
  dailyQuote: { author: string; quote: string };
}

class App extends Component<Props, State> {

  state: State = {
    error: '',
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
    dailyQuote: { author: '', quote: '' },
  }

  constructor(props: any) {
    super(props)
    this.handleRepoClick = this.handleRepoClick.bind(this)
    this.titleClick = this.titleClick.bind(this)
  }

  componentDidMount() {
    fetchRepos.call(this)
    fetchQuote.call(this)
    this.setState({
      phyllotaxisImgUrl: getPhyllotaxisUrl(),
      deviantImgUrl: getDAUrl(),
    })
  }

  handleRepoClick(e: MouseEvent<HTMLLIElement>) {
    e.persist()
    this.setState(
      {
        loading: true,
        error: '',
        currentRepo: {
          readme: '',
        },
      }, () => {
        const repoName = (e.target as HTMLLIElement).dataset.name
        const repo: CurrentRepo = this.state.repos.find((repo) => repo.name === repoName) || { readme: '' }
        const branch = repo.default_branch
        fetch(`https://raw.githubusercontent.com/Fraasi/${repoName}/${branch}/README.md`)
          .then((resp) => {
            if (!resp.ok) {
              const error = `${resp.status} ${resp.statusText}, repository url: ${repo.html_url}`
              this.setState({
                error,
              })
              throw new Error(resp.statusText)
            }
            return resp.text()
          })
          .then((readme) => {
            this.setState({
              loading: false,
              currentRepo: {
                readme,
                name: repo.name,
                title: repo.name?.replace(/-/g, ' '),
                updated_at: repo.updated_at,
                created_at: repo.created_at,
                html_url: repo.html_url,
                branch,
              },
            })
          })
          .catch(() => {
            this.setState({
              loading: false,
              currentRepo: {
                readme: '',
                title: '',
              },
            })
          })
      },
    )
  }

  titleClick() {
    this.setState({
      error: '',
      loading: false,
      currentRepo: {
        readme: '',
      },
    })
  }

  render() {
    const {
      phyllotaxisImgUrl, deviantImgUrl, dailyQuote, repos, currentRepo, loading, error,
    } = this.state
    return (
      <div className="App">
        <Header
          repos={repos}
          handleRepoClick={this.handleRepoClick}
          titleClick={this.titleClick}
        />
        <section className="body">
          <LeftSide
            deviantImgUrl={deviantImgUrl}
            phyllotaxisImgUrl={phyllotaxisImgUrl}
            dailyQuote={dailyQuote}
          />
          <Readme currentRepo={currentRepo} loading={loading} error={error} />
        </section>
      </div>
    );
  }
}

export default App
