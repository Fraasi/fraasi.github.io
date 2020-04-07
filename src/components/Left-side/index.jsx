import React from 'react'
import './left-side.css'
import spinner from '../../assets/spinner.svg'

export default function LeftSide(props) {
  const { dailyQuote, deviantImgUrl, phyllotaxisImgUrl } = props
  return (
    <div className="left-side">
      <a href="https://fraasi.github.io/Random-quote-machine/" rel="noopener noreferrer" title="Random quote api" target="_blank">
        <b>Random quote api</b><br />
      </a>
      <div className="left quote">
        {dailyQuote.quote.length === 0 && <img src={spinner} className="spinner" alt="spinner" />}
        {dailyQuote.quote}
        <br />
        - {dailyQuote.author}
      </div>
      <div className="left">
        <a rel="noopener noreferrer" title="PhylloTaxis" href="https://fraasi.github.io/Phyllotaxis-leaf-arrangement/PhylloTaxis.html" target="_blank">
          {phyllotaxisImgUrl.length === 0 && <img src={spinner} className="spinner" alt="spinner" />}
          <img src={phyllotaxisImgUrl} alt="Phyllotaxis" className="left-image" />
        </a>
      </div>
      <div className="left">
        <a rel="noopener noreferrer" title="Deviant art pic" href="https://www.deviantart.com/doofassi/gallery/" target="_blank">
          {deviantImgUrl.length === 0 && <img src={spinner} className="spinner" alt="spinner" />}
          <img src={deviantImgUrl} alt="Deviant art pic" className="left-image" />
        </a>
      </div>
      <hr />
      <div className="left links">
        <strong>Fraasi @</strong><br />
        <a href="https://github.com/Fraasi/" target="_blank" rel="noopener noreferrer">Github</a>
        <br />
        <a href="https://www.npmjs.com/~fraasi" target="_blank" rel="noopener noreferrer">Npm</a>
        <br />
        <a href="https://codepen.io/Fraasi/" target="_blank" rel="noopener noreferrer">Codepen</a>
        <br />
        <a href="https://www.deviantart.com/doofassi/gallery/" target="_blank" rel="noopener noreferrer">Deviantart</a>
      </div>
      <hr />
    </div>
  )
}
