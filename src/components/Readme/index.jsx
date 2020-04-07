import React from 'react'
import showdown from 'showdown'
import CV from '../CV'
import './readme.css'
import spinner from '../../assets/spinner.svg'

showdown.setFlavor('github')
const converter = new showdown.Converter()

export default function Readme(props) {
  const { currentRepo, loading, error } = props
  if (error) {
    return (
      <p>
        Something went wrong:<br />
        {error}
      </p>
    )
  }
  if (currentRepo.readme === '' && !loading) return (<CV />)
  if (loading) return <img src={spinner} className="spinner" alt="spinner" />

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
      <div className="center">&darr;(README.md)&darr;</div>
      <div
        className="markdown"
        dangerouslySetInnerHTML={{ __html: converter.makeHtml(string) }}
      />
    </div>
  )
}
