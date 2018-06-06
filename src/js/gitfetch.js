export function fetchRepos() {

	const dropDowns = document.querySelector('.dropdown-content');
	fetch('https://api.github.com/users/fraasi/repos').then(function (response) {
		if (!response.ok) {
            throw Error(response.statusText);
        }
		const contentType = response.headers.get("content-type");
		if (contentType && contentType.indexOf("application/json") !== -1) {
			return response.json()
				.then(function (json) {
					json.forEach(obj => {
						if (obj.name.includes('repo') || obj.name.includes('fraasi') || obj.fork) {
							console.log(obj);
						} else {
							const spaced = obj.name.replace(/-/g, ' ');
							dropDowns.innerHTML += `<a target="_blank" href="${obj.html_url}">${spaced}</a><br>`;
						}
					});
					dropDowns.innerHTML += '<a href="https://codepen.io/Fraasi/">@ Codepen</a>';
				});
		} else {
			console.log("Oops, not a JSON!");
		}
	}).catch(function(error) {
		console.log(error);
		dropDowns.innerHTML = error.message + '<br/>Try reloading page'
    });

}

export function fetchPhyllotaxis() {
	// random between 1 - 72 
	const rand = Math.floor(Math.random() * 72 ) +1
	const url = ` https://raw.githubusercontent.com/Fraasi/Phyllotaxis-leaf-arrangement/gh-pages/images/phyllotaxis${rand}.png`
	return url
}

export function fetchQuote() {
	// if (this.state.dailyQuote.quote) return
	// eslint-disable-next-line
	return fetch('https://cors-anywhere.herokuapp.com/https://ms-rq-api.herokuapp.com/')
		.then((data) => {
			console.log('qdata: ', data)
			if (data.status !== 200) return data
			return data.json()
		})
		.then((json) => {
			console.log('Quote fetched:', json)
			// this.setState({
			// 	dailyQuote: {
			// 		quote: json.statusText || json[Object.keys(json)[0]],
			// 		author: json.status || Object.keys(json)[0]
			// 	}
			// })
			// return json
			
		})
}
