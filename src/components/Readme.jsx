import React from 'react'
import showdown from 'showdown'
import CV from './CV'
import '../css/readme.css'

showdown.setFlavor('github')
const converter = new showdown.Converter()

export default function Readme(props) {
  const { currentRepo } = props
  if (currentRepo.readme === '') return (<CV />)

  const string = currentRepo.readme.replace(/\(([\w\/-]+(.jpg|.png))\)/g, (match, $1) => `(https://raw.githubusercontent.com/Fraasi/${currentRepo.name}/${currentRepo.branch}/${$1})`)

  return (
    <div className="body-right">
      <h3>
        <a rel="noopener noreferrer" href={currentRepo.html_url} target="_blank">{currentRepo.title}</a>
      </h3>
      {`Created:\u00A0\u00A0${currentRepo.created_at}`}
      <br />
      {`Updated: ${currentRepo.updated_at}`}
      <br />
      <br />
      <br />
      (README.md)
      <div
        className="markdown"
        dangerouslySetInnerHTML={{ __html: converter.makeHtml(string) }}
      />
    </div>
  )
}
