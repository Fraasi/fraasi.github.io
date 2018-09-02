
import React from 'react'
import codePNG from '../assets/code.svg'
import '../css/header.css'

export default function Header(props) {
  const { repos, handleRepoClick } = props
  return (
    <header className="header">
      <img src={codePNG} className="code-logo" alt="code-logo" />
      <div className="dropdown">
        <button type="button" className="dropbutton">Repositories</button>
        <div className="dropdown-content">
          <ul>
            {repos.map((repo) => {
              const spaced = repo.name.replace(/-/g, ' ')
              return (
                <li key={repo.id} data-name={repo.name} onClick={handleRepoClick}>{spaced}</li>
              )
            })}
          </ul>
          <a href="https://github.com/Fraasi/">@ Github</a>
          <br />
          <a href="https://codepen.io/Fraasi/">@ Codepen</a>
          <br />
          <a href="https://www.deviantart.com/doofassi/gallery/">@ Deviantart</a>
        </div>
      </div>
      <h1 className="title">
        <a href="/">Fra A.S I</a>
      </h1>

      <div className="header-bar left">
        <span className="header-shadow left top" />
        <span className="header-shadow left bottom" />
      </div>
      <div className="header-bar right">
        <span className="header-shadow right top" />
        <span className="header-shadow right bottom" />
      </div>
    </header>
  )
}
