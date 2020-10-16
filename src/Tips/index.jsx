import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import showdown from 'showdown'
import './tips.css'
import tipsPath from './tips.md'

showdown.setFlavor('github')
const converter = new showdown.Converter()

export default function() {
  const [md, setMd] = useState('')
  useEffect(() => {
    fetch(tipsPath)
      .then(d => d.text())
      .then(text => setMd(text))
  }, [])

  return (
    <>
    <Link to="/" className="route-link">⇚</Link>
    <section className="body body-tips">
      <h2 className="center">
          Tips & tricks I always forget
      </h2><br/>
      <div
        className="markdown"
        dangerouslySetInnerHTML={{ __html: converter.makeHtml(md) }}
      />
    </section>
  </>
  )
}
