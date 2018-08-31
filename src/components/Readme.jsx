import React from 'react'
import showdown from 'showdown'
import '../css/readme.css'

showdown.setFlavor('github')
const converter = new showdown.Converter()

export default function Readme(props) {
  const { currentRepo } = props
  if (currentRepo.readme === '') {
    return (
      <div className="body-right">
       Choose a repository from the dropdown menu
      </div>
    )
  }

  const string = currentRepo.readme.replace(/\(([\w\/-]+(.jpg|.png))\)/g, (match, $1) => `(https://raw.githubusercontent.com/Fraasi/${currentRepo.name}/${currentRepo.branch}/${$1})`)

  return (
    <div className="body-right">
      <h3>
        {currentRepo.title}
      </h3>
      {`Created: ${currentRepo.created_at}`}
      <br />
      {`Updated: ${currentRepo.updated_at}`}
      <br />
      <a rel="noopener noreferrer" href={currentRepo.html_url} target="_blank">Repository Url</a>
      <br />
      (README.md)
      <div
        className="markdown"
        dangerouslySetInnerHTML={{ __html: converter.makeHtml(string) }}
      />
    </div>
  )
}
