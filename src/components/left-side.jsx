import React from 'react'
import '../css/left-side.css'

export default function LeftSide(props) {
  const { dailyQuote, deviantImgUrl, phyllotaxisImgUrl } = props
  return (
    <div className="left-side">
      <a href="https://fraasi.github.io/Random-quote-machine/" rel="noopener noreferrer" title="Random quote" target="_blank">
        {dailyQuote.quote}
      </a>
      <br />
      - {dailyQuote.author}
      <div className="left">
        <a rel="noopener noreferrer" title="PhylloTaxis" href="https://fraasi.github.io/Phyllotaxis-leaf-arrangement/PhylloTaxis.html" target="_blank">
          <img src={phyllotaxisImgUrl} alt="Phyllotaxis" className="left-image" />
        </a>
      </div>
      <div className="left">
        <a rel="noopener noreferrer" title="Deviant art pic" href="https://www.deviantart.com/doofassi/gallery/" target="_blank">
          <img src={deviantImgUrl} alt="Deviant art pic" className="left-image" />
        </a>
      </div>
    </div>
  )
}
