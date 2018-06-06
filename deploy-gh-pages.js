const ghpages = require('gh-pages')

const date = new Date()
const datum = 'Deployed ' + date.toLocaleString()

ghpages.publish('build', {
	branch: 'master',
	message: datum,
}, () => { console.log(datum) })
