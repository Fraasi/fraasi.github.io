function click(e) {
  console.log('click', e);
}

export function fetchRepos() {
  console.log('this', this)
  const dropDownDiv = document.querySelector('.dropdown-content')
  fetch('https://api.github.com/users/fraasi/repos')
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    })
    .then((json) => {
      json.sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
      console.log('repos', json)
      json.forEach((obj) => {
        if (!obj.name.includes('repo') || !obj.name.includes('fraasi') || !obj.fork) {
          const spaced = obj.name.replace(/-/g, ' ')
          dropDownDiv.innerHTML += `<a target="_blank" href="${obj.html_url}">${spaced}</a><br>`
        }
      })
      dropDownDiv.innerHTML += '<a href="https://codepen.io/Fraasi/">@ Codepen</a>'
      this.setState({
        repos: json,
      })
    })
    .catch((error) => {
      console.log(error)
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
