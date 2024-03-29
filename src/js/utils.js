export function fetchRepos() {
  fetch('https://api.github.com/users/fraasi/repos')
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    })
    .then((json) => {
      const repos = json.filter((repo) => (!repo.name.includes('repo') && !repo.fork))
      repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      this.setState({
        repos,
      })
    })
    .catch((error) => {
      console.log(error)
      const dropDownDiv = document.querySelector('.dropdown-content')
      dropDownDiv.innerHTML = `${error.message}<br/>Try reloading page`
    })
}

export function getPhyllotaxisUrl() {
  const rand = Math.floor(Math.random() * 72) + 1 // random between 1 - 72
  const url = ` https://raw.githubusercontent.com/Fraasi/Phyllotaxis-leaf-arrangement/gh-pages/images/phyllotaxis${rand}.png`
  return url
}

export function fetchQuote() {
  function timeoutQuote() {
    this.setState({
      dailyQuote: {
        quote: 'Tax his tobacco, Tax his drink, Tax him if he Tries to think. Tax his cigars, Tax his beers, If he cries Tax his tears. ',
        author: 'Charlie Reese',
      },
    })
  }

  fetch('https://f-rq.cyclic.app')
    .then((data) => {
      if (data.status !== 200) {
        setTimeout(timeoutQuote.bind(this), 30000)
        return data
      }
      return data.json()
    })
    .then((json) => {
      this.setState({
        dailyQuote: {
          quote: json.statusText || json.quote,
          author: json.status || json.author,
        },
      })
    })
    .catch((err) => {
      console.log('err', err);
      this.setState({
        dailyQuote: {
          quote: `${err}`,
          author: '',
        },
      })
      setTimeout(timeoutQuote.bind(this), 30000)
    })
}
