var dropDowns = document.querySelector('.dropdown-content');
var repos = 'https://api.github.com/users/fraasi/repos';


fetch(repos).then(function(response) {
  var contentType = response.headers.get("content-type");
  if(contentType && contentType.indexOf("application/json") !== -1) {
    return response.json()
	.then(function(json) {
	  json.forEach( obj => {
		if (obj.name.includes('repo') || obj.name.includes('fraasi')) {
			console.log('skip');
		} else {
			var spaced = obj.name.replace(/-/g, ' ');
			dropDowns.innerHTML += `<a href="${obj.html_url}">${spaced}</a><br>`;
		}
	  });	
	  dropDowns.innerHTML += '<a href="https://codepen.io/Fraasi/">@ Codepen</a>';
    });
  } else { 
    console.log("Oops, not a JSON!");
  }
});