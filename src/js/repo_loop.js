export default function () {

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
							dropDowns.innerHTML += `<a href="${obj.html_url}">${spaced} target="_blank" </a><br>`;
						}
					});
					dropDowns.innerHTML += '<a href="https://codepen.io/Fraasi/">@ Codepen</a>';
				});
		} else {
			console.log("Oops, not a JSON!");
		}
	})

}