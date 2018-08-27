// eslint-disable-next-line
const ghpages = require('gh-pages')

const date = new Date()
const datum = `Deployed ${date.toLocaleString()}`

ghpages.publish('build', {
  branch: 'master',
  message: datum,
}, (err) => {
  if (err) throw err;
  console.log(datum)
})
