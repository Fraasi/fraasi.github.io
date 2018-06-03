export function fetchRepos() {

	const dropDowns = document.querySelector('.dropdown-content');
	fetch('https://api.github.com/users/fraasi/repos').then(function (response) {
		const contentType = response.headers.get("content-type");
		if (contentType && contentType.indexOf("application/json") !== -1) {
			return response.json()
				.then(function (json) {
					json.forEach(obj => {
						if (obj.name.includes('repo') || obj.name.includes('fraasi') || obj.fork) {
							console.log('skip');
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
	})

}

export function fetchPhyllotaxis() {
	// random between 1 - 72 
	const rand = Math.floor(Math.random() * 72 ) +1
	const url = ` https://raw.githubusercontent.com/Fraasi/Phyllotaxis-leaf-arrangement/gh-pages/images/phyllotaxis${rand}.png`
	return url
}
