const ghpages = require('gh-pages')

const date = new Date()

const callback = () => {
	console.log('Deployed ' + date.toLocaleString())
}

ghpages.publish('build', {
	branch: 'master',
	message: 'Deployed ' + date.toLocaleString(),
}, callback);
