
import React from 'react'
import codePNG from '../assets/code.svg'
import '../css/header.css'

export default function Header(props) {
  const { repos, handleRepoClick, titleClick } = props
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
          <a href="https://github.com/Fraasi/" target="_blank" rel="noopener noreferrer">@ Github</a>
          <br />
          <a href="https://www.npmjs.com/~fraasi" target="_blank" rel="noopener noreferrer">@ Npm</a>
          <br />
          <a href="https://codepen.io/Fraasi/" target="_blank" rel="noopener noreferrer">@ Codepen</a>
          <br />
          <a href="https://www.deviantart.com/doofassi/gallery/" target="_blank" rel="noopener noreferrer">@ Deviantart</a>
        </div>
      </div>
      <h1 className="title" onClick={titleClick}>
        Fra A.S I
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
