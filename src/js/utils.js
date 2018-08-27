export function fetchRepos() {
  fetch('https://api.github.com/users/fraasi/repos')
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    })
    .then((json) => {
      const repos = json.filter(repo => (!repo.name.includes('repo') || !repo.name.includes('fraasi') || !repo.fork))
      repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      console.log('repos', repos)
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
  // if (this.state.dailyQuote.quote) return
  fetch('https://cors-anywhere.herokuapp.com/https://ms-rq-api.herokuapp.com/')
    .then((data) => {
      if (data.status !== 200) return data
      return data.json()
    })
    .then((json) => {
      const author = Object.keys(json)[0]
      this.setState({
        dailyQuote: {
          quote: json.statusText || json[author],
          author: json.status || author,
        },
      })
    })
}
